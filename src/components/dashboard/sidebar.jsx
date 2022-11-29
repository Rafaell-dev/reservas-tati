import { Link } from 'react-router-dom'
import React from 'react'
import '../../css/sidebar.css'
import configSvg from '../../icons/settings.svg'
import ReservationSvg from '../../icons/reservation.svg'
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-icon-container">
          <Link to="/">
            <div className="sidebar-icon">
              <img src={configSvg} alt="Configurações" />
            </div>
          </Link>
          <Link to='/reservas'>
            <div className="sidebar-icon">
              <img src={ReservationSvg} alt="Reservas" />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
