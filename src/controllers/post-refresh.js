export default ({ listRefreshedFlights }) => {
    return async (httpRequest) => {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const refreshedData = await listRefreshedFlights(httpRequest.body)
        return {
          headers,
          statusCode: 200,
          body: refreshedData
        }
      } catch (e) {
        console.log(e)
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }