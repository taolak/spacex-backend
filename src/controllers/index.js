import { listRefreshedFlights } from '../use-cases'
import makePostRefreshed from './post-refresh'
  
const postRefreshed = makePostRefreshed({ listRefreshedFlights })
 
export { postRefreshed }