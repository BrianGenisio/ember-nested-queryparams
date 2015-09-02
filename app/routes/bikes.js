import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      styles: this.store.findAll('style')
    });
  }
});
