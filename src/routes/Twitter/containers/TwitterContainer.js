import {connect} from 'react-redux'
import Twitter from '../components/Twitter'
import {fetchNews, fetchNewsAgregat} from '../modules/twitter'


const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => dispatch(fetchNews())
    ,
    fetchNewsAgregat: () => dispatch(fetchNewsAgregat())
  }
}

const mapStateToProps = (state) => {
return{
  counter: state.counter,
  data: state.twitter.data,
  agregat:state.twitter.agregat
}}


export default connect(mapStateToProps, mapDispatchToProps)(Twitter)
