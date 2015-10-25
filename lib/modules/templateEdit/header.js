angular.module('app').controller('EditTemplateController', function($scope, $http) {

  var addHeader = function(header){
    fs.readFile('lib/modules/templateEdit/html-snippets/header.html' function (err, data){
      if (err) throw err;
      header = data;
    })
  };

  $scope.addContainer = function(header){
    fs.appendFile('lib/data/templates/template.html', header, function(err) {
      if (err) throw err;
      console.log('file written!');
    })
  }
