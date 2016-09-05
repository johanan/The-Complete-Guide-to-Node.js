var routes = [];
var registerRoute = (method, url, fn) => {
  routes.push({method: method,
  url: url,
  fn: fn});
};

var routeMatch = (route, url) => {
  return route === url || route === undefined;
};

var methodMatch = (routeMethod, method) => {
  return routeMethod === method || routeMethod === undefined;
};

var mapToRouteMatch = (req) => {
  return (route) => {
    return routeMatch(route.url, req.url)
    && methodMatch(route.method, req.method);
  }
};

var handleRequest = (req, res) => {
  var matchedRoutes = routes.filter(mapToRouteMatch(req));
  matchedRoutes.some((route) => route.fn(req, res));
};

module.exports.registerRoute = registerRoute;
module.exports.handleRequest = handleRequest;
