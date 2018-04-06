import React, { Component } from "react";
import API from "../../utils/API";
import Auth from '../../utils/Auth';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import './Login.css';

class Login extends Component {
  state = {
    user: [],
    email: "",
    password: "",
    coType: ""
  };

  componentDidMount() {
    // this.loadUser();
  }

  authenticate = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    API.authenticateUser(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        Auth.authenticateUser(res.data);

        // hard redirect to / to reload all the state and nav
        window.location.href = "/";
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };
  
  handleLogin = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      this.authenticate();
    } else {
      this.setState({ errorMessage: "Please enter valid username and password to sign in." })
    }
  };

  // loadUser = () => {
  //   API.getUser()
  //     .then(res =>
  //       this.setState({ user: res.data })
  //     )
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2">
            <Link to="/business">← Back to Home</Link>
          </Col>
        </Row>
        <div id="loginForm">
        <Row>
          <Col size="md-12">
              <h1>Login</h1>
            <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                required="true"
                name="email"
                placeholder="Email (Required)"
                type="text"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                required="true"
                name="password"
                type="password"
                placeholder="Password (Required)"
              />
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleLogin}
              >
                Log In
              </FormBtn>
              <p style={{textAlign: "center", fontSize: "1em"}}>Not yet a Member? <a href="signup">Sign-up here</a></p>
            </form>
          </Col>
        </Row>
        </div>
        <br/> 
        <br/>
        <br/> 
        <br/>
        <br/> 
        <br/>        
      </Container>
    );
  }
}

export default Login;
