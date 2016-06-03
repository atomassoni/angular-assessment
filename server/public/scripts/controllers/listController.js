myApp.controller('ListController', ['$scope', '$http', function($scope, $http) {

getHeroes();
getPowers();

$scope.heroes = {};
$scope.powers = [];

function getHeroes() {
$http.get('/list').then(function(response) {
    console.log('Async data returned: ', response.data);
    $scope.heroes = response.data;
  });
}

$scope.deleteHero = function (id) {
  if(confirm("are you sure?")){
$http.get('/list').then(function(response) {
    console.log('Async data returned: ', response.data);
    $scope.heroes = response.data;
  });
}
};

 function getPowers() {
$http.get('/list').then(function(response) {
    console.log('Async data returned: ', response.data);
    $scope.powers = response.data;
  });
}

}]);
