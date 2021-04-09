import React from "react"

const NameStepForm = props => {
  if (props.currentStep !== 1) {
    return null
  }
  console.log(props)
  return (
    <div className="form-group">
      <label htmlFor="name">name</label>
      <input
        id="name"
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
