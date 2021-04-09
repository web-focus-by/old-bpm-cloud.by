import React, {useState} from "react"
import style from'./prise.module.scss'
import {Link} from 'gatsby'
import NameStepForm from "./contactFormSteps/NameStepForm"
import EmailStepForm from "./contactFormSteps/EmailStepForm"
import PhoneStepForm from "./contactFormSteps/PhoneStepForm"
import FileStepForm from "./contactFormSteps/FileStepForm"


const ContactForm = ()=>{
    const [state, setState] = useState({
        currentStep: 1,
        name:  '',
        email: '',
        phone: '',
        technicalTask:'',
    })
    console.log(state)

    const handleChange = event => {
        const {name, value} = event.target
        console.log(name, value)
        console.log(state)
        setState({
            ...state,
          [name]: value
        })    
      }

      function encode(data) {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      }
    const  handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        // const { email, name, phone } = state
        // alert(`Your registration detail: \n 
        //        Email: ${email} \n 
        //        Name: ${name} \n
        //        Phone: ${phone}`)
        fetch('/no-cache=1', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...state,
          }),
        })
          .then(() => alert('success')
          .catch((error) => alert(error)))
    }


    const  _next = () => {
        let currentStep = state.currentStep
        currentStep = currentStep >= 3? 4: currentStep + 1
        setState({
            ...state,
            currentStep: currentStep,
          })
      }
        
    const _prev = () => {
        let currentStep = state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        setState({
            ...state,
            currentStep: currentStep,
        })
      }

      const  previousButton = () => {
        let currentStep = state.currentStep;
        if(currentStep !==1){
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={_prev}>
            Previous
            </button>
          )
        }
        return null;
      }
      
      const nextButton = () => {
        let currentStep = state.currentStep;
        if(currentStep <4){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={_next}>
            Next
            </button>        
          )
        }
        return null;
      }
    
    return(
        <div className={style.wrapper}>
             <h1>React Wizard Form 🧙‍♂️</h1>
            <p>Step {state.currentStep} </p> 

            <form name="contact" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field" method="post">
            <input type="hidden" name="form-name" value="contact" />
            {/* 
                render the form steps and pass required props in
            */}
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
                handleChange={handleChange}
                technicalTask={state.technicalTask}
                />
                {previousButton()}
                {nextButton()}
            </form>
        </div>
    )
    
}



export default ContactForm