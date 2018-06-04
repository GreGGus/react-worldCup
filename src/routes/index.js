import PageLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import Twitter from './Twitter'


export const createRoutes = (store) => ({
  path        : '/',
  component   : PageLayout,
  indexRoute  : Home,
  childRoutes : [ Twitter(store) ]
})


export default createRoutes
