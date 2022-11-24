import React from 'react'
import '../css/primaryButton.css'

const PrimaryButton = props => {
  return (
    <>
      <button
        className="primary-button  primary-button-text primary-button-container"
        type="submit"
      >
        {props.text}
      </button>
    </>
  )
}

export default PrimaryButton
