import React, { useEffect } from "react";
import Home from "./components/Home.js"
import Header from "./components/Header.js";
import Checkout from "./components/Checkout.js";
import Login from "./components/Login.js";
import Payment from "./components/Payment.js";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders.js";



const promise = loadStripe("pk_test_51NMYkrSAsjRyaNMd4DY0ME3TJE51Wm7hJzuzO3ebXl5xRBXV7tOwx8Tk5DbOYfMihxamO2bmyetjCfRJ0T5eKLpH00qTFstmYi");
function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {  //if authuser is true then
        // the user just logged in / the user was logged in
        //dispatch the user details into the data layer
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out i.e removed the user drom data layer
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
          <Router>
             <div className="app">
                <Routes>
                <Route exact path='/' element={<div><Header/><Home/></div>} />
                <Route exact path='/Login' element={<div><Login /></div>} />
                <Route path='/checkout' element={<div><Header/><Checkout /></div>} />
                <Route path='/orders' element={<div><Header/><Orders /></div>} />
                <Route path='/payment' element={<div><Header/><Elements stripe = {promise}><Payment /></Elements></div>} />
                </Routes>
             </div>
           </Router>

  );
}

export default App;
