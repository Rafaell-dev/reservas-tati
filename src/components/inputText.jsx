import React from 'react'
import '../css/inputText.css'

const InputText = props => {
  
  return (
    <>
      <div className="input-text-container">
        <div className="container-label">
          <label htmlFor="input-text" className="input-text-label">
            {props.label}
          </label>
          {props.spanError}
        </div>
        <input id="input-text" onChange={props.onChange} onBlur={props.handleBlur} value={props.value} name={props.name} className="input-text" type={props.type} />
      </div>
    </>
  )
}
export default InputText
