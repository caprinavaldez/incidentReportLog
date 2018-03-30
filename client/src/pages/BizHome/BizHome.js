import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import {BarChart, PieChart} from 'react-easy-chart';
import "./BizHome.css";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Report from "../Add/Add.js";

// const cellEditProp = {
//   mode: 'click'
// };

class BizHome extends Component {
  state = {
    biz: {
      name: "Business Name",
      monthgraph: "Graph of monthly accidents",
      categorygraph: "Graph of accidents by category",
      accidentlist: "Table for Accident Report List"
    },
    incidents: [],
    incidentsByCategory: [
      {key: 'Overexertion Involving Outside Source', value: 100},
      {key: 'Slips, Trips, or Falls', value: 200},
      {key: 'Other Exertions or Bodily Reactions', value: 10},
      {key: 'Repetitive Motions Involving Micro-Tasks', value: 5},
      {key: 'Caught In/Compressed r Struck By/Against Equipment(s) or Object(s)', value: 42},
      {key: 'On the Job Assault/Violent Act', value: 10},
    ],
    incidentBarChart: [
      {
        x: 'January',
        y: 46
      },{
        x: 'February',
        y: 26
      },{
        x: 'March',
        y: 10
      },{
        x: 'April',
        y: 5
      },{
        x: 'May',
        y: 50
      },{
        x: 'June',
        y: 12
      },{
        x: 'July',
        y: 32
      },{
        x: 'August',
        y: 20
      },{
        x: 'September',
        y: 20
      },{
        x: 'October',
        y: 12
      },{
        x: 'November',
        y: 40
      },{
        x: 'December',
        y: 40
      }
    ]
  };

  
  // When this component mounts, grab the list of incidents for this business
  componentDidMount() {
    this.loadIncidents();
    this.loadIncidentsByCategory();
    this.loadIncidentsByMonth();
  };

  loadIncidents = () => {
    API.getIncidents()
      .then(res =>
        this.setState({ incidents: res.data })
      )
      .catch(err => console.log(err));
  };

  loadIncidentsByCategory = () => {
    API.getIncidentByCategory()
      .then(res =>
        this.setState({ incidentsByCategory: res.data })
      )
      .catch(err => console.log(err));    
  }
  loadIncidentsByMonth = () => {
    API.getIncidentByMonth()
      .then(res => 
        this.setState({ incidentBarChart: res.data})
      )
      .catch(err => console.log(err));
  }
 

  // mouseOverHandler(d, e) {
  //   this.setState({
  //     showToolTip: true,
  //     top: e.y,
  //     left: e.x,
  //     value: d.value,
  //     key: d.data.key});
  // }

  // mouseMoveHandler(e) {
  //   if (this.state.showToolTip) {
  //     this.setState({top: e.y, left: e.x});
  //   }
  // }

  // mouseOutHandler() {
  //   this.setState({showToolTip: false});
  // }

  // createTooltip() {
  //   if (this.state.showToolTip) {
  //     return (
  //       <ToolTip
  //         top={this.state.top}
  //         left={this.state.left}
  //       >
  //         The value of {this.state.key} is {this.state.value}
  //       </ToolTip>
  //     );
  //   }
  //   return false;
  // }
  
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
                {this.state.biz.name}
              </h1>
              <a href="/add" className="btn btn-primary" style={{float: "right"}}>
                Add New Report
              </a>   
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
          data={this.state.incidentBarChart}
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
      <PieChart
        labels
        data={this.state.incidentsByCategory}
        // mouseOverHandler={this.mouseOverHandler}
        // mouseOutHandler={this.mouseOutHandler .bind(this)}
        // mouseMoveHandler={this.mouseMoveHandler.bind(this)}
        // padding={10}
        // styles={this.styles}
      />            
          </Col>
        </Row>    
        <Row>
          <h2>{this.state.biz.accidentlist}</h2>
        </Row>
        {/* class MultiSortTable extends React.Component {
  render() {
    return ( */}
      {/* Call getIncidents() */}
      {/* AddReport.loadincidents(); */}
      <div>
        <BootstrapTable ref='table' data={ this.state.incidents } multiColumnSort={ 2 }>
            <TableHeaderColumn dataField='date' dataSort={ true }>Date</TableHeaderColumn>
            <TableHeaderColumn dataField='person' dataSort={ true }>Person(s)</TableHeaderColumn>
            <TableHeaderColumn dataField='location' dataSort={ true }>Location</TableHeaderColumn>
            <TableHeaderColumn dataField='cost' dataSort={ true }>Costs</TableHeaderColumn>
            <TableHeaderColumn dataField='category' isKey dataSort={ true }>Category</TableHeaderColumn>
            <TableHeaderColumn dataField='notes' dataSort={ true }>Notes</TableHeaderColumn>
        </BootstrapTable>
      </div>
<link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
    {/* );
  }
} */}
          {/* /* <Col size="md-6 sm-12">
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
          </Col> */ }
      </Container>

    );
  }
}

export default BizHome;
