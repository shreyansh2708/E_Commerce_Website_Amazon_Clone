import React, { useEffect, useState } from 'react'
import "./Orders.css"
import { db } from '../firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';
function Orders() {

    const[{ basket, user}, dispatch] = useStateValue();
    const[orders,setOrders] = useState([]);

    useEffect(() => {
        if(user)
        {
            db
              .collection('users')//into users collection
              .doc(user?.uid)
              .collection('orders')//into orders
              .orderBy('created', 'desc')//most recently created and in descending order
              .onSnapshot(snapshot => {
                //onSnapshot to listen for real-time updates or changes in a data source, 
                //such as a database or a document.
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
              })
        }
        else{
            setOrders([]);
        }
    }, [user])
  return (
    <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders_order'>
                {orders.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
  )
}

export default Orders;