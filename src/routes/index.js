import PageLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import TwitterView from './Twitter'


export const createRoutes = (store) => ({
  path        : '/',
  component   : PageLayout,
  indexRoute  : Home,
  childRoutes : [
  TwitterView
  ]
})


export default createRoutes
