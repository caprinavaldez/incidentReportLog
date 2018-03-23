import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class AddReport extends Component {
  state = {
    date: "",
    person: "",
    location: "",
    category: "",
    cost: "",
    notes: ""
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
          <Col size="md-6">
            <Jumbotron>
              <h1>Add New Report</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                required="true"
                name="date"
                placeholder="Date of Accident (required)"
              />
              <Input
                value={this.state.person}
                onChange={this.handleInputChange}
                required="true"
                name="person"
                placeholder="Person(s) Affected (Required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                required="true"
                name="location"
                placeholder="Location of Accident (Required)"
              />
              <label>
                Select Accident Category:
                <select name="category" value={this.state.category} onChange={this.handleInputChange}>
                  <option value="overexertion">Overexertion Involving Outside Source</option>
                  <option value="slips">Slips, Trips, or Falls</option>
                  <option value="otherExertions">Other Exertions or Bodily Reactions</option>
                  <option value="repetitiveMotions">Repetitive Motions Involving Micro-Tasks</option>
                  <option value="caughtInStruck">Caught In/Compressed or Struck By/Against Equipment(s) or Object(s)</option>
                  <option value="assault">On the Job Assault/Violent Act</option>
                </select>
              </label>
              <Input
                value={this.state.cost}
                onChange={this.handleInputChange}
                required="true"
                name="cost"
                placeholder="Cost $ (Required)"
              />
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="Accident Notes (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit New Accident
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Accident List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col> */}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/business">← Back to Business Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddReport;