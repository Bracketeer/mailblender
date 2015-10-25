angular.module('app').controller('EditTemplateController', function($scope, $http) {

  $http.get('lib/modules/templateEdit/html-snippets/header.html').success(function(baseData){
    $scope.header = baseData;
  });

  $scope.addHeader = function(baseData){
    fs.appendFile('lib/data/templates/template.html', $scope.header, function(err) {
      if (err) throw err;
      console.log('file written!');

    })
  }

  $scope.editTemplate = function(index){
    console.log('editted');
  }

  $scope.newTemplate = function(baseData){
    fs.writeFile('lib/data/templates/template.html', $scope.templates, function(err) {
      if (err) throw err;
      console.log('base file written!');
    })

  }

});
