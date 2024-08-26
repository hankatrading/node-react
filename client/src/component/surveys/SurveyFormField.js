import React from "react";

const getField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
    </div>
  );
};

export default getField;
