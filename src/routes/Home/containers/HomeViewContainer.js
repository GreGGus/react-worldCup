import {connect} from 'react-redux'
import HomeView  from '../components/HomeView'
import {fetchTwitterTeam} from '../modules/twitter'


const mapDispatchToProps = (dispatch) => {
console.log("state")
  return {
    fetchTwitterTeam: () => dispatch(fetchTwitterTeam()),
  }
}

const mapStateToProps = (state) => {
return{
  team:state.twitter.team
}}


export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
