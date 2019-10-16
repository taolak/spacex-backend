export default ({ listReusedFlights }) => {
    return async (httpRequest) => {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const reusedData = await listReusedFlights()
        return {
          headers,
          statusCode: 200,
          body: reusedData
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