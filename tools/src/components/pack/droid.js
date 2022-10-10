import React, {useState} from 'react'
// import { Wallet } from '../contracts/near-wallet';
import './droid.css'

let header_style = {
  "color": "teal",
  'font-family': "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  'font-size':"16rem",
}

// const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME })

// const wallet_object = () => {
//   // Setup on page load
//   document.querySelector('#sign-in-button').onclick = () => { wallet.signIn(); };
//   document.querySelector('#sign-out-button').onclick = () => { wallet.signOut(); };
// }

const showData = () => {
  //empty function fills when called to fill 

}


const Droid = () => {
  
  const [show, setshow] = useState(false);

  return (

    <div>
        <div className='side-card'>
            <h1>humanoid pack</h1>
            <br/>
            <h2 className='incl'>Pack includes</h2>
            <br/>
            <h3> <li>Body movements</li></h3>
            <br/><br/>
            <h3> <li>Speech 💬</li></h3>
            <br/><br/>
            <h3> <li>Vision 👀</li></h3>
            <br/><br/>
            <h3> <li>Emotion ❤️ 😃</li></h3>
            <br/><br/>
            <h3><li>Memory</li></h3>
            <br/><br/>
            <h3><li>Self destruction -- Default</li></h3>
            <br/>
            <br/>

            <button className='button-19' onClick={() => setshow(!show)}>buy individal packs</button>
            

        </div>

        <div className='midcard'>
          {
          show ? showData: 
          <>
          
          <div className='imgcard'>
            <h2>Get full pack</h2>
            <br/><br/><br/>
            <h3>Buy package </h3>

            <br/><br/>
            <h3 style={{"color": "teal",'font-family': "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",}}>P.S when a package ia bought buyer gets -<br/>
              an NFT
            </h3>
            <br/><br/><br/>
            <a href='https://github.com/ZadenMubarak/tron-demo' alt='' className='anchor' target="_blank"><li>view example on github</li></a>
            

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
}}>P.S packages bought are stored as NFT's<br/> on moralis<br/>
              incase anything happens to your 
              device
            </h3>
          
          </div>
          
        </div>

        
    </div>
  )
}

export default Droid