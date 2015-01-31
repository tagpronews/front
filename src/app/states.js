(function () {
    'use strict';

    angular
        .module( 'tagproFront' )
        .config( states );

    function states ( $stateProvider, $urlRouterProvider ) {
        $stateProvider
            .state( 'home', {
                url          : '/',
                templateUrl  : 'app/main/main.html',
                controller   : 'MainCtrl',
                controllerAs : 'main'
            } );

        $urlRouterProvider.otherwise( '/' );
    }
})();