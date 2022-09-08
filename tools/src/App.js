import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link,Navigate  } from "react-router-dom";
import Home from './components/Home';
import Packagelist from './components/Packagelist';

function App() {
  return (
    <>
  
    
    <div className="App">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{"Logo"}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Community</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Suport</a>
        </li>  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Another link</a></li>
            <li><a class="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Home/>

      
      
      {/* <nav>
        
        
      </nav> */}
    </div>
    </>
  );
}

// import React from 'react'

// const App = () => {
//   return (
//     <Router>
//     <nav >
//       <Link to="/home"> Home</Link>

//       <Link to="/about">  About </Link>

//       {/* <Link to="/profile">Profile </Link> */}
//     </nav>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<Packagelist />} />
//       {/* <Route path="/profile/:username" element={<Profile />} /> */}
//       {/* <Route path="*" element={<ErrorPage />} /> */}
//     </Routes>
//     <div> Foooter </div>
//     <button onClick={<Navigate to='/about' replace={true}/>}>route</button>
//   </Router>
//   )
// }



export default App;
