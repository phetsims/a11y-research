// Copyright 2018, University of Colorado Boulder

/**
 * @author Jesse Greenberg
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var abswitchTest = require( 'ABSWITCH_TEST/abswitchTest' );
  var AbswitchTestModel = require( 'ABSWITCH_TEST/abswitch-test/model/AbswitchTestModel' );
  var AbswitchTestScreenView = require( 'ABSWITCH_TEST/abswitch-test/view/AbswitchTestScreenView' );

  /**
   * @constructor
   */
  function AbswitchTestScreen() {

    var options = {
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new AbswitchTestModel(); },
      function( model ) { return new AbswitchTestScreenView( model ); },
      options
    );
  }

  abswitchTest.register( 'AbswitchTestScreen', AbswitchTestScreen );

  return inherit( Screen, AbswitchTestScreen );
} );