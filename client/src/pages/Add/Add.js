import React, { Component } from "react";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
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
    notes: "",
    user: ""
  };

  componentDidMount = () => {
    if (Auth.getUser()) {
      this.setState({ user: Auth.getUser().id });
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.saveIncident({
        date: this.state.date,
        location: this.state.location,
        cost: this.state.cost,
        person: this.state.person,
        category: this.state.category,
        notes: this.state.notes,
        user: this.state.user
      })
        // .then(res => console.log(res.data))
        //.then(res=> this.saveIncident())
        .then(res => this.props.history.push("/business"))
        .catch(err => console.log(err));
    
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
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
        <div className="form-group">          
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
                <select className="form-control" name="category" value={this.state.category} onChange={this.handleInputChange}>
                  <option id="label">Select Accident Category: </option> 
                  <option value="Overexertion">Overexertion</option>
                  <option value="Trips/Falls">Trips/Falls</option>
                  <option value="Other Exertions">Other Exertions</option>
                  <option value="Repetitive Motions">Repetitive Motions</option>
                  <option value="Equipment/Object">Equipment/Object Causing</option>
                  <option value="Assault">Assault/Violent Act</option>
                </select>
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
            </div>
          </Row>
        </div>
      </Container>
    );
  }
}

export default AddReport;