import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  command: attr('string'),
  lat: attr('latitude'),
  lng: attr('longitude'),
  datetime: attr('string')

});
