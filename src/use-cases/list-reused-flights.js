export default ({ flightsDb }) => {
    return async () => {
      //TODO: add future validations
      return await flightsDb.findReused()
    }
  }