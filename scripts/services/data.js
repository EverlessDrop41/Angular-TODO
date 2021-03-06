'use strict';

angular.module('todoListApp').service('dataService', function ($http) {

  this.helloConsole = function () {
    console.log("Hello, World!");
  };

  this.getTodos = function (callback) {
    $http.get('/mock/todos.json').then(callback)
  };

  this.deleteTodo = function (todo) {
    console.log("The " + todo.name + " todo has been deletd!");
    //delete logic
  };

  this.saveTodo = function (todo) {
    console.log("The " + todo.name + " todo has been saved!");
    //save logic
  };

  this.saveTodos = function (todos) {
    for (var todo in todos) {
      console.log("The " + todos[todo].name + " todo has been saved!");
    }
  }

});
