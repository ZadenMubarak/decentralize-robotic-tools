import React, {useState} from 'react'
import './droid.css'


const showData = () => {
  return(
    <h5>ibhanoyi</h5>
  )
}


const Droid = () => {
  
  const [show, setshow] = useState(false);

  return (

    <div>
        <div className='side-card' onClick={() => setshow(!show)}>
          <br/><br/>

            <h1>humanoid pack</h1>
            <br/>
            <h2 className='incl'>Pack includes</h2>
            <br/><br/>
            <h3><li>Body movements</li></h3>
            <br/><br/>
            <h3><li>Speech 💬</li></h3>
            <br/><br/>
            <h3><li>Vision 👀</li></h3>
            <br/><br/>
            <h3><li>Emotion ❤️ 😃</li></h3>
            <br/><br/>
            <h3><li>Self destruction -- Default</li></h3>

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
          
          </div>
          </>
          }
          {/* <h2>Get pack</h2>
          <div className='imgcard'>
            <h2>Get Pack</h2>
            <br/><br/><br/>
            <h3>Buy package</h3>
            <br/><br/>
            <h3>P.S packages bought are stored as NFT's on moralis<br/>
              incase anything happens to your device
            </h3>
          
          </div> */}
          <h1>northy heitada</h1>
        </div>

        
    </div>
  )
}

export default Droid