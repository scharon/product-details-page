import logo from './LogoAmazon.png';
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className= {classes.Topbar}>
          <img src = {logo} alt = "Amazon Logo"/> 
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </nav>
      </header>

      <div className = {classes.MainContainer} >
        <div className = {classes.ProductPreview}>
          <img src = "https://imgur.com/iOeUBV7.png" alt = "Product Preview"></img>
        </div>

        <div className={classes.ProductData}>
          <h1 className = {classes.productTitle}>{ProductData.title}</h1>

        </div>

      </div>

    </div>
  );
}

export default App;
