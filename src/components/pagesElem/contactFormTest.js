
import React, { useRef, useState, useEffect } from "react"
import style from "./contactForm.module.scss"
import { Link } from "gatsby"

const ContactForm = () => {
      const [state, setState] = useState({
    currentStep: 1,
    name: "",
    email: "",
    phone: "",
    technicalTask: "",
  })
  const [inputHaveValue, setInputHaveValue] = useState(false)
  const formEl = useRef()

  const handleChange = event => {
    const { name, value } = event.target
    if(value.length !== 0){
      setInputHaveValue(true)
    }else{
      setInputHaveValue(false)
    }
    setState({
      ...state,
      [name]: value,
    })
  }
  
  useEffect(() => {
    formEl.current.addEventListener('keydown', function(event) {
      if(event.keyCode == 13) {
         event.preventDefault();
      }
   });

  }, [])

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
    // return false
    _next()
  }

  const _next = () => {
    let currentStep = state.currentStep
    currentStep = currentStep >= 4 ? 5 : currentStep + 1
    setInputHaveValue(false)
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
        <button  type="button"
         onClick={_prev}
         className={classNames(style.previousButton)}
         >
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1.94699" height="19.5143" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 15.1797 1.37646)" fill="white"/>
            <rect width="1.94699" height="19.7073" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 13.9355 27.7324)" fill="white"/>
        </svg>
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
          className={classNames(style.nextButton, {[style.isActive]:inputHaveValue})}
          onClick={_next}
        >
          {inputHaveValue&& (<div className={style.buttonText}>Далее</div>)}
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
           <rect width="1.94699" height="19.5143" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.132812 26.356)" fill="white"/>
           <rect width="1.94699" height="19.7073" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.37695 0)" fill="white"/>
          </svg>
        </button>
      )
    }
    return null
  }

  const submitButton = () => {
    let currentStep = state.currentStep
    if (currentStep == 4) {
      return (
        <button
          type="submit"
          className={classNames(style.nextButton, {[style.isActive]:inputHaveValue})}
        >
          {inputHaveValue&& (<div className={style.buttonText}>Далее</div>)}
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
           <rect width="1.94699" height="19.5143" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.132812 26.356)" fill="white"/>
           <rect width="1.94699" height="19.7073" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.37695 0)" fill="white"/>
          </svg>
        </button>
      )
    }
    return null
  }

//   return (
//     <div className={style.wrapper}>
//       <div className={style.formAreaWrapper}>
//       {previousButton()}
//       <form onSubmit={handleSubmit} className={classNames(style.formWrapper, {[style.isNotFirstStep]:state.currentStep!==1})} ref={formEl}>
//                 {/* render the form steps and pass required props in */}
//         <NameStepForm
//           currentStep={state.currentStep}
//           handleChange={handleChange}
//           name={state.name}
//         />
//         <EmailStepForm
//           currentStep={state.currentStep}
//           handleChange={handleChange}
//           email={state.email}
//         />
//         <PhoneStepForm
//           currentStep={state.currentStep}
//           handleChange={handleChange}
//           phone={state.phone}
//         />
//         <FileStepForm
//           currentStep={state.currentStep}
//           handleChange={handleAttachment}
//           technicalTask={state.technicalTask}
//         />
//           <SuccessStepForm
//           currentStep={state.currentStep}
//           handleChange={handleAttachment}
//         />
//         {nextButton()}
//         {submitButton()}
//       </form>
//       </div>
//       <div className={style.progressBar}>
//           {state.currentStep < 5 && <div style={{width:`${state.currentStep * 25}%`}} className={style.valueProgressBar}></div>}
//         </div>
//     </div>
//   )
    return(
        <div className={style.wrapper}>
            ContactForm
        </div>
    )
}
    

export default ContactForm