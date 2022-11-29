import React from 'react'
import ButtonSwitch from './buttonSwitch'
import PanelHeader from './panelHeader'
import PanelLine from './panelLine'
const DashboardReservations = () => {
  return (
    <>
      <PanelHeader p1={'Reservas'} h1={'ID'} h2={'Nome'} h3={'Data'} h4={'Horário'} h5={'Dados de contato'} h6={'Pessoas'} />
      <PanelLine h1={'XXX1'} h2={'Jhon Doe'} h3={'14 Dezembro 2022'} h4={'14:00'} h5={'Celular: (87) 9 8134-6936 Email: jhondoe@gmail.com'} h6={'2'} />
      <PanelLine h1={'XXX1'} h2={'Jhon Doe'} h3={'14 Dezembro 2022'} h4={'14:00'} h5={'Celular: (87) 9 8134-6936 Email: jhondoe@gmail.com'} h6={'2'} />
      <PanelLine h1={'XXX1'} h2={'Jhon Doe'} h3={'14 Dezembro 2022'} h4={'14:00'} h5={'Celular: (87) 9 8134-6936 Email: jhondoe@gmail.com'} h6={'2'} />
    </>
  )
}

export default DashboardReservations
