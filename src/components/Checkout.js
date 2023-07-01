import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const[{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>

      <div className='checkout_left'>
        <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/Eventpage/Stealdeals/mob/mob-bank-23.jpg" alt="ad">
        </img>
      
        <div className='checkout_title'> 
          <h3>Hello, {user?.email}</h3> 
          <h2>Your Shooping Basket</h2>
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
      <div className='checkout_right'>
      
        <Subtotal />
      </div>
  </div>  
  )
}

export default Checkout;