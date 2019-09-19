// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jesse Greenberg
 */
define( require => {
  'use strict';

  // modules
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const AbswitchTestScreen = require( 'ABSWITCH_TEST/abswitch-test/AbswitchTestScreen' );

  // strings
  const abswitchTestTitleString = require( 'string!ABSWITCH_TEST/abswitch-test.title' );

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