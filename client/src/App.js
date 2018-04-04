import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AddReport from "./pages/Add";
import Detail from "./pages/Detail";
import InsuranceHome from "./pages/InsuranceHome";
import Homepage from "./pages/Homepage";
import BizHome from "./pages/BizHome";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Auth from './utils/Auth';
// import PrivateRoute from "./components/PrivateRoute";
import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isUserAuthenticated() ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

const App = () => (
  <Router>
    <div className="backgroundPic">
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/add" component={AddReport} />
        <Route exact path="/books/:id" component={Detail} />
        <PrivateRoute exact path="/protected" component={Homepage} />
        <Route exact path="/insurance" component={InsuranceHome} />
        <Route exact path="/business" component={BizHome} />        
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />        
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
