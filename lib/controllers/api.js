'use strict';

var googleapis = require('googleapis');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }
  ]);
};

exports.searchVideos = function(req, res) {
    var query = req.query.query;

    console.log(query);

    googleapis
        .discover('youtube', 'v3')
        .execute(function(err, client) {
            var params = { part: 'snippet', q: query, maxResults: 10 };

            var searchRequest = client.youtube.search.list(params).withApiKey('AIzaSyCBNnlLz5qAYry7jYpjWBVlsCFtT9NIA4Y');

            searchRequest.execute(function(err, response) {
                if (err) {
                    res.send(500, err);
                }

                for (var i in response.items) {
                    response.items[i].videourl = '//www.youtube.com/embed/' + response.items[i].id.videoId;
                }

                console.log(response.items[0]);

                res.send(200, response);
            });
        });
};