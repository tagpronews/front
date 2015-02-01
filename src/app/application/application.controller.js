(function () {
    'use strict';

    angular
        .module( 'tagproFront' )
        .controller( 'ApplicationController', ApplicationController );

    function ApplicationController ( Restangular, URLS ) {

        Restangular.setBaseUrl = URLS.API;

    }
})();
