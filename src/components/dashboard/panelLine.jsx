import React from 'react'
import '../../css/panelLine.css'
const PanelLine = props => {
  return (
    <>
      <div className="panel-line-container d-flex justify-content-around ">
        <div className="panel-line-text-container">
          <div className="panel-line-text">{props.h1}</div>
        </div>
        <div className="panel-line-text-container">
          <div className="panel-line-text">{props.h2}</div>
        </div>
        <div className="panel-line-text-container">
          <div className="panel-line-text">{props.h3}</div>
        </div>
        <div className="panel-line-text-container">
          <div className="panel-line-text">{props.h4}</div>
        </div>
        <div className="panel-line-text-container">
          <div className="panel-line-text ">{props.h5}{'\n'}{props.h6}</div>
        </div>
        <div className="panel-line-text-container">
          <div className="panel-line-text">{props.h7}</div>
        </div>
        <div className="divider"></div>
      </div>
    </>
  )
}

export default PanelLine
