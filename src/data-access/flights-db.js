export default ({ makeDb, appConst }) => {
  return Object.freeze({
    processRefresh
  })

  async function processRefresh (params) {
    try {
      const db = await makeDb()

      let filters = []

      if (params.land_success)
        filters.push(appConst.LAND_SUCCESS_FILTER)

      if (params.reused)
        filters.push(appConst.REUSED_FILTER)
      
      if (params.with_reddit)
        filters.push(appConst.WITH_REDDIT_FILTER)

      if (filters.length === 0)
        return {'code': 400, message: 'One filter flag must be true'}
      
      const result = await db.collection(appConst.COLLECTION_NAME)
      .find({ $or : filters }).project(appConst.DISPLAY_FIELDS)

      return await result.toArray()
      
    } catch (err) {
      return {code: err.code, message: err.errmsg}      
    }
  }
}