Plum.UserRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.username);
  },
  setupController: function(controller, user) {
    controller.set('model', user);
    controller.set('model.username', user.id);
    console.log(user);
  }
});