var IndexRoute = Ember.Route.extend({

  setupController: function(controller) {
    if(!controller.get('content.length')) {
      controller.updateContent();
    }
  },

  renderTemplate: function(controller, model) {
    this.render();

    // {{render}} does not currently allow for dynamic names so an outlet is used
    var name = this.config.plural + '_search';
    this.render(name, { outlet: "search", into: this.routeName });
  }
  
});

export default IndexRoute;