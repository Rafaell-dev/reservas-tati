import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Form from './components/form'
import Reservation from './components/reservationDone'
import AppRe from './AppRe'
import DashboardConfig from './components/dashboard/dashboardConfig'
import DashboardReservations from './components/dashboard/dashboardReservations'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route path="/Reservation/*" element={<Reservation />} />
          <Route path="/Dashboard/*" element={<AppRe />} />
        </Routes>
        <Routes>
          <Route
            path="/Dashboard/DashboardConfig"
            element={<DashboardConfig />}
          />
          <Route
            path="/Dashboard/DashboardReservas"
            element={<DashboardReservations  />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
