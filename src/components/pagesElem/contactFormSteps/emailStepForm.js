import React from "react"

const EmailStepForm = props => {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <div>
      <label>Email address</label>
      <input
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default EmailStepForm
