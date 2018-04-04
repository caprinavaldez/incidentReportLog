import React from "react";
import './Form.css';

export const FormBtn = props => (
  <button {...props} style={{ margin: "auto", marginBottom: 10, display: "flex", justifyContent: "center" }} type="button" class="btn btn-warning">
    {props.children}
  </button>
);
