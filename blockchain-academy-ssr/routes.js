const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('course', '/course/:slug');
routes.add('about', '/about-us/:foo(bar|baz)');

