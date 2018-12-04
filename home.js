angular.module("myApp.controllers").controller('homeController',
  function($scope ,$location , $window) {

    $scope.myFunction = function(){
        console.log("myFunction()")   
      $window.location.href="details.html";     
    }

}),
angular.module("myApp.controllers").controller('homeController', 
function ($scope, $http) {
      $scope.count = 0;
      $http.get("data.json")
        .then(function (response) {
          $scope.myWelcome = response.data;
        });
    })