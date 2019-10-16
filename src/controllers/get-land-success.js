export default ({ listLandSuccessFlights }) => {
    return async (httpRequest) => {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const landSuccessData = await listLandSuccessFlights()
        return {
          headers,
          statusCode: 200,
          body: landSuccessData
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