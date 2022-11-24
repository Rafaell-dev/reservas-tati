import React from 'react'
import '../../css/switchButton.css'
const ButtonSwitch = () => {
  return (
    <>
      <div class="switch__container">
        <input
          id="switch-shadow"
          class="switch switch--shadow"
          type="checkbox"
        />
        <label for="switch-shadow"></label>
      </div>
    </>
  )
}

export default ButtonSwitch
