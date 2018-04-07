import React from "react";
import './Nav.css';
import Auth from "../../utils/Auth";

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
  <a href="/business" className="navbar-brand">
  <h4>Business</h4>
  </a>
  <a href="/insurance" className="navbar-brand">
  <h4>Insurance</h4>
  </a>
  </div>
  {Auth.isUserAuthenticated() ? (
    <div className="navbar-header navbar-right">
    <a href="/logout" className="navbar-brand">
    <h4>Logout</h4>
    </a>
    </div>
  ) : (
    
    <div className="navbar-header navbar-right">
    <a href="/login" className="navbar-brand">
    <h4>Login</h4>
    </a>
    <a href="/signup" className="navbar-brand">
    <h4>Sign-up</h4>
    </a>
    </div>
  )}
  </div>
  </nav>
);

export default Nav;
