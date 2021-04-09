import React from "react";

const FileStepForm = (props) => {
    if (props.currentStep !== 4) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="file">technicalTask</label>
        <input
          className="form-control"
          id="file"
          name="file"
          type="file"
          placeholder="file"
          value={props.technicalTask}
          onChange={props.handleChange}
          />      
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
      </React.Fragment>
    );
  }

  export default FileStepForm