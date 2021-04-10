import React from "react"

const FileStepForm = props => {
  if (props.currentStep !== 4) {
    return null
  }
  return (
      <div >
        <label>technicalTask</label>
        <input
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
