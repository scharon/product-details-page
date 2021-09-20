import React from 'react';
import classes from './ProductPreview.module.css';


// this function-Based Component will return some jsx code
const ProductPreview = (props) => {
    
    // if Current Hour ist > 9 so we can use the value, else append a '0' to it. Same for Minutes 
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <div className = {classes.ProductPreview}>
          <img src = "https://imgur.com/iOeUBV7.png" alt = "Product Preview"></img>

          <div className= {classes.TimeSection}>
             {/* Current Time / date actuelle */}
             <p>{`${currentHour}:${currentMinute} `}</p>
          </div>

          <div className= {classes.HeartBeatSection}>         
             <i class="fas fa-heartbeat"></i>
             <p>78</p>
          </div>

        </div>
    );
}

export default ProductPreview; //default export because there's is only one thing to export from this file 