myApp.controller('SubmitController', ['$scope', '$http', function($scope, $http) {


getPowers();


  $scope.hero = {};
  $scope.powers = [];
  $scope.selected_power_name = {};


$scope.addHero = function () {
  $scope.hero.power_name = $scope.selected_power_name.power_name;
  $http.post('/submit', $scope.hero).then(function(response) {
    if(response.status == 201) {
      console.log('Hooray! Saved!');

    } else {
      console.log('Boo!', response.data);
    }
  });


}

function getPowers() {
$http.get('/submit').then(function(response) {
    console.log('Async data returned: ', response.data);
    $scope.powers = response.data;
  });
}


}]);
