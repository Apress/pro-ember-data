import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('video', { path: '/videos/:id' });
  this.route('post', { path: '/posts/:id' });
  this.route('purchases');
  this.route('comments', { path: 'recent-comments' });
});
