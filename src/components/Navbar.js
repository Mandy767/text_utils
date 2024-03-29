import React from 'react'
// import {Link} from 'react-router-dom'


export default function Navbar(props) {





  return (
    
      <>
<nav Style={`border-bottom:1px solid ${props.line}`} className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
   <div className="container-fluid" >

    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          {/* <Link className="nav-link" to="/">{props.parameter1}</Link> */}
          <a className="nav-link" href="/">{props.parameter1}</a>
        </li> 
                <li className="nav-item">
          {/* <Link className="nav-link" to="/about">{props.parameter2}</Link> */}
          {/* <a className="nav-link" href="/about">{props.parameter2}</a> */}

        </li>


      </ul>
          <div className={`form-check form-switch text-${props.txtMode} my-2`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
        
    </div>
  </div>
  </nav>


      </>
  )
}



