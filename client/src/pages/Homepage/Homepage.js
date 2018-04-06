import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import './Homepage.css';
import Carousel from 'nuka-carousel';

class Homepage extends Component {
  state = {
    appName: "Accident to Action",
    description: "We do things simple. Accident to Action has been in the business to assist industries by providing clean statistical data to insurance companies and businesses. We save time when reporting accidents, viewing the data, giving ideas and suggestions, and allowing for thousands to millions of dollars to be saved by companies.",    
    benefitsColOne: "This will help save you time! No more manually filling out those complicated reporting forms. Just complete our simple online form and all your information will be securely stored in our database. No need for filing cabinets or storage space because we will electronically store them for you!",
    benefitsColTwo: "Want to see all your data for the year? For the month? Maybe by accident category? We have interactive graphs that will let you visualize all your data. This can help your company improve in every way possible, whether building maintenances are in order or possibly just a notorious worker!",
    benefitsColThree: "Not only does Accident to Action save you time and space, it also saves you on costs! On top of being environmentally friendly using our online application, for all your data stored you can catch any problems before it arises and set your plans to fix them before more accidents happen."
  };
  
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // API.getBook(this.props.match.params.id)
    //   .then(res => this.setState({ book: res.data }))
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div className="logo">
              <img src="/logo2Name.png"/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>About Us</h1>
              <p>
                {this.state.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row> 
          <Col size="md-10 md-offset-1">
          <div className="slideshowContainer">
            <Carousel>
              <img alt="Annual Average Statistics on Work Injurk Accidents" src="/slide1.png" />
              <img alt="Slips, Trips, and Falls Statistics" src="/slide2.png" />
              <img alt="Overexertion Statistics" src="/slide3.png" />
              <img alt="Struck By... Statistics" src="/slide4.png" />
              <img alt="Dangerous Industries" src="/slide5.png" />
            </Carousel>
          </div>
          </Col>
          <div className="border">
            <img src="/cautionTape.png" />
          </div>
        </Row>
        <div id="icons">
        <Row>
          <Col size="md-4">
            <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
          </Col>
          <Col size="md-4">
            <span className="glyphicon glyphicon-stats" aria-hidden="true"></span>
          </Col>
          <Col size="md-4">
            <span className="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span>
          </Col>
        </Row>
        </div>
        <Row>
          <Col size="md-4">
            <p>{this.state.benefitsColOne}</p>
          </Col>
          <Col size="md-4">
            <p>{this.state.benefitsColTwo}</p>
          </Col>
          <Col size="md-4">
            <p>{this.state.benefitsColThree}</p>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            {/* <Link to="/">← Back to Home</Link> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Homepage;
