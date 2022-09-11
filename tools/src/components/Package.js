import React from 'react'
import './Package.css'

let info1 = `
Package for humanoid-like robots
includes movements a...
`

const Package = () => {
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

export default Package