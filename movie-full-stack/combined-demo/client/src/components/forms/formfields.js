import React from "react";

// This file exports the Input, TextArea

export function Input(props) {
  return (
    <div className="form-group">
      <input  {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea  {...props} />
    </div>
  );
}
