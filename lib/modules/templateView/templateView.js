angular.module('app').controller('templateListCtrl', function($scope, $http){


  $http.get('lib/data/data.json').success(function(data){
  $scope.templates = data;
});


//Template Manipulation Controllers


//Add a template
  $scope.add = function(){

    var date = new Date();

      if ($scope.templates != undefined){
      $scope.templates.push(
        {
          id: $scope.templates.length + 1,
          name: $scope.templates.name,
          client: $scope.templates.client,
          creator: $scope.templates.creator,
          date: date
        }
      );

      fs.writeFile('lib/data/data.json', angular.toJson($scope.templates, 4), function(err){
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
    $scope.templates.splice((index), 1);
    fs.writeFile('lib/data/data.json', angular.toJson($scope.templates, 4), function(err){
      if (err) throw err;
      console.log('files written');
    });
  };

  $scope.openMenu = function (menuButton){

    var menuShow = true;
  };

$scope.templateViewClass = true;
});
