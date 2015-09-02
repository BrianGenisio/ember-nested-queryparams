import Ember from 'ember';

export default Ember.Controller.extend({
  proxiedStyles: Ember.computed.map('model.styles', function(model) {
    return Ember.ObjectProxy.create({
      content: model,
      checked: false
    });
  }),

  proxiedCheckedStyles: Ember.computed.filterBy('proxiedStyles', 'checked', true),
  checkedStyles: Ember.computed.mapBy('proxiedCheckedStyles', 'content'),

  stylesObserver: function() {
    console.log('Checked changed: ', this.get('checkedStyles'));
  }.observes('checkedStyles.[]').on('init')
});
