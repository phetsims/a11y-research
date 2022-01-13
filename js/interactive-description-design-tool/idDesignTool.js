// Copyright 2021, University of Colorado Boulder


import NumberProperty from '../../../axon/js/NumberProperty.js';
import Range from '../../../dot/js/Range.js';
import PhraseBuilder from '../phrase-builder/src/PhraseBuilder.js';

const phraseBuilder = PhraseBuilder.create(
  document.getElementById( 'phrase-builder' ), {
    withParameterNaming: true
  }
);

// window.addEventListener( 'load', () => {
//   phraseBuilder.autoload();
// } );
// const descriptionNameInput = document.getElementById( 'descriptionName' );
// document.getElementById( 'save' ).addEventListener( 'click', () => {
//   phraseBuilder.save( descriptionNameInput.value );
// } );
// document.getElementById( 'load' ).addEventListener( 'click', () => {
//   phraseBuilder.load( descriptionNameInput.value );
// } );


const descriptionsElement = document.getElementById( 'descriptions' );
const descriptions = {};

phraseBuilder.descriptionSentenceCreatedEmitter.addListener( newDescription => {
  assert && assert( newDescription.name, 'description needs a name' );

  descriptions[ newDescription.name ] = newDescription;

  const descriptionPTag = document.createElement( 'p' );
  descriptionPTag.innerText = `${newDescription.name}: ${newDescription.variables.map( v => v.name )}`;
  descriptionsElement.appendChild( descriptionPTag );
} );

//////////////////////////////////////////////////////////

const propertiesElement = document.getElementById( 'properties' );
const properties = {};

document.getElementById( 'create-property' ).addEventListener( 'click', event => {
  const propertyName = document.getElementById( 'propertyName' ).value;

  if ( properties.hasOwnProperty( propertyName ) ) {
    console.log( 'we overwrite old Property values, good luck here!' );
  }

  const rangeString = document.getElementById( 'property-string-values' ).value;
  const matches = rangeString.match( /^(\d+)-(\d+)$/ );
  assert && assert( matches );
  const min = matches[ 1 ];
  const max = matches[ 2 ];

  const property = new NumberProperty( min, {
    range: new Range( min, max )
  } );
  property.descriptionName = propertyName;
  properties[ propertyName ] = property;

  const propertyPTag = document.createElement( 'p' );
  propertyPTag.innerText = `${propertyName}: ${Range.toString()}`;
  propertiesElement.appendChild( propertyPTag );
} );


/////////////////////////////////////////////


const elementsElement = document.getElementById( 'elements' );
const elements = {};

document.getElementById( 'create-element' ).addEventListener( 'click', event => {
  const elementName = document.getElementById( 'elementName' ).value;

  if ( elements.hasOwnProperty( elementName ) ) {
    console.log( 'we overwrite old Element values, good luck here!' );
  }

  const element = document.createElement( document.getElementById( 'elementTag' ) );
  element.type = 'range';
  element.id = elementName;

  const propertyName = document.getElementById( 'element-property-control' ).value.trim();
  // const descriptionName = document.getElementById( 'element-description-control' ).value.trim();


  const property = properties[ propertyName ];
  // const description = descriptions[ descriptionName ];

  assert && assert( property.range, 'range needed right now' );
  property.lazyLink( value => {
    // TODO: fill in this
  } );

  // TODO: make some sort of description happen.

  elements[ elementName ] = element;

  const elementContainer = document.createElement( 'div' );
  const elementLabel = document.createElement( 'label' );
  elementLabel.setAttribute( 'for', elementName );
  elementLabel.innerText = elementName;
  elementContainer.appendChild( elementLabel );
  elementContainer.appendChild( element );
  elementsElement.appendChild( elementContainer );
} );











