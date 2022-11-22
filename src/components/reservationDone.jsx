import React from 'react'
import img from '../imgs/reservaConcluida.svg'
import imgTooltip from '../imgs/Tooltips-Card.svg'
import '../css/reservation.css'
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
    </>
  )
}

export default ReservationDone
