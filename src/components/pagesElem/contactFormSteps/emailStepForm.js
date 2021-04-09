import React from "react";

const EmailStepForm = (props) => {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
        />
    </div>
    );
  }
  
export default EmailStepForm