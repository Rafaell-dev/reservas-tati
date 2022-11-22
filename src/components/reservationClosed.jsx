import React from 'react'
import img from '../imgs/reservaFechada.svg'
import imgTooltip from '../imgs/tooltip-closed.svg'
import '../css/reservation.css'
const ReservationClosed = () => {
  return (
    <>
      <div className="container-root">
        <div>
          <div className="img-svg">
            <img src={img} alt="Reserva Fechada" />
          </div>
          <img src={imgTooltip} alt="" />
        </div>
      </div>
    </>
  )
}

export default ReservationClosed
