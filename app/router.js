import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
      lat: -1.740607,
      lng: 117.169436,
      zoom: 5
});

Router.map(function() {
  this.route('profile');
  this.route('dashboard');
});

export default Router;
