// Copyright 2018, University of Colorado Boulder

/**
 * @author Jesse Greenberg
 */
define( require => {
  'use strict';

  // modules
  const inherit = require( 'PHET_CORE/inherit' );
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const abswitchTest = require( 'ABSWITCH_TEST/abswitchTest' );
  const AbswitchTestModel = require( 'ABSWITCH_TEST/abswitch-test/model/AbswitchTestModel' );
  const AbswitchTestScreenView = require( 'ABSWITCH_TEST/abswitch-test/view/AbswitchTestScreenView' );

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