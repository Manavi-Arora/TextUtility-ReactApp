import React from 'react'
//import About from './About';
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
 
  const ActiveClass = (id) =>{
    document.getElementById("home").classList.remove('active');
    document.getElementById("about").classList.remove('active');
    document.getElementById(id).classList.add("active");
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link id='home' className="nav-link" onClick={() => ActiveClass("home")} aria-current="page" to="/">{props.home}</Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">{props.contact}</a>
          </li> */}
          <li className="nav-item">
            <Link id="about" onClick={() => ActiveClass("about")} className="nav-link" to="/about">{props.about}</Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">1</a></li>
              <li><a className="dropdown-item" href="/">2</a></li>
              <li><a className="dropdown-item" href="/">3</a></li>
            </ul>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch mx-3 text-${props.mode === 'dark'?'light':'dark'}`} onClick={props.toggle}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Switch Mode</label>
        </div>

      </div>
    </div>
  </nav>
  
  )
}


// /* Proptypes */
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,       /* Required field i.e need to be either passed or either set by default props otherwise error occurs */
//     home: PropTypes.string,
//     contact: PropTypes.string
// }

// /* If props are not send in App.js default props are to be set */
// Navbar.defaultProps = {
//     title: 'My Title',
//     home : 'My home',
//     contact: 'Contact Us'
// }