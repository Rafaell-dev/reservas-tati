import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Form from './components/form'
import Reservation from './components/reservationDone'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />}/>
          <Route path='/Reservation' element={<Reservation/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
