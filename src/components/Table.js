 import React from 'react'
 import {Grid, Col, Nav, Table, NavItem,Pagination, Row} from "react-bootstrap";
 import {TableTr} from "./TableTr.js"

 export default class TableTwitter extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataState: [],
      count:0,
      trigg:props.fetchNews,
      activePage:0,
    }

  }

  componentWillMount=(props) => {
    this.props.fetchNews()
  }

  componentDidMount() {
   this.interval = setInterval(() => this.state.trigg(), 15000);
  }

   render() {
   const {agregat} = this.props
   const {data} = this.props
   var realData=[]
   if(data){  realData = data.hits.hits }else { realData=[] }
      return (
        <tbody>
         {realData.map((item, index) => (
             <TableTr
              index={index}
              created_at={item._source.created_at}
              text={item._source.text}
              sentiment={item._source.sentiment}
              language={item._source.language}
                     />))}
         </tbody>
         )
    }
}

