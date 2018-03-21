import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import {BarChart} from 'react-easy-chart';
import {PieChart} from 'react-easy-chart';

class BizHome extends Component {
  state = {
    biz: {
      name: "Business Name",
      monthgraph: "Graph of monthly accidents",
      categorygraph: "Graph of accidents by category",
      accidentlist: "Table for Accident Report List"
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
                {this.state.biz.name}
              </h1>
              <a href="/add" className="navbar-brand">
                Add New Report
              </a>   
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {/* <Col size="md-10 md-offset-1"> */}
          <Col size="md-6">
            <h2>{this.state.biz.monthgraph}</h2>
            <BarChart
          axisLabels={{x: 'Month', y: 'Amount'}}
          axes
          grid
          colorBars
          height={250}
          width={650}
          data={[
            {
              x: 'January',
              y: 46
            },
            {
              x: 'February',
              y: 26
            },
            {
              x: 'March',
              y: 10
            },
            {
              x: 'April',
              y: 5
            },
            {
              x: 'May',
              y: 50
            },
            {
              x: 'June',
              y: 12
            },
            {
              x: 'July',
              y: 32
            },
            {
              x: 'August',
              y: 20
            },
            {
              x: 'September',
              y: 20
            },
            {
              x: 'October',
              y: 12
            },
            {
              x: 'November',
              y: 40
            },
            {
              x: 'December',
              y: 40
            }
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
            <h2>{this.state.biz.categorygraph}</h2>
      {/* mouseOverHandler(d, e) {
        this.setState({
          showToolTip: true,
          top: e.y,
          left: e.x,
          value: d.value,
          key: d.data.key
        })
      }

      mouseMoveHandler(e) {
        if (this.state.showToolTip) {
          this.setState({top: e.y, left: e.x});
        }
      }

      mouseOutHandler() {
        this.setState({showToolTip: false});
      }

      createTooltip() {
        if (this.state.showToolTip) {
          return (
            <ToolTip
              top={this.state.top}
              left={this.state.left}
            >
              {this.state.key} is {this.state.value}
            </ToolTip>
          );
        }
        return false;
      } */}
      <PieChart
        labels
        data={[
          {key: 'Overexertion Involving Outside Source', value: 100},
          {key: 'Slips, Trips, or Falls', value: 200},
          {key: 'Other Exertions or Bodily Reactions', value: 10},
          {key: 'Repetitive Motions Involving Micro-Tasks', value: 5},
          {key: 'Caught In/Compressed or Struck By/Against Equipment(s) or Object(s)', value: 42},
          {key: 'On the Job Assault/Violent Act', value: 10},
        ]}
        // mouseOverHandler={this.mouseOverHandler}
        // mouseOutHandler={this.mouseOutHandler.bind(this)}
        // mouseMoveHandler={this.mouseMoveHandler.bind(this)}
        // padding={10}
        // styles={this.styles}
      />            
          </Col>
        </Row>    
        <Row>
          <h2>{this.state.biz.accidentlist}</h2>
        </Row>
      </Container>
    );
  }
}

export default BizHome;
