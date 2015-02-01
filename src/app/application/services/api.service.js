(function () {
    'use strict';

    angular
        .module( 'tagproFront' )
        .factory( 'APIService', APIService );

    function APIService ( $http, URLS ) {
        var service = {
            request : request,
            get     : get,
            post    : post,
            put     : put,
            delete  : remove
        };

        return service;

        ////////////////

        function request ( version, url, data, options ) {
            var Session = { user : { token : null } }; // TEMP until auth is implemented
            var request = {
                url     : URLS.API + version + '/' + url,
                headers : { Authorization : Session.user.token }
            };

            return $http( request );
        }

        function get ( version, url, data, options ) {
            var query = generateQueryString( data );
            service.request( version, url + query, {}, options );
        }

        function post ( version, url, data, options ) {
            service.request( version, url, data, options );
        }

        function put ( version, url, data, options ) {
            service.request( version, url, data, options );
        }

        function remove ( version, url, data, options ) {
            var query = generateQueryString( data );
            service.request( version, url + query, {}, options );
        }

        function generateQueryString ( data ) {
            if ( !Object.keys( data ).length ) {
                return '';
            }

            var queryString = [];
            for ( var item in data ) {
                if ( data.hasOwnProperty( item ) ) {
                    queryString.push( item + '=' + data[ item ] );
                }
            }

            return '?' + queryString.join( '&' );
        }
    }
})();
