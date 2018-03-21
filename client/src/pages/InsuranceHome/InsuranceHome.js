import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import {BarChart} from 'react-easy-chart';
import {PieChart} from 'react-easy-chart';

class InsuranceHome extends Component {
  state = {
    insurance: {
      name: "Insurance Name",
      year: "2018",
      industrygraph: "Graph for Amt of Accidents by Industry",
      categorygraph: "Graph for Amt of Accidents by Category",
      industrycosts: "Graph for Avg Accident Costs by Industry",
      categorycosts: "Graph for Avg Accident Costs by Category"
    }
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
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>      
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.insurance.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <h1>{this.state.insurance.year}</h1>
        </Row>
        <Row>
          {/* <Col size="md-10 md-offset-1"> */}
          <Col size="md-6">
            <h2>{this.state.insurance.industrygraph}</h2>
            <PieChart
              labels
              data={[
                {key: 'Administration', value: 100},
                {key: 'Construction', value: 200},
                {key: 'Agriculture', value: 10},
                {key: 'Manufacturing', value: 5},
                {key: 'Wholesale/Retail Trade', value: 42},
                {key: 'Education and Training', value: 10},
              ]}
            /> 
            {/* <article>
              <h1>Description</h1>
              <p>
                {this.state.biz.description}
              </p>
            </article> */}
          </Col>
          <Col size="md-6">
            <h2>{this.state.insurance.categorygraph}</h2>
            <PieChart
              labels
              data={[
                {key: 'Overexertion Involving Outside Source', value: 100},
                {key: 'Slips, Trips, or Falls', value: 20},
                {key: 'Other Exertions or Bodily Reactions', value: 10},
                {key: 'Repetitive Motions Involving Micro-Tasks', value: 50},
                {key: 'Caught In/Compressed or Struck By/Against Equipment(s) or Object(s)', value: 42},
                {key: 'On the Job Assault/Violent Act', value: 10},
              ]}
            />            
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <h2>{this.state.insurance.industrycosts}</h2>
            <BarChart
          axisLabels={{x: 'Month', y: 'Amount'}}
          axes
          grid
          colorBars
          height={250}
          width={650}
          data={[
            {
              x: 'Administration',
              y: 1000
            },
            {
              x: 'Construction',
              y: 2600
            },
            {
              x: 'Agriculture',
              y: 1060
            },
            {
              x: 'Manufacturing',
              y: 5000
            },
            {
              x: 'Wholesale/Retail Trade',
              y: 999
            },
            {
              x: 'Education and Training',
              y: 1205
            }
          ]}
        />
          </Col>   
          <Col size="md-6">
            <h2>{this.state.insurance.categorycosts}</h2>
            <BarChart
          axisLabels={{x: 'Month', y: 'Amount'}}
          axes
          grid
          colorBars
          height={250}
          width={650}
          data={[
            {
              x: 'Overexertion Involving Outside Source',
              y: 100
            },
            {
              x: 'Slips, Trips, or Falls',
              y: 260
            },
            {
              x: 'Other Exertions or Bodily Reactions',
              y: 1060
            },
            {
              x: 'Repetitive Motions Involving Micro-Tasks',
              y: 500
            },
            {
              x: 'Caught In/Compressed or Struck By/Against Equipment(s) or Object(s)',
              y: 999
            },
            {
              x: 'On the Job Assault/Violent Act',
              y: 120
            }
          ]}
        />          
          </Col>   
        </Row>
      </Container>
    );
  }
}

export default InsuranceHome;
