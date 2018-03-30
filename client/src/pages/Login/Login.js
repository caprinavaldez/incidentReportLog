import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import './Login.css';

class Login extends Component {
  state = {
    email: "",
    password: "",
    coType: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
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
              {/* <label>
                Select Company Type:
                <select name="coType" value={this.state.coType} onChange={this.handleInputChange}>
                  <option value="insurance">Insurance</option>
                  <option value="nonInsurance">Non-Insurance</option>
                </select>
              </label> */}
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Log In
              </FormBtn>
              <p style={{textAlign: "center"}}>Not yet a Member? <a href="signup">Sign-up here</a></p>
            </form>
          </Col>
        </Row>
        </div>
      </Container>
    );
  }
}

export default Login;
