import React from 'react'

const Bar = (props) =>{
  return (
    <div>
      <div>
        <span>{props.key}</span>
        <span>{props.title}</span>
        <span>{props.text}</span>
      </div>
      <button>delete</button>
    </div>
  )
}
export default Bar;
