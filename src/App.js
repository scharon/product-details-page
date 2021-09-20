import React  from 'react';
// import logo from './LogoAmazon.png';
import classes from './App.module.css';
// import ProductData from './ProductData';
import ProductPreview from './components/ProductPreview';
import ProductDetails from './components/ProductDetails';
import Topbar from './components/Topbar';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <Topbar></Topbar>
      </header>

      <div className = {classes.MainContainer} >
        
        <div className = {classes.ProductPreview}>
          <ProductPreview></ProductPreview>  {/* use a component in jsx */}
        </div>

        <div className={classes.ProductData}>
          <ProductDetails></ProductDetails>
        </div>

      </div>

    </div>
  );
}

export default App;
