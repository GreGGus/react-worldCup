import React from "react";
import {Grid, Col, Nav, Table, NavItem,Pagination, Row} from "react-bootstrap";
import {getNews} from "../../../../services/api";
import moment from "moment";
import {FlippingCard,FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
import TableTr from "../../../components/TableTr.js"
import TableContainer from "../../../containers/TableContainer.js"

class Twitter extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataState: [],
      count:0,
      activePage:0,
    }
  }

  componentWillMount=(props) => {
    this.props.fetchNewsAgregat()
  }

  componentDidMount() {
   // this.interval = setInterval(() => this.state.trigg(), 15000);
  }


  render() {
    const {agregat} = this.props
    const {data} = this.props
    const {dataState,count} =this.state

    console.log("render")

    var buckets=[]
    if(agregat){  buckets = agregat.aggregations.tweet.buckets }else { buckets=[] }
    return (
      <div>
        <Grid>
          <Row>
            <Col md={12}>
           {buckets.map((item,index) => { return( <p> Twitter count : {item.key} : {item.doc_count}</p>  )})}
            <Table>
                <thead>
                  <th>#</th>
                  <th>Date</th>
                  <th>Titre</th>
                  <th>Sentiment</th>
                  <th>Langue</th>
                </thead>
             <TableContainer />
            </Table>
            </Col>
          </Row>
        </Grid>
      </div>


    )
  }
}
export default Twitter


