import logo from './LogoAmazon.png';
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className= {classes.Topbar}>
          <img src = {logo} alt = "Amazon Logo"/> 
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </nav>
     
      </header>
    </div>
  );
}

export default App;
