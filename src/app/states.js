(function () {
    'use strict';

    angular
        .module( 'tagproFront' )
        .config( states );

    function states ( $stateProvider, $urlRouterProvider ) {
        $stateProvider
            .state( 'home', {
                url          : '/',
                templateUrl  : 'app/temp/main.html',
                controller   : 'MainCtrl',
                controllerAs : 'main'
            } );

        $urlRouterProvider.otherwise( '/' );
    }
})();
