import React from 'react'
import '../../css/switchButton.css'
const ButtonSwitch = () => {
  return (
    <>
      <div className="switch__container">
        <input
          id="switch-shadow"
          className="switch switch--shadow"
          type="checkbox"
        />
        <label htmlFor="switch-shadow"></label>
      </div>
    </>
  )
}

export default ButtonSwitch
