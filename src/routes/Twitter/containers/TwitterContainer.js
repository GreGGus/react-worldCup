import {connect} from 'react-redux'
import Twitter from '../components/Twitter'
import {fetchTwitterSentiment, fetchTwitterTeam,fetchTwitter} from '../modules/twitter'


const mapDispatchToProps = (dispatch) => {
  return {
    fetchTwitter: () => dispatch(fetchTwitter()),
    fetchTwitterTeam: () => dispatch(fetchTwitterTeam()),
    fetchTwitterSentiment: () => dispatch(fetchTwitterSentiment())
  }
}

const mapStateToProps = (state) => {
return{
  data: state.twitter.data,
  agregat:state.twitter.agregat,
  team:state.twitter.team
}}


export default connect(mapStateToProps, mapDispatchToProps)(Twitter)
