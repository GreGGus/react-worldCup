import {connect} from 'react-redux'
import Twitter from '../components/Table'
import {fetchTwitter, fetchTwitterSentiment} from "../routes/Twitter/modules/twitter"
import TableTwitter from "../components/Table.js"

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTwitter: () => dispatch(fetchTwitter()),
    fetchTwitterSentiment: () => dispatch(fetchTwitterSentiment())
  }
}

const mapStateToProps = (state) => {
return{
  data: state.twitter.data,
  agregat:state.twitter.agregat
}}


export default connect(mapStateToProps, mapDispatchToProps)(TableTwitter)
