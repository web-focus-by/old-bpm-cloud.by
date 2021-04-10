import React from "react"

const NameStepForm = props => {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div>
      <label>name</label>
      <input
        name="name"
        type="text"
        placeholder="Enter name"
        value={props.name}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default NameStepForm
