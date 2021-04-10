import React from "react"


const SuccessStepForm = props => {
  if (props.currentStep !== 5) {
    return null
  }
  return (
    <div>
      <div>Отлично!</div>
      <div>Мы внимательно изучим Ваш бриф и свяжемся с Вами в ближайшее время!</div>
    </div>
  )
}

export default SuccessStepForm
