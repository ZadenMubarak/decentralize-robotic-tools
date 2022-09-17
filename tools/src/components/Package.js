import React from 'react'
import {Link } from 'react-router-dom'
import './Package.css'

let info1 = `
Package for humanoid-like robots
includes movements , vision
navigationn and more



view full package
`

let avian = `

Package for aviation related bots

such as drones, satelites,
self flying planes

includes takeoff abilities

view full package 

`

let motor = `
\n\n

Package for motor related bots
package incudes obstacle detection,
movements gps abilitied
and more

view package
\n

`

let see ="see"

const Package = () => {
    return (
        <div>
          
          <span className='human'>
            <Card title='humanoid' header={info1} />
            <Link to='/humanoid-pack' className='direct1'> {see} </Link> <h3 className='pack1'>pack</h3>
          </span>
          <span className='span'>
            <Card title='Aviation' header={avian}/>
            <Link className='direct2' to='/aviation-pack'>see</Link>
            <h3 className='pack1'>pack</h3>
            </span>
          <span className='motors'> 
          <Card title="Motor related" header={motor}/>
          <Link className='direct2' to='/motor-pack'>see</Link>
            <h3 className='pack1'>pack</h3>
          </span>
          
          
        </div>
      )
}

function Card(props){
  return(
    
      <div className='head' onClick={() => {alert('heyy')}}>
      <h2>{props.title}</h2><br/>
      <br/><br/>

      <h3>{props.header}</h3>
      <br/><br/>

    </div>

  )
}

export default Package