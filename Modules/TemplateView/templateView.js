angular.module('app')
.controller('templateListCtrl', function($scope, $http){

  $http.get('data/data.json').success(function(data){
  $scope.templates = data;
});

  $scope.orderProp = 'client';

  $scope.add = function(){

    var date = new Date();

      if ($scope.templates.name != undefined){
      $scope.templates.push(
        {
          id: $scope.templates.length + 1,
          name: $scope.templates.name,
          date: date
        }
      );
      console.log($scope.templates.length);
      $scope.templates.name = null;
      console.table($scope.templates);
    }
    else{
      alert("Please add a title to your template!")
    }
  };

  $scope.openMenu = function (menuButton){

    var menuShow = true;
  };

    $scope.remove = function(index){
      $scope.templates.splice(index, 1);
      console.table($scope.templates);
    };

});
