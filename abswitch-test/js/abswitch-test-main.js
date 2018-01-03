// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jesse Greenberg
 */
define( function( require ) {
  'use strict';

  // modules
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var AbswitchTestScreen = require( 'ABSWITCH_TEST/abswitch-test/AbswitchTestScreen' );

  // strings
  var abswitchTestTitleString = require( 'string!ABSWITCH_TEST/abswitch-test.title' );

  var simOptions = {
    credits: {
      //TODO fill in proper credits, all of these fields are optional, see joist.AboutDialog
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( abswitchTestTitleString, [ new AbswitchTestScreen() ], simOptions );
    sim.start();
  } );
} );