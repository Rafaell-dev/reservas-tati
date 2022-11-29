import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardConfig from './components/dashboard/dashboardConfig'
import DashboardReservations from './components/dashboard/dashboardReservations'
import Navbar from './components/dashboard/navbar'
import Sidebar from './components/dashboard/sidebar'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<DashboardConfig/>}/>
          <Route path='/reservas' element={<DashboardReservations/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
