import react from "react";
import classes from './ProductDetails.module.css';
import ProductData from "../ProductData";


const ProductDetails  = (props) => {
    return(

        <div className={classes.ProductData}>
            <h1 className = {classes.ProductTitle}>{ProductData.title}</h1>
            <p className = {classes.ProductDescription}>{ProductData.description}</p>

            <h3 className = {classes.ProductSelect}>Select Color</h3>
            <div>
                <img className= {[classes.productImage, classes.SelectedProductImage].join(' ')} src = "https://imgur.com/iOeUBV7.png" alt = "Black colored watch"></img>
                <img className= {classes.productImage} src = "https://imgur.com/PTgQlim.png" alt = "Red colored watch"></img>
                <img className= {classes.productImage} src = "https://imgur.com/Mplj1YR.png" alt = "Blue colored watch"></img>
                <img className= {classes.productImage} src = "https://imgur.com/xSIK4M8.png" alt = "Purple colored watch"></img>
            </div>

            <h3 className = {classes.ProductSelect}>Features</h3>
            <div>
                <button className= {[classes.FeatureItem, classes.selectedFeatureItem].join(' ')}>Time</button>
                <button className= {classes.FeatureItem}>Heart Rate</button>
            </div>

            <button className= {classes.BuyButton}>Buy now</button>

      </div>
    );

}

export default ProductDetails;