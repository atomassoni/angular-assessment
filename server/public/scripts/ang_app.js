var myApp = angular.module('myApp', ['ngRoute']);



  myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/submit', {
        templateUrl: '/views/submit.html',
        controller: "SubmitController"
      })
      .when('/list', {
        templateUrl: '/views/list.html',
        controller: "ListController"
      })
      .otherwise({
        redirectTo: 'submit'
      })
}]);
