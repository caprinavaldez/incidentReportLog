import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import './Homepage.css';

class Homepage extends Component {
  state = {
    appName: "Accident to Action",
    description: "Everyday Companies come to keep record of accidents reported and Insurance companies come to see statistics on accidents.",
    exampleVisuals: "Example Accident Images and Graphs will go here",
    benefits: "Benefits of Usage description here",
    benefitsColOne: "Lorem ipsum dolor sit amet, ne wisi partem mentitum qui. Sea te nisl affert repudiare, nibh iudico sea ad. Augue molestiae te pri, an mea probo scripta. An vim nusquam epicurei liberavisse. Quot primis accusam eos ne, rebum scaevola complectitur has no. Sed ei tacimates iudicabit erroribus, sit aeterno accumsan tractatos in, essent philosophia mei in.",
    benefitsColTwo: "Id mel postea integre deleniti, omnis commune apeirian ut sea. Laudem mediocritatem ex pro, cum cu altera oporteat singulis, sea commodo constituto delicatissimi ei. Cu qui laudem delectus. Tantas recusabo per ea, prima omnium scribentur eum no. Eu vis habeo harum labores, sumo ferri sonet nec at.",
    benefitsColThree: "Eam iusto accusamus ei, et ius cibo graeci verear, ut mei pertinax sensibus ullamcorper. Mei ei equidem epicurei, duo ceteros pertinacia delicatissimi eu, iriure suscipit oportere eum in. Cu per agam habeo blandit, usu eligendi dignissim ex. Tation maluisset dignissim eam cu, alia scaevola ne pri, ei meis noster usu."
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
              <h1>Description</h1>
              <p>
                {this.state.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <h2>{this.state.exampleVisuals}</h2>
        </Row>
        <Row>
          <h2>{this.state.benefits}</h2>
        </Row>
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
        <Footer></Footer>
      </Container>
    );
  }
}

export default Homepage;
