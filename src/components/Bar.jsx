import React from 'react'
import './Bar.css'

const Bar = (props) =>{
  return (
    <div className='content'>
      <div className='texts'>
        <span>{props.uniqe}</span>
        <span>{props.title}</span>
        <span>{props.text}</span>
      </div>
      <button onClick={()=>{props.handleClick(props.uniqe)}}>delete</button>
    </div>
  )
}
export default Bar;
