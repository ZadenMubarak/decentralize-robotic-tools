import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

let arrr = '>>'

const Home = () => {
  return (
    <div>
      <div className='card1'>
          <h3>Explore</h3>
          <div className='go'><Link to='/packages' >Get going {arrr}</Link> </div>
          <h1>Open source tools for machine Learning</h1>

      </div>
      
      
    </div>
  )
}

export default Home