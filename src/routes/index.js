import PageLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'


export const createRoutes = (store) => ({
  path        : '/',
  component   : PageLayout,
  indexRoute  : Home,
  childRoutes : [
  ]
})


export default createRoutes
