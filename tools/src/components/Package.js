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

const Package = () => {
    return (
        <div>
          <Card title='humanoid' header={info1}/>
          <span><Card title='Aviation' header={avian}/></span>
          
          
        </div>
      )
}

function Card(props){
  return(
    <div className='head' onClick={() => {alert('heyy')}}>
      <h3>{props.title}</h3>

      <h4>{props.header}</h4>

      <button>explore</button>

    </div>
  )
}

export default Package