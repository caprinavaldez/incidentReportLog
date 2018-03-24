import React from "react";
import './Nav.css';

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Home
        </a>
        <a href="/business" className="navbar-brand">
          Business
        </a>
        <a href="/insurance" className="navbar-brand">
          Insurance
        </a>  
        <a href="/login" className="navbar-brand">
          Login
        </a>  
        <a href="/signup" className="navbar-brand">
          Sign-up
        </a>          
      </div>
    </div>
  </nav>
);

export default Nav;
