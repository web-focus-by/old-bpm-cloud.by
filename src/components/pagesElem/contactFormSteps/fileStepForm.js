import React from "react"

const FileStepForm = props => {
  if (props.currentStep !== 4) {
    return null
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="file">technicalTask</label>
        <input
          id="file"
          name="file"
          type="file"
          placeholder="file"
          value={props.technicalTask}
          onChange={props.handleChange}
        />
      </div>
      <button >Sign up</button>
    </React.Fragment>
  )
}

export default FileStepForm
