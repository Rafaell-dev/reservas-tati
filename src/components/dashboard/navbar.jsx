import React from 'react'
import '../../css/navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbar-dashboard d-flex align-items-center justify-content-between">
        <div className="navbar-dashboard-logo-container d-flex align-items-center">
          <div className="navbar-dashboard-logo"></div>
          <div className="navbar-dashboard-text-logo">Sistema de Reservas</div>
        </div>
        <div className="navbar-profile-container d-flex align-items-center gap-2">
          <div className="navbar-profile-logo "></div>
          <div>
            <div className="navbar-profile-title ">Restaurante</div>
            <div className="navbar-profile-user">User</div>
          </div>
        </div>
      </div>
      <div className="navbar-divider"></div>
    </>
  )
}

export default Navbar
