import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import * as nearAPI from "near-api-js";

import Home from './components/Home'
import Profile from './components/Profile'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Package from './components/Package'
import Droid from "./components/pack/droid";
import Avian from './components/pack/Avian';
import Motor from './components/pack/Motor'


// creates keyStore using private key in local storage

const { keyStores } = nearAPI;
const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();

const { connect } = nearAPI;

const connectionConfig = {
  networkId: "testnet",
  keyStore: myKeyStore, // first create a key store 
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};
const nearConnection = connect(connectionConfig);


function App() {

  return (
    <Router>
      <nav >
      <Link to="/"  className="home-btn"><span className="droidspan">filedroid</span></Link>
        
        <ul>
          <span className="home"><li><Link to="/" className="lnk"> Home</Link></li></span>
        
        <span className="abo"><li><Link to="/about" className="lnk">  About </Link></li></span>
        
        <span className="prof"><li><Link to="/profile" className="lnk">Profile </Link></li></span>
        <Link to='/packages' className="packs">packages</Link>
        
        <button className="button-85" onClick={connect}>Connect Near Wallet</button>
        </ul>
        
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Package/>}/>
        <Route path="/humanoid-pack" element={<Droid />}/>
        <Route path='/aviation-pack' element={<Avian/>}/>
        <Route path="/motor-pack" element={<Motor/>}/>
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
      {/* <button onClick={() => {<Navigate to='/packages' replace={true}/>}} className='go'><Link to='/packages' className="getgo">get going</Link></button> */}
    </Router>
  );
}

export default App;

