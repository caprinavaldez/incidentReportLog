import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Add.css";
//import { Link, Redirect } from 'react-router';

class AddReport extends Component {
  state = {
    incidents: [],
    date: "",
    person: "",
    location: "",
    category: "",
    cost: "",
    notes: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.location && this.state.person) {   //user instead of person
      API.saveIncident({
        date: this.state.date,
        location: this.state.location,
        cost: this.state.cost,
        person: this.state.person,
        category: this.state.category,
        notes: this.state.notes
      })
        // .then(res => console.log(res.data))
        // .then(res => this.loadIncidents())
        .then(res => this.props.history.push("/business"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2">
            <Link to="/business">← Back to Business Home</Link>
          </Col>
        </Row>
      <div id="addForm">
        <Row>
          <Col size="md-12">
              <h1>Add New Report</h1>
          </Col>
        </Row>
        <Row>
            <form>
              <Row>
              <Col size="md-6">
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                required="true"
                name="date"
                placeholder="Date of Accident (Required)"
              />
              </Col>
              </Row>
              <Row>
                <Col size="md-6">
              <Input
                value={this.state.person}
                onChange={this.handleInputChange}
                required="true"
                name="person"
                placeholder="Person(s) Affected (Required)"
              />
              </Col>
              <Col size="md-6">
              <label>
                <select name="category" value={this.state.category} onChange={this.handleInputChange}>
                  <option>Select Accident Category: </option> 
                  <option value="overexertion">Overexertion Involving Outside Source</option>
                  <option value="slips">Slips, Trips, or Falls</option>
                  <option value="otherExertions">Other Exertions or Bodily Reactions</option>
                  <option value="repetitiveMotions">Repetitive Motions Involving Micro-Tasks</option>
                  <option value="caughtInStruck">Caught In/Compressed or Struck By/Against Equipment(s) or Object(s)</option>
                  <option value="assault">On the Job Assault/Violent Act</option>
                </select>
              </label>
              </Col>
              </Row>  
              <Row>
                <Col size="md-6">
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                required="true"
                name="location"
                placeholder="Location of Accident (Required)"
              />    
              </Col> 
              <Col size="md-6">      
              <Input
                value={this.state.cost}
                onChange={this.handleInputChange}
                required="true"
                name="cost"
                placeholder="Cost $ (Optional)"
              />
              </Col>
              </Row>
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="Accident Notes (Optional)"
              />               
              <FormBtn
                disabled={!(this.state.date && this.state.person && this.state.location && this.state.category)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Row>
        </div>
        {/* <Row>
              <h1>Accident List</h1>
            {this.state.incidents.length ? (
              <List>
                {this.state.incidents.map(incident => (
                  <ListItem key={incident._id}>
                    <Link to={"/books/" + incident._id}>
                      <strong>
                        {incident.date} by {incident.person}
                      </strong>
                    </Link> */}
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  {/* </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Row> */}
      </Container>
    );
  }
}

export default AddReport;

          /* <Col size="md-6 sm-12">
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
          </Col> */