app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'static/views/todos.html',
        controller: 'TodoController'
    })

    .when('/:id', {
        templateUrl: 'static/views/todoDetails.html',
        controller: 'TodoDetailCtrl'
    });
}]);