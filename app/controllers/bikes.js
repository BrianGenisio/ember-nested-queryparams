import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['styles'],
  styles: [],

  proxiedStyles: Ember.computed.map('model.styles', function(model) {
    let styles = this.get('styles');

    return Ember.ObjectProxy.create({
      content: model,
      checked: styles.contains(model.get('name'))
    });
  }),

  proxiedCheckedStyles: Ember.computed.filterBy('proxiedStyles', 'checked', true),
  checkedStyles: Ember.computed.mapBy('proxiedCheckedStyles', 'content'),

  actions: {
    onChecked: function(name) {
      let proxiedStyles = this.get('proxiedStyles');
      let style = proxiedStyles.find(s => s.get('content').get('name') === name);
      style.set('checked', !style.get('checked'));

      let styles = this.get('checkedStyles').map(s => s.get('name'));

      this.transitionToRoute({
        queryParams: {
          styles: styles
        }
      });
    }
  }
});
