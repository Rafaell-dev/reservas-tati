import { Link, Navigate } from 'react-router-dom'
import PrimaryButton from './button'
import React, { useEffect, useState } from 'react'
import InputText from './inputText'
import '../css/inputText.css'

const getDatafromLS = () => {
  const data = localStorage.getItem('reservas')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

export const Form = () => {
  const [reservas, setReservas] = useState(getDatafromLS())

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')
  const [quantPessoas, setQuantPessoas] = useState('1')
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')

  useEffect(() => {
    localStorage.setItem('reservas', JSON.stringify(reservas))
  }, [reservas])

  const handleSubmit = e => {
    e.preventDefault()
    let reserva = {
      nome,
      email,
      celular,
      quantPessoas,
      data,
      horario
    }

    setReservas([...reservas, reserva])
    setNome('')
    setEmail('')
    setCelular('')
    setQuantPessoas('')
    setData('')
    setHorario('')
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="container d-flex justify-content-center align-items-center vh-100 input-text-container-form-group"
      >
        <InputText
          id={'nome'}
          name={'nome'}
          label={'Nome Completo'}
          type={'text'}
          onChange={e => setNome(e.target.value)}
          value={nome}
          required
        />
        <InputText
          id={'email'}
          name={'email'}
          label={'Email'}
          type={'email'}
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <InputText
          id={'celular'}
          name={'celular'}
          label={'Celular'}
          type={'phone'}
          onChange={e => setCelular(e.target.value)}
          value={celular}
          required
        />
        <InputText
          id={'quantPessoas'}
          name={'quantPessoas'}
          label={'Quantidade de Pessoas'}
          type={'number'}
          onChange={e => setQuantPessoas(e.target.value)}
          value={quantPessoas}
          required
        />
        <InputText
          id={'data'}
          name={'data'}
          label={'Data'}
          type={'date'}
          value={data}
          onChange={e => setData(e.target.value)}
          required
        />
        <InputText
          id={'horario'}
          name={'horario'}
          label={'Hórario'}
          type={'time'}
          onChange={e => setHorario(e.target.value)}
          value={horario}
          required
        />
        <PrimaryButton text={'Fazer Reserva'} to="/Reservation" link={Link}/>
      </form>
    </>
  )
}

export default Form
