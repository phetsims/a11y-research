// Copyright 2017, University of Colorado Boulder

/**
 *
 * @author - Michael Kauzmann (PhET Interactive Simulations)
 */
(function() {
  'use strict';

  var aria = window.aria;

  /**
   * ARIA Listbox Examples
   * @function onload
   * @desc Initialize the listbox examples once the page has loaded
   */

  window.addEventListener( 'load', function() {
    var nucleusListbox = new aria.Listbox( document.getElementById( 'nucleus-position-listbox' ) );

    nucleusListbox.enableMoveUpDown(
      document.getElementById( 'listbox-control-move-up' ),
      document.getElementById( 'listbox-control-move-down' )
    );

    var innerOrbitListbox = new aria.Listbox( document.getElementById( 'inner-orbit-position-listbox' ) );
    var outerOrbitListbox = new aria.Listbox( document.getElementById( 'outer-orbit-position-listbox' ) );
    var bucketListbox = new aria.Listbox( document.getElementById( 'bucket-listbox' ) );

  } );
})();