myApp.controller('ListController', ['$scope', '$http', function($scope, $http) {


getPowers();

$scope.heroes = {};
$scope.powers = [];
$scope.selected_power_name = {};


$scope.getHeroes = function () {

$http.get('/list').then(function(response) {
    console.log('Async data returned: ', response.data);
    $scope.heroes = response.data;
    console.log($scope.selected_power_name.power_name);
      console.log($scope.heroes);
  });
}

$scope.deleteHero = function (id) {
if (confirm ("sure?")) {
$http.delete('/list/' + id).then(function(response) {
    console.log('Async data returned: ', response.data);
    $scope.heroes = response.data;
  });
}
};

 function getPowers() {
$http.get('/submit').then(function(response) {
    console.log('Async data returned: ', response.data);
    $scope.powers = response.data;
  });
}

}]);
