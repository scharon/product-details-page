import logo from './LogoAmazon.png';
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {

  // if Current Hour ist > 9 so we can use the value, else append a '0' to it. Same for Minutes 
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
  
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

          <div className= {classes.TimeSection}>
            {/* Current Time / date actuelle */}
            <p>{`${currentHour}:${currentMinute} `}</p>
          </div>

          <div className= {classes.HeartBeatSection}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
          </div>

        </div>

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

      </div>

    </div>
  );
}

export default App;
