myApp.controller('SubmitController', ['$scope', '$http', function($scope, $http) {


getPowers();


  $scope.hero = {};
  $scope.powers = [];


$scope.addHero = function () {
  $http.post('/submit', $scope.hero).then(function(response) {
    if(response.status == 201) {
      console.log('Hooray! Saved!');

    } else {
      console.log('Boo!', response.data);
    }
  });


}

function getPowers() {
$http.get('/list').then(function(response) {
    console.log('Async data returned: ', response.data);
    $scope.powers = response.data;
  });
}


}]);
