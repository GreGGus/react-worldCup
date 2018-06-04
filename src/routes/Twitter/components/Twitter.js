import React from "react";
import {Grid, Col, Nav, Table, NavItem,Pagination, Row} from "react-bootstrap";
import {getNews} from "../../../../services/api";
import moment from "moment";


class NewsList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataState: [],
      count:0,
      activePage:0
    }

  }


  componentWillMount=() => {
    this.props.fetchNews()
    this.props.fetchNewsAgregat()
  }

  render() {
    const {agregat} = this.props
    const {data} = this.props
    const {dataState,count} =this.state

    var realData=[]
    if(data){  realData = data.hits.hits }else { realData=[] }


    var buckets=[]
    if(agregat){  buckets = agregat.aggregations.tweet.buckets }else { buckets=[] }



    return (
      <div>
      {buckets.map((item,index) => { return( <p> Twitter count : {item.doc_count} : {item.key}</p>  )})}
        <Grid>
          <Row>
            <Col md={12}>
              <Table responsive>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Titre</th>
                  <th>Sentiment</th>
                  <th>Langue</th>
                </tr>
                </thead>
                <tbody>
                {realData.map((item, index) => {
                  return (
                    <tr>
                      <td>{index}</td>
                      <td>{item._source.created_at}</td>
                      <td>{item._source.text}</td>
                      <td>{item._source.sentiment} </td>
                      <td>{item._source.language} </td>
                    </tr>
                  )
                })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>


    )
  }
}
export default NewsList
