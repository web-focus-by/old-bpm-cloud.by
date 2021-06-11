import React from "react"

const FileStepForm = props => {
  if (props.currentStep !== 4) {
    return null
  }
  return (
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
  )
}

export default FileStepForm
