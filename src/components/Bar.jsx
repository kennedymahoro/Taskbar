import React from 'react'
import './Bar.css'

const Bar = (props) =>{
  return (
    <div className='content'>
      <div className='texts'>
        <span>{props.key}</span>
        <span>{props.title}</span>
        <span>{props.text}</span>
      </div>
      <button>delete</button>
    </div>
  )
}
export default Bar;
