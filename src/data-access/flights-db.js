export default ({ makeDb, appConst }) => {
  return Object.freeze({
    findLandSuccess,
    findReused,
    findWithReddit,
    processRefresh
  })

  async function findLandSuccess () {
    try {
      const db = await makeDb()
      const result = await db.collection(appConst.COLLECTION_NAME)
      .find(appConst.LAND_SUCCESS_FILTER).project(appConst.DISPLAY_FIELDS)
      return await result.toArray()
    } catch (err) {
      return {code: err.code, message: err.errmsg}
    }
  }

  async function findReused () {
    try {
      const db = await makeDb()
      const result = await db.collection(appConst.COLLECTION_NAME)
      .find(appConst.REUSED_FILTER).project(appConst.DISPLAY_FIELDS)
      return await result.toArray()
    } catch (err) {
      return {code: err.code, message: err.errmsg}
    }
  }

  async function findWithReddit () {
    try {
      const db = await makeDb()
      const result = await db.collection(appConst.COLLECTION_NAME)
      .find(appConst.WITH_REDDIT_FILTER).project(appConst.DISPLAY_FIELDS)
      return await result.toArray()
    } catch (err) {
      return {code: err.code, message: err.errmsg}
    }
  }

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