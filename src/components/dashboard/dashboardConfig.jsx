import React from 'react'
import ButtonSwitch from './buttonSwitch'
import Navbar from './navbar'
import PanelHeader from './panelHeader'
import PanelLine from './panelLine'
import Sidebar from './sidebar'

const DashboardConfig = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <PanelHeader p1={'Configurações gerais'} h1={'Sobre'} h5={'Status'}/>
      <PanelLine h1={'Reservas'} h5={<ButtonSwitch/>}/>
    </>
  )
}

export default DashboardConfig
