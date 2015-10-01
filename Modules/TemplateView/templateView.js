angular.module('app')

.controller('templateListCtrl', function($scope, $http, $modal, $log){


  $http.get('data/data.json').success(function(data){
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
    $scope.templates.splice((index), 1);
    fs.writeFile('mailblender/data/data.json', angular.toJson($scope.templates, 4), function(err){
      if (err) throw err;
      console.log('files written');
    });
  };

  $scope.openMenu = function (menuButton){

    var menuShow = true;
  };


//Modal Controllers

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partials/TemplateModal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        templates: function () {
          return $scope.templates;
        }
      }
    });

    modalInstance.result.then(function (data) {
      $scope.templates = data;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $http, $modalInstance, templates) {

var date = new Date();

$scope.templates.push({
  name: $scope.templates.name,
  client: $scope.templates.client,
  creator: $scope.templates.creator,
  date: date
});

  $scope.ok = function () {
    $modalInstance.close($scope.templates);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
