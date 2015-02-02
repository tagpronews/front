(function () {
    'use strict';

    angular
        .module( 'tagproFront' )
        .config( states );

    function states ( $stateProvider, $urlRouterProvider ) {
        $stateProvider
            .state( 'home', {
                url          : '/',
                templateUrl  : 'app/application/templates/main.html',
                controller   : 'ApplicationController',
                controllerAs : 'vm'
            } );

        $urlRouterProvider.otherwise( '/' );
    }
})();
