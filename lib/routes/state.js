angular.module('app', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        var home = {
                name: 'home',
                url: '/',
                templateUrl: 'index.html'
            },
            edit = {
                name: 'edit',
                url: 'tools',
                parent: home,
                templateUrl: 'lib/pages/edit-tools/edit-tools.html'
            },
            template = {
                name: 'template',
                url: 'template',
                parent: home,
                templateUrl: 'data/templates/template.html'
            };

        $stateProvider.state(home);
        $stateProvider.state(edit);
        $stateProvider.state(template);

    }])
    .run(['$state', function ($state) {
       $state.transitionTo('home');
    }])

    .controller('SidebarCtrl', function ($scope, $state) {

    $scope.content = ['home', 'edit', 'template'];

    $scope.setPage = function (page) {
        $state.transitionTo(page);
    };
});
