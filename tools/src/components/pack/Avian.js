import React from 'react'
import './avian.css'
import { useState } from 'react'

const showData = () =>{
  ""
}

const Avian= () => {

  const [show, setshow] = useState(false);
  return (
    <div>
        <div className='side-card1'>
            <h1>Aviation Pack</h1>
            <br/>
            <h2>Pack includes</h2>
            <br/><br/>
            <h3><li>Take off abilities</li></h3>
            <br/><br/>
            <h3><li>Navigation</li></h3>
            <br/><br/>
            <h3><li>Vision</li></h3>
            <br/><br/>
            <h3><li>Object detection</li></h3>
            <br/><br/>
            <h3><li>Memory</li></h3>
            <br/><br/>
            <h3><li>Self destruct -- Default</li></h3>
            <br/><br/>
            <button className='button-19' onClick={() => setshow(!show)}>buy individal packs</button>

        </div>

        <div className='midcard'>
          {
          show ? showData: 
          <>
          <h2>Get pack</h2>
          <div className='imgcard'>
            <h2>Get the full pack</h2>
            <br/><br/><br/>
            <h3>Buy package ---------</h3>
            <br/><br/>
            <h3>P.S packages bought are stored as NFT's<br/>
            
            </h3>
          
          </div>
          </>

          }

          <h2>Buy part of the pack</h2>
          <div className='imgcard1'>
            
            <br/><br/><br/>
            <h3 style={{
  "color": "teal",
  'font-family': "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
}}>view options</h3>
            <br/><br/>
            <h3 style={{
  "color": "rgb(45, 3, 231)",
  'font-family': "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
}}>P.S packages bought are stored as NFT's on moralis<br/>
              incase anything happens to your 
              device
            </h3>
          
          </div>
          
        </div>

        
    </div>
  )
}

export default Avian