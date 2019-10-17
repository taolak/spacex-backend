"use strict";

const COLLECTION_NAME = 'flights';
const DISPLAY_FIELDS = {
  "flight_number": 1,
  "rocket.rocket_name": 1,
  "rocket.rocket_type": 1,
  "launch_date_local": 1,
  "details": 1,
  "links.article_link": 1,
  "links.mission_patch_small": 1,
  "_id": 0
}; //with truthy completeness

const LAND_SUCCESS_FILTER = {
  'rocket.first_stage.cores.land_success': {
    $nin: [false, null, 0, ""]
  }
};
const REUSED_FILTER = {
  $or: [{
    "reuse.core": {
      $eq: true
    }
  }, {
    "reuse.side_core1": {
      $eq: true
    }
  }, {
    "reuse.side_core2": {
      $eq: true
    }
  }, {
    "reuse.fairings": {
      $eq: true
    }
  }, {
    "reuse.capsule": {
      $eq: true
    }
  }]
}; //use BSON type to check for null where key exists

const WITH_REDDIT_FILTER = {
  $or: [{
    "links.reddit_campaign": {
      $not: {
        $type: 10
      }
    }
  }, {
    "links.reddit_launch": {
      $not: {
        $type: 10
      }
    }
  }, {
    "links.reddit_recovery": {
      $not: {
        $type: 10
      }
    }
  }, {
    "links.reddit_media": {
      $not: {
        $type: 10
      }
    }
  }]
};
module.exports = {
  COLLECTION_NAME,
  DISPLAY_FIELDS,
  REUSED_FILTER,
  LAND_SUCCESS_FILTER,
  WITH_REDDIT_FILTER
};