angular.module('app').controller('EditTemplateController', function($scope, $http) {

  $http.get('lib/modules/templateEdit/html-snippets/base-template.html').success(function(baseData){
    $scope.templates = baseData;
  });
  // $http.get('lib/data/data.json').success(function(data){
  //   $scope.templates = data;
  // });

  $scope.addContainer = function(){
    fs.appendFile('lib/data/templates/template.html', angular.HTML($scope.templates), function(err) {
      if (err) throw err;
      console.log('file written!');
    })
  }

  $scope.newTemplate = function(baseData){
    fs.writeFile('lib/data/templates/template.html', $scope.templates, function(err) {
      if (err) throw err;
      console.log('base file written!');
    })

  }

});
