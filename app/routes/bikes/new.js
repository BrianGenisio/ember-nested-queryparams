import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    params = Ember.merge(params, this.paramsFor('bikes'));
    params.isNew = true;

    console.log("params for new: ", params);

    return this.store.query('bike', params);
  }
});
