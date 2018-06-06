import {connect} from 'react-redux'
import Twitter from '../components/Table'
import {fetchNews, fetchNewsAgregat} from "../routes/Twitter/modules/twitter"
import TableTwitter from "../components/Table.js"

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => dispatch(fetchNews()),
    fetchNewsAgregat: () => dispatch(fetchNewsAgregat())
  }
}

const mapStateToProps = (state) => {
return{
  data: state.twitter.data,
  agregat:state.twitter.agregat
}}


export default connect(mapStateToProps, mapDispatchToProps)(TableTwitter)
