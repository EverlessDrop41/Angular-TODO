'use strict';

angular.module('todoListApp').controller('mainCtrl', function ($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.addTodo = function () {
    var todo = {name: "This is a new todo"};
    $scope.todos.unshift(todo);
  }

  dataService.getTodos(function (res) {
    console.log(res.data);
    $scope.todos = res.data;
  });

  $scope.deleteTodo = function (todo, index) {
    dataService.deleteTodo;
    $scope.todos.splice(index, 1);
  }

  $scope.saveTodo = dataService.saveTodo;

  $scope.saveTodos = function () {
    var filteredTodos = $scope.todos.filter(function (todo) {
      if (todo.edited) {
        return todo;
      }
    });
    dataService.saveTodos(filteredTodos);
  }

})
