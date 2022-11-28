import { Link } from 'react-router-dom'
import PrimaryButton from './button'
import React from 'react'
import InputText from './inputText'
import { Formik } from 'formik'
import '../css/inputText.css'

const Form = () => {
  return (
    <>
      <Formik
        initialValues={{ nome: '', email: '', celular: '', quantPessoas: '1' }}
        validate={values => {
          const errors = {}

          // Validação Nome
          if (!values.nome) {
            errors.nome = '*Preencha este campo'
          } else if (!/^[A-Z]+[ ]+[A-Z]/i.test(values.nome)) {
            errors.nome = '*Preencha nome e sobrenome'
          } else if (values.nome.length < 5) {
            errors.nome = '*Nome menor que 3 caracteres'
          } else if (values.nome.length > 22) {
            errors.nome = '*Nome maior que 22 caracteres'
          }
          // Validação Email
          if (!values.email) {
            errors.email = '*Preencha este campo'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = '*Email inválido'
          }

          // Validação Celular
          if (!values.celular) {
            errors.celular = '*Preencha este campo'
          } else if (!/[0-9]$/i.test(values.celular)) {
            errors.celular = '*Celular inválido'
          } else if (
            values.celular.length >= 12 ||
            values.celular.length < 10
          ) {
            errors.celular = '*Número incompleto'
          }

          // Validação Pessoas
          if (!values.quantPessoas) {
            errors.quantPessoas = '*Preencha este campo'
          } else if (values.quantPessoas < 1 || values.quantPessoas > 12) {
            errors.quantPessoas = '*Insira um número de pessoas entre 1 e 12'
          }

          return errors
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="container d-flex justify-content-center align-items-center vh-100 input-text-container-form-group"
          >
            <InputText
              id={'nome'}
              name={'nome'}
              label={'Nome Completo'}
              type={'text'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nome}
              spanError={
                errors.nome &&
                touched.nome &&
                errors.nome && (
                  <span className="field-error">{errors.nome}</span>
                )
              }
            />
            <InputText
              id={'email'}
              name={'email'}
              label={'Email'}
              type={'email'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              spanError={
                errors.email &&
                touched.email &&
                errors.email && (
                  <span className="field-error">{errors.email}</span>
                )
              }
            />
            <InputText
              id={'celular'}
              name={'celular'}
              label={'Celular'}
              type={'phone'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.celular}
              spanError={
                errors.celular &&
                touched.celular &&
                errors.celular && (
                  <span className="field-error">{errors.celular}</span>
                )
              }
            />
            <InputText
              id={'quantPessoas'}
              name={'quantPessoas'}
              label={'Quantidade de Pessoas'}
              type={'number'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.quantPessoas}
              spanError={
                errors.quantPessoas &&
                touched.quantPessoas &&
                errors.quantPessoas && (
                  <span className="field-error">{errors.quantPessoas}</span>
                )
              }
            />
            <InputText id={'data'} name={'data'} label={'Data'} type={'date'} />
            <InputText
              id={'horario'}
              name={'horario'}
              label={'Hórario'}
              type={'time'}
            />

            <Link to="/Reservation">
              <PrimaryButton text={'Fazer Reserva'} />
            </Link>
          </form>
        )}
      </Formik>
    </>
  )
}

export default Form
