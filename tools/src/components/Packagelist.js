import React from 'react'
import './Package.css'

let info1 = `
Package for humanoid-like robots
includes movements a...
`

const Packagelist = () => {
    return (
        <div>
          <Card title='humanoid' header={info1}/>
          <span><Card title='air bots'/></span>
          
          
        </div>
      )
}

function Card(props){
  return(
    <div className='head' onClick={() => {alert('heyy')}}>
      <h3>{props.title}</h3>

      <h5>{props.header}</h5>

      <button>explore</button>

    </div>
  )
}

function Humanoid(){
  return(
    <div></div>
  )
}

function Airbots(){
  return(
    <div></div>
  )
}

function Drive(){
  return(
    <div></div>
  )
}

export default Packagelist