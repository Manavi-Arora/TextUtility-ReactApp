import React from 'react'

export default function Alert(props) {
    const capitalize = (text) =>{
        return text.charAt(0).toUpperCase() + text.slice(1)
    }
  return (
    <div style={{height : "50px"}}> 
      {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : <strong>{props.alert.msg}</strong>
      </div>}
    </div>
  )
}
