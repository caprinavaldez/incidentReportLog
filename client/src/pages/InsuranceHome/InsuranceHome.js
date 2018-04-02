import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import {BarChart, PieChart} from 'react-easy-chart';
import './InsuranceHome.css';

class InsuranceHome extends Component {
  state = {
    insurance: {
      name: "Insurance Name",
      year: "2018",
      industrygraph: "Graph for Amt of Accidents by Industry",
      categorygraph: "Graph for Amt of Accidents by Category",
      industrycosts: "Graph for Avg Accident Costs by Industry",
      categorycosts: "Graph for Avg Accident Costs by Category"
    },
    incidentsByIndustry: [
      // {key: 'Health/Social Care', value: 100},
      // {key: 'Construction', value: 200},
      // {key: 'Agriculture/Food & Restaurant', value: 10},
      // {key: 'Manufacturing', value: 5},
      // {key: 'Retail/Wholesale Trade', value: 42},
      // {key: 'Education and Training', value: 10},
      // {key: 'Arts/Entertainment', value: 10},
      // {key: 'Finance/Banking', value: 5},
      // {key: 'Administration', value: 10},
      // {key: 'Government/Military', value: 12}
    ],
    incidentsByCategory: [
      {key: 'Overexertion Involving Outside Source', value: 100},
      {key: 'Slips, Trips, or Falls', value: 20},
      {key: 'Other Exertions or Bodily Reactions', value: 10},
      {key: 'Repetitive Motions Involving Micro-Tasks', value: 50},
      {key: 'Caught In/Compressed or Struck By/Against Equipment(s) or Object(s)', value: 42},
      {key: 'On the Job Assault/Violent Act', value: 10},
    ],
    byCategoryCost: [
      {
        x: 'Overexertion Involving Outside Source',
        y: 100
      },{
        x: 'Slips, Trips, or Falls',
        y: 260
      },{
        x: 'Other Exertions or Bodily Reactions',
        y: 1060
      },{
        x: 'Repetitive Motions Involving Micro-Tasks',
        y: 500
      },{
        x: 'Caught In/Compressed or Struck By/Against Equipment(s) or Object(s)',
        y: 999
      },{
        x: 'On the Job Assault/Violent Act',
        y: 120
      }
    ],
    byIndustryCost: [
      {
        x: 'Administration',
        y: 1000
      },{
        x: 'Construction',
        y: 2600
      },{
        x: 'Agriculture/Food & Restaurant',
        y: 1060
      },{
        x: 'Manufacturing',
        y: 5000
      },{
        x: 'Retail/Wholesale Trade',
        y: 999
      },{
        x: 'Education and Training',
        y: 1205
      },{
        x: 'Arts/Entertainment',
        y: 650
      },{
        x: 'Finance/Banking',
        y: 500
      },{
        x: 'Administration',
        y: 700
      },{
        x: 'Government/Military',
        y: 1000
      }
    ]
  };

  componentDidMount() {
    this.loadIncidentsByIndustry();
    this.loadIncidentsByCategory();
    this.loadByCategoryCost();
    this.loadByIndustryCost();
  }

  loadIncidentsByIndustry = () => {
    API.getIncidentsByIndustry()
      .then(res => {
          console.log("Incidents by industry", res.data);
          this.setState({ incidentsByIndustry: res.data});
        } 
      )
      .catch(err => console.log(err));
  };

  loadIncidentsByCategory = () => {
    API.getSumByCategory()
      .then(res => 
        this.setState({ incidentsByCategory: res.data})
      )
      .catch(err => console.log(err));
  };

  loadByCategoryCost = () => {
    API.byCategoryCost()
      .then(res => 
        this.setState({ byCategoryCost: res.data})
      )
      .catch(err => console.log(err));
  };

  loadByIndustryCost = () => {
    API.byIndustryCost()
      .then(res => {
          console.log(res.data);
          this.setState({ byIndustryCost: res.data});
        }
      )
      .catch(err => console.log(err));
  };

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
              <h1>
                {this.state.insurance.name}
              </h1>
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
              data={this.state.incidentsByIndustry}
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
              data={this.state.incidentsByCategory}
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
          data={this.state.byIndustryCost}
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
          data={this.state.byCategoryCost}
        />          
          </Col>   
        </Row>
      </Container>
    );
  }
}

export default InsuranceHome;
