Todos.Router.map(function() {
  this.resource('todos', { path: '/' }); //tell Ember.js to detect when the application's URL matches '/' and to render the todos template.
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');  //returns all the existing todos:
  }
});
