import React from 'react'

export default function TextForm(props) {
  return (
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">{props.email}</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">{props.text}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">{props.pass}</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">{props.checkbox}</label>
  </div>
  <button type="submit" className="btn btn-primary">{props.submit}</button>
</form>
  );
}
