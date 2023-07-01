import React from 'react'
import './Home.css';
import Product from "./Product.js";

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <a href='https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_16_mkw_symCJqBmk-dc?gclid=CjwKCAjwkeqkBhAnEiwA5U-uM5GYtIZB8nZx6d4GCwBkF2SRXK8oKG2GGTqJVzbMId7BSvvkn5TpexoCjTQQAvD_BwE&mrntrk=pcrid_657901934582_slid__pgrid_84577172528_pgeo_1007768_x__adext__ptid_kwd-339065342343'>
        <img className='home_image' src='https://m.media-amazon.com/images/I/71Alm3kI8pL._SX3000_.jpg'></img>
        </a>
        <div className='home_row'>
          <Product
            id="12321341"
            title="The Lean Startup: Fastrack New Limitless FS1 Smart Watch"
            price="1,995"
            rating="⭐⭐⭐⭐⭐"
            image="http://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-5.png?v=1658294451"
          />
          <Product
            d="49538094"
            title="Nikon Mirrorless Z7 II Body with 24-70mm Lens with Additional Battery, Optical Zoom, Black"
            price="89,999"
            rating="⭐⭐⭐⭐"
            image="https://m.media-amazon.com/images/I/91i6EgjrAiL._SX679_.jpg"
          />
          <Product
            id="4903850"
            title="PTron Newly Launched Zenbuds Pro1 Max ANC Earbuds, 30dB Active Noise Cancellation, 80Hrs Playtime"
            price="1,499"
            rating="⭐⭐⭐"
            image="https://m.media-amazon.com/images/I/51C0T-op8nL._SX522_.jpg"
          />
          <Product
            id="23445930"
            title="realme narzo N55 (Prime Blue, 6GB+128GB) 33W Segment Fastest Charging "
            price="12,999"
            rating="⭐⭐⭐⭐⭐"
            image="https://m.media-amazon.com/images/I/71Ftzmh3XWL._SX679_.jpg"
          />
        </div>
        <div className='home_row'>
          <Product
            id="3254354345"
            title="Egate O9 Pro Automatic Smart Projector | 840 ANSI | Native Full HD 1080p + 4K Support"
            price="26,990"
            rating="⭐⭐⭐⭐"
            image="https://m.media-amazon.com/images/I/81P4D0fpHtL._SX679_.jpg"
      
          />
          <Product
            id="90829332"
            title="ASUS ROG Strix G15 Advantage Edition, 15.6-inch (39.62 cm) WQHD 165Hz"
            price="97,999"
            rating="⭐⭐⭐⭐"
            image="https://m.media-amazon.com/images/I/71HmSKxHlCL._SX679_.jpg"
          />
          <Product
            id="90829332"
            title="Lifelong Regalia PowerNutri Mixer/Grinder/Blender/Shaker, 2 Stainless Steel Blades"
            price="1,799"
            rating="⭐⭐⭐⭐"
            image="https://m.media-amazon.com/images/I/61w9AWrKIoL._SX569_.jpg"
          />
        <Product
          id="56414122"
          title="Multicolor RGB LED Backlight Effects, Multimedia Keys, Durable Aluminum Body"
          price="1,199"
          rating="⭐⭐⭐⭐⭐"
          image="https://m.media-amazon.com/images/I/71QFAQCR6uL._SX569_.jpg"
        />
        </div>
       <div className='home_row'>
       <Product
          id="56412355"
          title="Echo Dot (5th Gen, 2023 release)| Smart speaker with Alexa (White)"
          price="5,499"
          rating="⭐⭐⭐⭐⭐"
          image="https://m.media-amazon.com/images/I/61JhG2HKMCL._SX679_.jpg"
        />
        <Product
          id="15242355"
          title="SYSKA Iron Press | 2 Year Warranty | Iron Box, Dry Iron, Electric Press, Electric Iron Press for Clothes, SDI-200 1000-Watt (TEAL)"
          price="539"
          rating="⭐⭐⭐"
          image="https://m.media-amazon.com/images/I/31R0PeHoomL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="15842355"
          title="Corner Shelf for Living Room, Wooden Corner Wall Shelf,Wall Decoration Items"
          price="665"
          rating="⭐⭐⭐⭐"
          image="https://m.media-amazon.com/images/I/61p225Rx5VL._SY741_.jpg"
        />
        
    
       </div>
      </div>
    </div>
    
  );
}

export default Home;