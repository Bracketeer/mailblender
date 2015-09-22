angular.module('app')
.controller('templateListController', function($scope){

    $scope.templates = [
      {id: 1, name: 'Real Estate Standard'},
      {id: 2, name: 'Newsletter Standard'}];

    $scope.add = function(){
      if ($scope.templates.name != undefined){
      $scope.templates.push({id: $scope.templates.length + 1, name: $scope.templates.name})
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
  }

    $scope.remove = function(index){
      $scope.templates.splice(index, 1);
    };

});
