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
const process = require( 'process' );
const webpack = require( 'webpack' );

const buildDir = 'build';
const htmlFile = 'index.html';
const mainJSFile = 'main.js';

const preloadNames = [
  'assert/js/assert.js',
  'sherpa/lib/lodash-4.17.4.min.js',
  'tandem/js/PhetioIDUtils.js'
];

const isDev = process.argv.includes( '--dev' );

function createIndex() {
  let preloads;
  let main;
  if ( isDev ) {
    preloads = preloadNames.map( preloadFileName => `<script src="${'../../../' + preloadFileName}"></script>` ).join( '\n' );
    main = '<script type="module" src="main.js"></script>';
  }
  else {
    preloads = preloadNames.map( preloadFileName => `<script>${fs.readFileSync( '../../../' + preloadFileName )}</script>` ).join( '\n\n' );

    const builtMainFilePath = path.resolve( __dirname, buildDir, mainJSFile );
    main = `<script type="module">${fs.readFileSync( builtMainFilePath )}</script>`;
    fs.rmSync( builtMainFilePath );
  }

  let template = fs.readFileSync( 'index.html.template' ).toString();
  template = template.replace( '{{PRELOAD_SCRIPTS}}', preloads );
  template = template.replace( '{{MAIN_SCRIPT}}', main );

  const indexOutput = isDev ? htmlFile : path.resolve( buildDir, htmlFile );
  fs.writeFileSync( indexOutput, template );
}

if ( isDev ) {
  createIndex();
}
else {
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
      createIndex();
    }
  } );
}
