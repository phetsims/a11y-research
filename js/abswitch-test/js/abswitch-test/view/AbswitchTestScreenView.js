// Copyright 2018, University of Colorado Boulder

/**
 * @author Jesse Greenberg
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var ABSwitch = require( 'SUN/ABSwitch' );
  var AccessiblePeer = require( 'SCENERY/accessibility/AccessiblePeer' );
  var abswitchTest = require( 'ABSWITCH_TEST/abswitchTest' );
  var Property = require( 'AXON/Property' );
  var Circle = require( 'SCENERY/nodes/Circle' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Node = require( 'SCENERY/nodes/Node' );
  var utteranceQueue = require( 'SCENERY_PHET/accessibility/utteranceQueue' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );

  /**
   * @param {AbswitchTestModel} abswitchTestModel
   * @constructor
   */
  function AbswitchTestScreenView( abswitchTestModel ) {

    ScreenView.call( this );

    var font = new PhetFont( 20 );

    //--------------------------------------------------------------------------
    // An ABSwitch that behaves like a custom button
    //--------------------------------------------------------------------------
    var buttonParentNode = new Node();

    // label for the button
    var buttonLabel = new Text( 'ABSwitch as custom component, extra content with aria-live', { font: font } );
    buttonParentNode.addChild( buttonLabel );
    
    var buttonProperty = new Property( false );
    var buttonLabelA = new Node( {
      children: [ new Circle( 20, { fill: 'red' } ) ]
    } );
    var buttonLabelB = new Node( {
      children: [ new Rectangle( 0, 0, 40, 40, { fill: 'green' } ) ]
    } );

    var buttonSwitch = new ABSwitch( buttonProperty, false, buttonLabelA, true, buttonLabelB );
    buttonLabel.centerBottom = buttonSwitch.centerTop.minusXY( 0, buttonLabel.height );
    buttonParentNode.addChild( buttonSwitch );

    // a11y
    buttonSwitch.tagName = 'button';
    buttonSwitch.innerContent = 'Circle or Square A B Switch, Circle selected';
    buttonSwitch.addAccessibleInputListener( {
      click: function() {
        buttonProperty.set( !buttonProperty.get() );

        if ( buttonProperty.get() ) {
          utteranceQueue.addToBack( 'Square selected' );
          buttonSwitch.innerContent = 'Circle or Square A B Switch, Square selected';
        }
        else {
          utteranceQueue.addToBack( 'Circle selected' );
          buttonSwitch.innerContent = 'Circle or Square A B Switch, Circle selected';
        }
      }
    } );

    //--------------------------------------------------------------------------
    // ABSwitch that behaves like a checkbox
    //--------------------------------------------------------------------------
    var checkboxParentNode = new Node();

    // label for the checkbox
    var checkboxLabel = new Text( 'ABSwitch as an on/off checkbox, extra content with aria-live', { font: font } );
    checkboxParentNode.addChild( checkboxLabel );
    
    var checkboxProperty = new Property( false );
    var checkboxLabelA = new Node( {
      children: [ new Circle( 20, { stroke: 'red' } ) ]
    } );
    var checkboxLabelB = new Node( {
      children: [ new Circle( 20, { fill: 'red' } ) ]
    } );

    var checkboxSwitch = new ABSwitch( checkboxProperty, false, checkboxLabelA, true, checkboxLabelB );
    checkboxLabel.centerBottom = checkboxSwitch.centerTop.minusXY( 0, checkboxLabel.height );
    checkboxParentNode.addChild( checkboxSwitch );

    // a11y
    checkboxSwitch.tagName = 'input';
    checkboxSwitch.inputType = 'checkbox';
    checkboxSwitch.containerTagName = 'div';
    checkboxSwitch.labelTagName = 'label';
    checkboxSwitch.labelContent = 'Add circle';
    checkboxSwitch.addAccessibleInputListener( {
      change: function() {
        checkboxProperty.set( !checkboxProperty.get() );

        if ( checkboxProperty.get() ) {
          utteranceQueue.addToBack( 'Circle added' );
        }
        else {
          utteranceQueue.addToBack( 'Circle removed' );
        }
      }
    } );

    //--------------------------------------------------------------------------
    // An ABSwitch that behaves like radio buttons
    //--------------------------------------------------------------------------
    var radioButtonParent = new Node();

    // label for the radio option
    var radioLabel = new Text( 'ABSwitch as a radio button group', { font: font } );
    radioButtonParent.addChild( radioLabel );
    
    var parent = new Node( {
      tagName: 'div',
      labelTagName: 'h3',
      innerContent: 'Circle or Square',
      prependLabels: true
    } );
    radioButtonParent.addChild( parent );

    // an ABSWitch that acts like radio buttons
    var radioButtonProperty = new Property( false );
    var radioLabelA = new Node( {
      children: [ new Circle( 20, { fill: 'red' } ) ]
    } );
    var radioLabelB = new Node( {
      children: [ new Rectangle(0, 0, 40, 40, { fill: 'green' } ) ]
    } );
    var radioSwitch = new ABSwitch( radioButtonProperty, false, radioLabelA, true,  radioLabelB );
    radioLabel.centerBottom = radioSwitch.centerTop.minusXY( 0, radioLabel.height );
    parent.addChild( radioSwitch );

    // a11y
    radioSwitch.tagName = 'fieldset';
    radioSwitch.groupFocusHighlight = true;
    radioSwitch.setAriaLabelledByNode( parent );
    parent.setAriaLabelContent( AccessiblePeer.LABEL_SIBLING );

    radioLabelA.tagName = 'input';
    radioLabelA.inputType = 'radio';
    radioLabelA.labelTagName = 'label';
    radioLabelA.labelContent = 'Circle';
    radioLabelA.containerTagName = 'div';
    radioLabelA.setAccessibleAttribute( 'name', 'radioButtonGroupMember' );
    radioLabelA.addAccessibleInputListener( {
      change: function( event ) {
        radioButtonProperty.set( false );
        radioLabelA.accessibleChecked = true;
      }
    } );
    radioLabelA.accessibleChecked = true;

    var accessibleCheckedListener = function( newValue ) {
      radioLabelA.accessibleChecked = !radioButtonProperty.get();
      radioLabelB.accessibleChecked = radioButtonProperty.get();
    };
    radioButtonProperty.link( accessibleCheckedListener );

    radioLabelB.tagName = 'input';
    radioLabelB.inputType = 'radio';
    radioLabelB.labelTagName = 'label';
    radioLabelB.labelContent = 'Square';
    radioLabelB.containerTagName = 'div';
    radioLabelB.setAccessibleAttribute( 'name', 'radioButtonGroupMember' );
    radioLabelB.addAccessibleInputListener( {
      change: function( event ) {
        radioButtonProperty.set( true );
        radioLabelB.accessibleChecked = true;
      }
    } );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        radioButtonProperty.reset();
        buttonProperty.reset();
        abswitchTestModel.reset();
      },
      right:  this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );

    // align in a vbox
    var box = new VBox( {
      children: [ buttonParentNode, checkboxParentNode, radioButtonParent ],
      spacing: 150,
      center: this.layoutBounds.center
    } );
    this.addChild( box );

    this.accessibleOrder = [ box, resetAllButton ];
  }

  abswitchTest.register( 'AbswitchTestScreenView', AbswitchTestScreenView );

  return inherit( ScreenView, AbswitchTestScreenView, {

    //TODO Called by the animation loop. Optional, so if your view has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle view animation here.
    }
  } );
} );