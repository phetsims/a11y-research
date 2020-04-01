// Copyright 2019-2020, University of Colorado Boulder

import TemplateVariable from './TemplateVariable.js';

// constants
const TEMPLATE_VAR_REGEX = /\{\{(\w*)}\}/;
const SAVING_KEY_PREFIX = 'phrase-builder-';
const AUTO = 'auto';

/**
 * This type is responsible for creating a sentence that transforms template vars into select boxes with specific
 * options based on that dynamic variable. It also makes sure that variables are not discarded between changes in the
 * input.
 *
 * Constraints: each template var string must be unique
 */
class PhraseBuilder {

  /**
   * @param {HTMLElement} input - the input element to monitor for sentence changes
   * @param {HTMLElement} varDiv - container for the variable uis
   * @param {HTMLElement} output - container for the output sentence
   */
  constructor( input, varDiv, output ) {
    this.vars = []; // {TemplateVariable[]}
    this.input = input;
    this.varUI = varDiv;
    this.outputSentence = output;

    input.addEventListener( 'input', () => {
      this.onInput( input.value );
    } );
  }

  /**
   * Update the output container
   * @param string
   * @private
   */
  updateOutputPhrase( string ) {
    this.outputSentence.innerHTML = '';

    let currentIndex = 0;
    this.vars.forEach( templateVar => {
      const toAppend = string.slice( currentIndex, templateVar.index );
      appendSpanText( this.outputSentence, toAppend );
      this.outputSentence.appendChild( templateVar.select );
      currentIndex = templateVar.index + templateVar.name.length + 4; // 4 for the curly braces `{{}}`
    } );

    appendSpanText( this.outputSentence, string.slice( currentIndex ) );
  }

  /**
   * update the ui controlling options for each variable
   * @private
   */
  updateVarUI() {
    this.varUI.innerHTML = '';
    this.vars.forEach( templateVar => {
      this.varUI.appendChild( templateVar.ui );
    } );
  }

  /**
   * On input change in the input sentence
   * @param string
   * @private
   */
  onInput( string ) {
    const newVars = [];
    findAll( TEMPLATE_VAR_REGEX, string ).forEach( variableOutput => {
      // For `ohhi{{fdsa}}` output looks like `["{{fdsa}}", "fdsa", index: 4, groups: undefined]`

      const variableName = variableOutput[ 1 ];

      let alreadyExists = false;

      // TODO: use lodash instead?
      this.vars.forEach( templateVar => {
        if ( templateVar.name === variableName ) {
          alreadyExists = true;
          newVars.push( templateVar );
        }
      } );

      // if it didn't already exist, then let's create a new one
      !alreadyExists && newVars.push( new TemplateVariable( variableName, variableOutput.index ) );
    } );
    this.vars = newVars;
    this.updateUI( string );

    // autosave on each new input
    this.save( AUTO );
  }

  /**
   * Update UI elements of the phrase builder
   * @param {string} inputValue - the value of the input text box
   */
  updateUI( inputValue ) {
    this.updateVarUI();
    this.updateOutputPhrase( inputValue );
  }

  /**
   * @private
   * @returns {Object}
   */
  serialize() {
    return {
      input: this.input.value,
      variables: this.vars.map( variable => variable.serialize() )
    };
  }

  /**
   * @public
   * Autoload whatever was most recently autosaved
   */
  autoload() {
    this.load( AUTO );
  }

  /**
   * @public
   * @param {string} name - the name of the phrase builder instance to load
   */
  load( name ) {
    const storedPhraseBuilder = window.localStorage.getItem( `${SAVING_KEY_PREFIX}${name}` );
    if ( storedPhraseBuilder ) {
      const serializedPhraseBuilder = JSON.parse( storedPhraseBuilder );
      this.input.value = serializedPhraseBuilder.input;
      this.vars = serializedPhraseBuilder.variables.map( variable => TemplateVariable.deserialize( variable ) );
      this.updateUI( this.input.value );
    }
  }

  /**
   * Save this phrase builder instance under the name provided
   * @param {string} name
   */
  save( name ) {
    window.localStorage.setItem( `${SAVING_KEY_PREFIX}${name}`, JSON.stringify( this.serialize() ) );
  }


  /**
   * Creator method
   * @param {HTMLElement} input - the input element to monitor for sentence changes
   * @param {HTMLElement} varDiv - container for the variable uis
   * @param {HTMLElement} output - container for the output sentence
   * @returns {PhraseBuilder}
   * @public
   */
  static create( input, varDiv, output ) {
    return new PhraseBuilder( input, varDiv, output );
  }
}

/**
 * Append a string as a span to a div
 * @param {HTMLElement} div
 * @param {string} string
 */
function appendSpanText( div, string ) {
  const p = document.createElement( 'span' );
  p.innerText = string;
  div.appendChild( p );
}

/**
 * Copied from https://stackoverflow.com/questions/6323417/how-do-i-retrieve-all-matches-for-a-regular-expression-in-javascript
 * @param {regex}regexPattern
 * @param {string} sourceString
 * @returns {Array.<Object>} - all the matches, each is an output of RegExp.exec (with index property too)
 */
function findAll( regexPattern, sourceString ) {
  const output = [];
  let match;

  // make sure the pattern has the global flag
  const regexPatternWithGlobal = RegExp( regexPattern, 'g' );
  while ( match = regexPatternWithGlobal.exec( sourceString ) ) { // eslint-disable-line no-cond-assign

    // get rid of the string copy
    delete match.input;

    // store the match data
    output.push( match );
  }
  return output;
}

export default PhraseBuilder;