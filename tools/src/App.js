import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React from "react";
import Home from './components/Home'
import Profile from './components/Profile'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Package from './components/Package'
import Droid from "./components/pack/droid";
import Avian from './components/pack/Avian'


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
        
        </ul>
        
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Package/>}/>
        <Route path="/humanoid-pack" element={<Droid />}/>
        <Route path='/aviation-pack' element={<Avian/>}/>
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
      {/* <button onClick={() => {<Navigate to='/packages' replace={true}/>}} className='go'><Link to='/packages' className="getgo">get going</Link></button> */}
    </Router>
  );
}

export default App;

