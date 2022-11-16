import React from 'react'
import InputText from './inputText'

const Form = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100 input-text-container-form-group">
        <InputText label={'Nome Completo'} type={'text'} />
        <InputText label={'Email'} type={'email'} />
        <InputText label={'Celular'} type={'phone'} />
        <InputText label={'Quantidade de Pessoas'} type={'number'} />
        <InputText label={'Data'} type={'date'} />
        <InputText label={'Hórario'} type={'time'} />
      </div>
    </>
  )
}

export default Form
