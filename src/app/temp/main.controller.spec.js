'use strict';

describe( 'controllers', function () {
    var controller;

    beforeEach( module( 'tagproFront' ) );

    beforeEach( function () {
        controller = null;
    } );

    it( 'should define more than 5 awesome things', inject( function ( $controller ) {
        expect( controller ).toBeNull();

        controller = $controller( 'MainCtrl' );

        expect( angular.isArray( controller.awesomeThings ) ).toBeTruthy();
        expect( controller.awesomeThings.length > 5 ).toBeTruthy();
    } ) );
} );
