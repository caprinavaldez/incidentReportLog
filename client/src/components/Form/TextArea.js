import React from "react";
import './Form.css';

export const TextArea = props => (
  <div className="form-group">
    <textarea className="form-control" rows="10" {...props} />
  </div>
);
