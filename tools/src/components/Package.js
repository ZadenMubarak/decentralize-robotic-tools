import React from 'react'
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

const Package = () => {
    return (
        <div>
          
          <span className='human'><Card title='humanoid' header={info1}/></span>
          <span className='span'><Card title='Aviation' header={avian}/></span>
          <span className='motors'> <Card title="Motor related" header={motor}/></span>
          
          
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

      <button>explore</button>

    </div>
  )
}

export default Package