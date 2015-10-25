angular.module('app').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/edit', {
      templateUrl: 'lib/pages/edit-tools/edit-tools.html',
      controller: 'EditTemplateController'
    }).

    when('/', {
      templateUrl: 'lib/pages/template-view.html',
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
