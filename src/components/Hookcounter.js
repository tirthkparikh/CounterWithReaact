import React, { useState } from 'react'

function Hookcounter(props) {

   const [count,updatecount] = useState(0);

  
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>{updatecount(count+props.dif)}}>+{props.dif}</button>
      <button onClick={()=>{updatecount(count-props.dif)}}>-{props.dif}</button>
      <button onClick={()=>{updatecount(count+5)}}>+5</button>
    </div>
  )
}

export default Hookcounter
