import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import './Signup.css';

class Signup extends Component {
  state = {
    bizName: "",
    coType: "",
    bizCategory: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

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
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Signup</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.bizName}
                onChange={this.handleInputChange}
                name="bizName"
                placeholder="Company Name (required)"
              />
              <label>
                <select name="coType" value={this.state.coType} onChange={this.handleInputChange}>
                  <option>Select Company Type:</option>
                  <option value="insurance">Insurance</option>
                  <option value="nonInsurance">Non-Insurance</option>
                </select>
              </label>     
              <label>          
                <select name="bizCategory" value={this.state.bizCategory} onChange={this.handleInputChange}>
                  <option>Select Business Category:</option>
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
                placeholder="Password (Required)"
              />
              <FormBtn
                disabled={!(this.state.bizName && this.state.coType && this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Sign-up
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
