import React, { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { Link, useNavigate } from 'react-router-dom';
//The CardElement is used to render a pre-built credit card input field that 
//allows users to enter their card details securely.
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Card } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import axios from './axios';
import { db } from '../firebase';


function Payment() {

    const[{basket, user}, dispatch] = useStateValue();
    //Stripe is a technology company that provides a suite of tools and APIs 
    //for building and managing online payment processing.
    const stripe = useStripe();
    const elements = useElements();
    //useElements is used to access the Stripe Elements functionality.
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const[error, setError] = useState(null);
    const[disabled, setDisabled] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);
    const Navigate = useNavigate();

    //The useEffect Hook allows you to perform fetching data, directly updating the DOM, and timers.
    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        //When you define a function as async, it automatically returns a promise 
        //that will be resolved with the function's return value or rejected with 
        //an error if an exception is thrown.
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits(in paise, to make it rupee * by 100)
                url: `/payments/create?total=${getBasketTotal(basket)}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])
    console.log("The clients secret key is", clientSecret);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        setProcessing(true);
        
        //Backend Info
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type:"EMPTY_BASKET"
            });

            Navigate('/orders');
        })
    }   

    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                )
            </h1>
        </div>

         {/* Payment section - delivery address */}

        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Delivery Address </h3>
            </div>
            <div className='payment_address'>
                <p>{user.email}</p>
                <p>Jhunsi, Yojana 3</p>
                <p>Allahabad</p>
            </div>
        </div>

        {/* Payment section - Review Items */}

        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Review Items and Delivery</h3>
            </div>
            <div className='payment_items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
            </div>
        </div>

            {/* Payment section - Payment method */}

            <div className='payment_section'>
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    {/*Stripe will br done here*/ }
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment_priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"Rs"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Payment;