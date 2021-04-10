import React from "react"

const PhoneStepForm = props => {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <div >
      <label>Phone</label>
      <input
        name="phone"
        type="tel"
        placeholder="Enter phone"
        value={props.phone}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default PhoneStepForm
