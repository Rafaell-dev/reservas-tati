import React from 'react'
import img from '../imgs/reservaConcluida.svg'
import imgTooltip from '../imgs/Tooltips-Card.svg'
import '../css/reservation.css'
import PrimaryButton from './button'
import { Link } from 'react-router-dom'
const ReservationDone = () => {
  return (
    <>
      <div className="container-root">
        <div>
          <div className="img-svg">
            <img src={img} alt="Reserva Feita" />
          </div>
          <img src={imgTooltip} alt="" />
        </div>
      </div>
      <Link className='img-svg'  to={'/Dashboard/DashboardConfig'}>
        <PrimaryButton text='Dashboard' />
      </Link>
    </>
  )
}

export default ReservationDone
