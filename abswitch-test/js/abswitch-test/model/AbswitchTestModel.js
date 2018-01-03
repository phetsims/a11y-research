// Copyright 2018, University of Colorado Boulder

/**
 * @author Jesse Greenberg
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var abswitchTest = require( 'ABSWITCH_TEST/abswitchTest' );

  /**
   * @constructor
   */
  function AbswitchTestModel() {
    //TODO
  }

  abswitchTest.register( 'AbswitchTestModel', AbswitchTestModel );

  return inherit( Object, AbswitchTestModel, {

    // @public resets the model
    reset: function() {
      //TODO reset things here
    },

    //TODO Called by the animation loop. Optional, so if your model has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle model animation here.
    }
  } );
} );