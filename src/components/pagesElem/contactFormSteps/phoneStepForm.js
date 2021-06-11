import React from "react"

const PhoneStepForm = props => {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
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
