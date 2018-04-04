import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import Auth from '../../utils/Auth';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(Auth.isUserAuthenticated());
        console.log(this.props);

        return Auth.isUserAuthenticated() ? (
            <Route exact path={this.props.path} render={this.props.component} />) : (
            <Redirect to={{ pathname: "/signin", state: { from: this.props.location } }} />)
    }

}

export default PrivateRoute;