import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Select } from "../../components/Form";

class SignIn extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    selectedOption: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };

  render() {
  const { selectedOption } = this.state;
  const value = selectedOption && selectedOption.value;
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Login / Signup</h1>
            </Jumbotron>
            {}
            <form>
              <Input
                // value={this.state.title}
                // onChange={this.handleInputChange}
                hasLabel="true"
                required="true"
                name="email"
                placeholder="Email (required)"
                type="text"
              />
              <Input
                // value={this.state.author}
                // onChange={this.handleInputChange}
                hasLabel="true"
                required="true"
                name="password"
                placeholder="Password (required)"
              />
              <Select
                // value={this.state.synopsis}
                // onChange={this.handleInputChange}
                name="businessSelection"
                value="value"
                type="select"
                placeholder="Select the Type of Industry You're In (Required)"
                options="[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' },
                ]"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Log In
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/business">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
