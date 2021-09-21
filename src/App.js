import React, { Component } from 'react';
// import logo from './LogoAmazon.png';
import classes from './App.module.css';
// import ProductData from './ProductData';
import ProductPreview from './components/productPreview/ProductPreview';
import ProductDetails from './components/productDetails/ProductDetails';
import Topbar from './components/topbar/Topbar';
import ProductData from './utils/ProductData';
//import { Component } from 'react';


class App extends Component {
  state = {
    /* In ideal cases we will be getting this data from the BE and we will be updating our state once we recieve the data, but 
     in our case we already have it in the local storage.
     So we just updating in this state while initializing the component*/
    productData: ProductData,
    currentPreviewImage: 'https://imgur.com/xSIK4M8.png',
    showHeartbeatSection: false,
  }

  render () {
    return (
      <div className="App">
  
        <header className="App-header">
          <Topbar></Topbar>
        </header>
  
        <div className = {classes.MainContainer} >
          
          <div className = {classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartbeatSection={this.state.showHeartbeatSection} >
            </ProductPreview>  {/* use a component in jsx */}
          </div>
  
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData}></ProductDetails>
          </div>
  
        </div>
  
      </div>
    );

  }
 
}

export default App;
