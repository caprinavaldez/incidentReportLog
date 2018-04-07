import React from "react";
import './Nav.css';

const Nav = () => (
  <nav id="topNav" className="navbar navbar-default">
    <div className="container-fluid">
      
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> 
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          <h4>Home</h4>
        </a> 
        <div className="logo">
          <img src="/logo.png" />
        </div>
        </div>
        <div className="navbar-header navbar-right">
        <a href="/login" className="navbar-brand">
          <h4>Login</h4>
        </a>  
      </div>
    </div>
  </nav>
);

export default Nav;
