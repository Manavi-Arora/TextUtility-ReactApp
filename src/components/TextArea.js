import React from "react";

export default function TextArea(props) {
  return (
    <>
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
    </>
  );
}
