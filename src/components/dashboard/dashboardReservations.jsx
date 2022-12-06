import React, { useEffect, useState } from 'react'
import PanelHeader from './panelHeader'
import PanelLine from './panelLine'
import {v4} from 'uuid'
const DashboardReservations = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('reservas') || [])

    if (data) {
      setData(data)
    }
  }, [])
  return (
    <>
      <PanelHeader
        p1={'Reservas'}
        h1={'ID'}
        h2={'Nome'}
        h3={'Data'}
        h4={'Horário'}
        h5={'Dados de contato'}
        h6={'Pessoas'}
      />

      {data.map(data => (
        <PanelLine
          key={v4()}
          h1={data.id}
          h2={data.nome}
          h3={data.data}
          h4={data.horario}
          h5={data.email}
          h6={data.celular}
          h7={data.quantPessoas}
        />
      ))}
    </>
  )
}

export default DashboardReservations
