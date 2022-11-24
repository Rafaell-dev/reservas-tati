import React from 'react'
import '../../css/sidebar.css'
import configSvg from '../../icons/settings.svg'
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-icon-container">
          <div className="sidebar-icon">
            <img src={configSvg} alt="Configurações" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
