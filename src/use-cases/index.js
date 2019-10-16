import makeListLandSuccessFlights from './list-land-success-flights'
import makeListReusedFlights from './list-reused-flights'
import makeListWithRedditFlights from './list-with-reddit-flights'
import makeListRefreshedFlights from './list-refreshed-flights'
import flightsDb from '../data-access'

const listLandSuccessFlights = makeListLandSuccessFlights({ flightsDb })
const listReusedFlights = makeListReusedFlights({ flightsDb })
const listWithRedditFlights = makeListWithRedditFlights({ flightsDb })
const listRefreshedFlights = makeListRefreshedFlights({ flightsDb })

export { 
    listLandSuccessFlights, 
    listReusedFlights, 
    listWithRedditFlights, 
    listRefreshedFlights
}