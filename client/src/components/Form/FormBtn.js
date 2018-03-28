import React from "react";
import './Form.css';

export const FormBtn = props => (
  <button {...props} style={{ margin: "auto", marginBottom: 10, display: "flex", justifyContent: "center" }} className="btn btn-success">
    {props.children}
  </button>
);
