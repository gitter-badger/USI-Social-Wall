/** @module albums/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var OAuth = require('oauth');
var config = require("../../config");
var R = require("request");
var querystring = require('querystring');
var search = require('youtube-search');
var options = {
  maxResults: 20,
  key: 'AIzaSyD_OCg4U-uwU83Tev7mLfPEzknRCD4Q-XU' // server key
};
var allowedProperties = [
  'fields',
  'channelId',
  'channelType',
  'eventType',
  'forContentOwner',
  'forDeveloper',
  'forMine',
  'location',
  'locationRadius',
  'onBehalfOfContentOwner',
  'order',
  'pageToken',
  'publishedAfter',
  'publishedBefore',
  'regionCode',
  'relatedToVideoId',
  'relevanceLanguage',
  'safeSearch',
  'topicId',
  'type',
  'videoCaption',
  'videoCategoryId',
  'videoDefinition',
  'videoDimension',
  'videoDuration',
  'videoEmbeddable',
  'videoLicense',
  'videoSyndicated',
  'videoType',
  'key'
];

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/', function (req, res, next) {
  res.write('ciao youtube')
  res.end()
})

router.get('/:hashtag', function (req, res, next) {
  var keyword = req.params.hashtag;

  myYoutubeSearch(keyword, options, function(err, results) {
    if(err){
      return console.log(err);
    }
    res.json(results);
  });
});

var myYoutubeSearch = function (keyword, options, cback) {
  // Parameters to be used for query
  var params = {
    q: keyword,
    part: options.part || 'snippet',
    maxResults: options.maxResults || 30
  }

  /*
   * If our options object contains any of the allowed properties
   * parameter key should be set to options key
   */
  Object.keys(options).map(function (k) {
    if (allowedProperties.indexOf(k) > -1){
      params[k] = options[k];
    }
  })

  // Make request
  R({
    url: 'https://www.googleapis.com/youtube/v3/search?' + querystring.stringify(params),
    method: 'GET'
  }, function (err, res, body) {
    if (err){
      return cback(err);
    }

    try {
      var result = JSON.parse(body)

      if (result.error) {
        var error = new Error(result.error.errors.shift().message);
        return cback(error);
      }

      /*
       * Select only details that we care about
       * Items returned may be links to videos or links to channels
       */
      var findings = result.items.map(function (item) {
        return {
          id: item.id.videoId,
          link: (item.id.kind === 'youtube#channel' ?
            'https://www.youtube.com/channel/' + item.id.channelId :
            'https://www.youtube.com/watch?v=' + item.id.videoId),
          kind: item.id.kind,
          publishedAt: item.snippet.publishedAt,
          channelId: item.snippet.channelId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnails: item.snippet.thumbnails
        }
      })

      /*
       * var pageInfo = {
       *  totalResults: result.pageInfo.totalResults,
       *  resultsPerPage: result.pageInfo.resultsPerPage
       * }
       * return cback(null, findings, pageInfo) - I think it is not required for us to display pageInfo.
       * Leaving it there just in case..
       */

      return cback(null, findings)
    } catch(e) {
      return cback(e)
    }
  })
}







module.exports = router;
