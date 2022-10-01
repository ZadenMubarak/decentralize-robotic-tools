import React, {useState} from 'react'
import './droid.css'

let header_style = {
  "color": "teal",
  'font-family': "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  'font-size':"16rem",
}

const showData = () => {
  //empty function fills when called to fill 

}


const Droid = () => {
  
  const [show, setshow] = useState(false);

  return (

    <div>
        <div className='side-card'>
          <br/><br/>

            <h1>humanoid pack</h1>
            <br/>
            <h2 className='incl'>Pack includes</h2>
            <br/><br/>
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

            <br/><br/><br/>

            <button className='button-19' onClick={() => setshow(!show)}>buy individal packs</button>
            

        </div>

        <div className='midcard'>
          {
          show ? showData: 
          <>
          <h2>Get pack</h2>
          <div className='imgcard'>
            <h2>Get Pack --------</h2>
            <br/><br/><br/>
            <h3>Buy package ---------</h3>
            <br/><br/>
            <h3>P.S packages bought are stored as NFT's on moralis ---------<br/>
              incase anything happens to your device-----------
            </h3>

            <details>
              what is in here
            </details>
          
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

export default Droid