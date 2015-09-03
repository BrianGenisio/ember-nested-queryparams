import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    params = Ember.merge(params, this.paramsFor('bikes'));
    params.isNew = true;
    
    return this.store.query('bike', params);
  }
});
