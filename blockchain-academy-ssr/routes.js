const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('course', '/course/:slug');
routes.add('course-content', '/course/:slug/content/:id', 'course');

