import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    styles: { refreshModel: true }
  },

  model: function() {
    return Ember.RSVP.hash({
      styles: this.store.findAll('style')
    });
  }
});
