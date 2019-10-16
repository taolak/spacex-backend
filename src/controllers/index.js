import {
    listLandSuccessFlights,
    listReusedFlights,
    listWithRedditFlights,
    listRefreshedFlights
  } from '../use-cases'
  import makeGetLandSuccess from './get-land-success'
  import makeGetReused from './get-reused'
  import makeGetWithReddit from './get-with-reddit'
  import makePostRefreshed from './post-refresh'
  
  const getLandSuccess = makeGetLandSuccess({ listLandSuccessFlights })
  const getReused = makeGetReused({ listReusedFlights })
  const getWithReddit = makeGetWithReddit({ listWithRedditFlights })
  const postRefreshed = makePostRefreshed({ listRefreshedFlights })
 
  export { getLandSuccess, getReused, getWithReddit, postRefreshed }