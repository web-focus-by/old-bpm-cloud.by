import React, { useState } from "react"
import style from "./prise.module.scss"
import { Link } from "gatsby"
import NameStepForm from "./contactFormSteps/NameStepForm"
import EmailStepForm from "./contactFormSteps/EmailStepForm"
import PhoneStepForm from "./contactFormSteps/PhoneStepForm"
import FileStepForm from "./contactFormSteps/FileStepForm"
import encode from "../utils/encodeEmailContent"

const ContactForm = () => {
  const [state, setState] = useState({
    currentStep: 1,
    name: "",
    email: "",
    phone: "",
    technicalTask: "",
  })
  const handleChange = event => {
    const { name, value } = event.target
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleAttachment = e => {
    setState({ ...state, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { email, name, phone } = state
    alert(`Your registration detail: \n 
               Email: ${email} \n 
               Name: ${name} \n
               Phone: ${phone}`)
  }

  const _next = () => {
    let currentStep = state.currentStep
    currentStep = currentStep >= 3 ? 4 : currentStep + 1
    setState({
      ...state,
      currentStep: currentStep,
    })
  }

  const _prev = () => {
    let currentStep = state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    setState({
      ...state,
      currentStep: currentStep,
    })
  }

  const previousButton = () => {
    let currentStep = state.currentStep
    if (currentStep !== 1) {
      return (
        <button  type="button" onClick={_prev}>
          Previous
        </button>
      )
    }
    return null
  }

  const nextButton = () => {
    let currentStep = state.currentStep
    if (currentStep < 4) {
      return (
        <button
          type="button"
          onClick={_next}
        >
          Next
        </button>
      )
    }
    return null
  }

  return (
    <div className={style.wrapper}>
      <h1>React Wizard Form</h1>
      <p>Step {state.currentStep} </p>

      <form onSubmit={handleSubmit}>
                {/* render the form steps and pass required props in */}
        <NameStepForm
          currentStep={state.currentStep}
          handleChange={handleChange}
          name={state.name}
        />
        <EmailStepForm
          currentStep={state.currentStep}
          handleChange={handleChange}
          email={state.email}
        />
        <PhoneStepForm
          currentStep={state.currentStep}
          handleChange={handleChange}
          phone={state.phone}
        />
        <FileStepForm
          currentStep={state.currentStep}
          handleChange={handleAttachment}
          technicalTask={state.technicalTask}
        />
        {previousButton()}
        {nextButton()}
      </form>
    </div>
  )
}

export default ContactForm