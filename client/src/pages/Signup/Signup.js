import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import './Signup.css';

class Signup extends Component {
  state = {
    bizName: "",
    coType: "",
    bizCategory: "",
    email: "",
    password: ""
  };

  saveNewUser = () => {
    API.saveNewUser()
      .then(res =>
        this.setState({ bizName: "", coType: "", bizCategory: "", email: "", password: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.bizName) {
      API.saveNewUser({
        bizName: this.state.bizName,
        coType: this.state.coType,
        bizCategory: this.state.bizCategory,
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.saveNewUser())
        .then(res => this.props.history.push("/login"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
        <div id="signupForm">
        <Row>
          <Col size="md-12">
          <h1 id="new">Create a New Account</h1>
          <div className="form-group">          
            <form>
              <Input
                value={this.state.bizName}
                onChange={this.handleInputChange}
                name="bizName"
                placeholder="Company Name (Required)"
              />
                <select className="form-control" name="coType" value={this.state.coType} onChange={this.handleInputChange}>
                  <option>Select Company Type:</option>
                  <option value="insurance">Insurance</option>
                  <option value="nonInsurance">Non-Insurance</option>
                </select>
                <select className="form-control" name="bizCategory" value={this.state.bizCategory} onChange={this.handleInputChange}>
                  <option>Select Business Category:</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Construction">Construction</option>
                  <option value="Health/Social Care">Health/Social Care</option>
                  <option value="Education">Education</option>
                  <option value="Arts/Entertainment">Arts/Entertainment</option>
                  <option value="Finance/Banking">Finance/Banking</option>
                  <option value="Administration">Administration</option>
                  <option value="Retail/Wholesale Trade">Retail/Wholesale Trade</option>
                  <option value="Agriculture/Food and Restaurant">Agriculture/Food and Restaurant</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Government/Military">Government/Military</option>
                </select>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (Required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password (Required)"
              />
              <FormBtn
                disabled={!(this.state.bizName && this.state.coType && this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Join us!
              </FormBtn>
              <p style={{textAlign: "center", fontSize: "1em"}}>Already a Member? <a href="login">Login here</a></p>
            </form>
            </div>
          </Col>
        </Row>
        </div>
    </Container>

    );
  }
}

export default Signup;
