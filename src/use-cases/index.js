import makeListRefreshedFlights from './list-refreshed-flights'
import flightsDb from '../data-access'

const listRefreshedFlights = makeListRefreshedFlights({ flightsDb })

export { listRefreshedFlights }