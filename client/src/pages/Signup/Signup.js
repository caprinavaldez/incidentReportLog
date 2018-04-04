import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import './Signup.css';

class Signup extends Component {
  state = {
    user: [],
    bizName: "",
    coType: "",
    bizCategory: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    this.saveNewUser();
  }

  saveNewUser = () => {
    API.saveNewUser()
      .then(res =>
        this.setState({ user: res.data, bizName: "", coType: "", bizCategory: "", email: "", password: "" })
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
    if (this.state.user && this.state.bizName) {
      API.saveNewUser({
        user: this.state.user,
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
          <h1>Create a New Account</h1>
            <form>
              <Input
                value={this.state.bizName}
                onChange={this.handleInputChange}
                name="bizName"
                placeholder="Company Name (Required)"
              />
              <label>
                <select name="coType" value={this.state.coType} onChange={this.handleInputChange}>
                  <option>Select Company Type:</option>
                  <option value="insurance">Insurance</option>
                  <option value="nonInsurance">Non-Insurance</option>
                </select>
              </label> 
              <br></br>    
              <label>          
                <select className="bizCat" name="bizCategory" value={this.state.bizCategory} onChange={this.handleInputChange}>
                  <option>If Non-Insurance, Select Business Category:</option>
                  <option value="construction">Construction</option>
                  <option value="health-socialCare">Health/Social Care</option>
                  <option value="education">Education</option>
                  <option value="arts-entertainment">Arts/Entertainment</option>
                  <option value="finance-banking">Finance/Banking</option>
                  <option value="administration">Administration</option>
                  <option value="retail-wholesaleTrade">Retail/Wholesale Trade</option>
                  <option value="agriculture-foodRestaurant">Agriculture/Food and Restaurant</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="government-military">Government/Military</option>
                </select>
              </label>                          
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
              <p style={{textAlign: "center"}}>Already a Member? <a href="login">Login here</a></p>
            </form>
          </Col>
        </Row>
        </div>
      </Container>
    );
  }
}

export default Signup;
