var http = require('http');

//fake api call
var apiOptions = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/users',
  method: 'GET'
}
var apiCall = http.request(apiOptions, (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => console.log(data));
});
apiCall.end();
