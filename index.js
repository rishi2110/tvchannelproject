require('es6-promise').polyfill();
require('isomorphic-fetch');

let key = "583f1fb1a930c5d3ef7f877832ce616d"

fetch("http://api.tvmedia.ca/tv/v4/lineups/41626?api_key="+key).then(function(response)
{
	console.log(response.header)
	console.log(response.body);
});

