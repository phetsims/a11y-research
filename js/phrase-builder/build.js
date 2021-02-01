// Copyright 2021, University of Colorado Boulder

/**
 * Runs webpack - DO NOT RUN MULTIPLE CONCURRENTLY
 *
 *  Totally copied from CHIPPER/webpackBuild.js
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

/* eslint-env node */
'use strict';

// modules
const fs = require( 'fs' );
const path = require( 'path' );
const webpack = require( 'webpack' );

const buildDir = 'build';
const htmlFile = 'index.html';
const mainJSFile = 'main.js';

const compiler = webpack( {

    // We uglify as a step after this, with many custom rules. So we do NOT optimize or uglify in this step.
    optimization: {
      minimize: false
    },

    // Simulations or runnables will have a single entry point
    entry: path.resolve( __dirname, mainJSFile ),

    // We output our builds to chipper/build/
    output: {
      path: path.resolve( __dirname, buildDir ),
      filename: mainJSFile
    }

  }
);

compiler.run( ( err, stats ) => {
  if ( err || stats.hasErrors() ) {
    console.error( 'Webpack build errors:', stats.compilation.errors );
    throw  err || stats.compilation.errors[ 0 ];
  }
  else {
    fs.copyFileSync( path.resolve( __dirname, htmlFile ), path.resolve( __dirname, buildDir, htmlFile ) );
  }
} );
