import React from 'react'
import '../css/inputText.css'

const InputText = props => {
  return (
    <>
      <div className="input-text-container">
        <label htmlFor="input-text" className="input-text-label">
          {props.label}
        </label>
        <input id="input-text" className="input-text" type={props.type} />
      </div>
    </>
  )
}
export default InputText
