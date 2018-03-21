import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class SignIn extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Login / Signup</h1>
            </Jumbotron>
            {/* <div className="login-wrap">
    <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked>
        <label for="tab-1" className="tab">Sign In</label>
        <input id="tab-2" type="radio" name="tab" className="sign-up">
        <label for="tab-2" className="tab">Sign Up</label>
        <div className="login-form">
            <div className="sign-in-htm">
                <div className="group">
                    <label for="user" className="label">Username</label>
                    <input id="user" type="text" className="input">
                </div>
                <div className="group">
                    <label for="pass" className="label">Password</label>
                    <input id="pass" type="password" className="input" data-type="password">
                </div>
                <div className="group">
                    <input id="check" type="checkbox" className="check" checked>
                    <label for="check">
                        <span className="icon"></span> Keep me Signed in</label>
                </div>
                <div className="group">
                    <input type="submit" className="button" value="Sign In">
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                </div>
            </div>
            <div className="sign-up-htm">
                <div className="group">
                    <label for="user" className="label">Username</label>
                    <input id="user" type="text" className="input">
                </div>
                <div className="group">
                    <label for="pass" className="label">Password</label>
                    <input id="pass" type="password" className="input" data-type="password">
                </div>
                <div className="group">
                    <label for="pass" className="label">Repeat Password</label>
                    <input id="pass" type="password" class="input" data-type="password">
                </div>
                <div className="group">
                    <label for="pass" className="label">Email Address</label>
                    <input id="pass" type="text" className="input">
                </div>
                <div className="group">
                    <input type="submit" className="button" value="Sign Up">
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <label for="tab-1">Already Member?</a>
                </div>
            </div>
        </div>
    </div>
</div>             */}
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
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
