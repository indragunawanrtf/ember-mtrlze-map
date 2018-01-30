import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://track.iluvatrack.com',
  namespace: 'api'
});
