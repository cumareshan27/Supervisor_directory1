import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Textfield(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input className="form-control" {...props} />

    </div>
  );
}

export default Textfield;