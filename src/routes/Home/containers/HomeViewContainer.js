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
console.log("state",state)

return{
  team:state.team
}}


export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
