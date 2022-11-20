import React from 'react'
import '../../css/panelHeader.css'
const PanelHeader = props => {
  return (
    <>
      <div className="panel-title"> {props.p1} </div>
      <div className="panel-config-container d-flex justify-content-around align-items-center">
        <div className="panel-header-text-container">
          <div className="panel-header-text">{props.h1}</div>
        </div>
        <div className="panel-header-text-container">
          <div className="panel-header-text">{props.h2}</div>
        </div>
        <div className="panel-header-text-container">
          <div className="panel-header-text">{props.h3}</div>
        </div>
        <div className="panel-header-text-container">
          <div className="panel-header-text">{props.h4}</div>
        </div>
        <div className="panel-header-text-container">
          <div className="panel-header-text">{props.h5}</div>
        </div>
        <div className="panel-header-text-container">
          <div className="panel-header-text">{props.h6}</div>
        </div>
      </div>
    </>
  )
}

export default PanelHeader
