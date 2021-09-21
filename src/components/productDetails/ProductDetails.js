//import react from "react";
import classes from './ProductDetails.module.css';
import ProductData from "../../utils/ProductData";


const ProductDetails  = (props) => {

    console.log(props.data);

    const colorOptions = props.data.colorOptions.map((currentItem, pos) => {
        //By default the first image would be selected
        const classArr = [classes.productImage]; // All the Elts have this class by default
        if (pos === 0){
            classArr.push(classes.SelectedProductImage);
        }
        return (
            // Each child in a list should have a unique "key" prop. Et ici Key c'est la position
            <img key={pos} className= {classArr.join(' ')} src = {currentItem.imageUrl} alt = {currentItem.styleName}></img>
        );

    })

    // Button dynamicaly
    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeatureItem];
        if (pos === 0){
            classArr.push(classes.selectedFeatureItem);
        }
         
        return (
            <button key={pos} className= {classArr.join(' ')}>{item}</button>
        );
    });

    return(

        <div className={classes.ProductData}>
            <h1 className = {classes.ProductTitle}>{props.data.title}</h1>
            <p className = {classes.ProductDescription}>{props.data.description}</p>

            <h3 className = {classes.ProductSelect}>Select Color</h3>
            <div>
                {colorOptions}
            </div>

            <h3 className = {classes.ProductSelect}>Features</h3>
            <div>
                {featureList}
                {/* <button className= {[classes.FeatureItem, classes.selectedFeatureItem].join(' ')}>Time</button>
                <button className= {classes.FeatureItem}>Heart Rate</button> */}
            </div>

            <button className= {classes.BuyButton}>Buy now</button>

      </div>
    );

}

export default ProductDetails;