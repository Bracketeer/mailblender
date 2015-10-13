angular.module('app').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/edit', {
      templateUrl: 'pages/basic/basic.html',
      controller: 'EditTemplateController'
    }).

    when('/default', {
      templateUrl: 'pages/template-view.html',
      controller: 'templateListCtrl'
    }).
    
    when('/template', {
      templateUrl: 'lib/data/templates/template.html',
      controller: 'EditTemplateController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
