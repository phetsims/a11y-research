// Copyright 2021, University of Colorado Boulder

import PhraseBuilder from './PhraseBuilder.js';

const phraseBuilder = PhraseBuilder.create(
  document.getElementById( 'container' )
);

window.addEventListener( 'load', () => {
  phraseBuilder.autoload();
} );
const descriptionNameInput = document.getElementById( 'descriptionName' );
document.getElementById( 'save' ).addEventListener( 'click', () => {
  phraseBuilder.save( descriptionNameInput.value );
} );
document.getElementById( 'load' ).addEventListener( 'click', () => {
  phraseBuilder.load( descriptionNameInput.value );
} );