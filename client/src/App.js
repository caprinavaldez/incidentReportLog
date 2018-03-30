import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/add" component={AddReport} />
        <Route exact path="/books/:id" component={Detail} />
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
