angular.module('app')

.controller('templateListCtrl', function($scope, $http){

  $http.get('data/data.json').success(function(data){
  $scope.templates = data;
});

  $scope.orderProp = "name";

//Add a template
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

      fs.writeFile('mailblender/data/data.json', angular.toJson($scope.templates, 4), function(err){
        if (err) throw err;
        console.log('files written');
      });

      console.log($scope.templates.length);
      $scope.templates.name = null;
      console.table($scope.templates);
    }
    else{
      alert("Please add a title to your template!")
    }
  };
//Remove Template
  $scope.remove = function(index){
    $scope.templates.splice(index, 1);
    fs.writeFile('mailblender/data/data.json', angular.toJson($scope.templates, 4), function(err){
      if (err) throw err;
      console.log('files written');
    });
  };

  $scope.openMenu = function (menuButton){

    var menuShow = true;
  };



});
