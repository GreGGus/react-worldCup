import PageLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import Twitter from './Twitter'


// Create React Route
export const createRoutes = (store) => ({
  path        : '/',
  component   : PageLayout,
  indexRoute  : Home,
  childRoutes : [Twitter]
})



export default createRoutes
