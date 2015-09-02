import DS from 'ember-data';

export default DS.Model.extend({
  brand: DS.attr('string'),
  model: DS.attr('string'),
  isNew: DS.attr('boolean'),
  style: DS.attr('string'),
  condition: DS.attr('string')
});
