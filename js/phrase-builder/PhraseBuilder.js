// Copyright 2019, University of Colorado Boulder

( () => {

  // constants
  const TEMPLATE_VAR_REGEX = /\{\{(\w*)}\}/;

  /**
   * This type is responsible for creating a sentence that transforms template vars into select boxes with specific
   * options based on that dynamic variable. It also makes sure that variables are not discarded between changes in the
   * input.
   * @type {PhraseBuilder}
   */
  window.PhraseBuilder = class {

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
    };

    /**
     * update the ui controlling options for each variable
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
     */
    onInput( string ) {
      const newVars = [];
      findAll( TEMPLATE_VAR_REGEX, string ).forEach( variableOutput => {
        const variableName = variableOutput[ 1 ];

        let alreadyExists = false;
        this.vars.forEach( templateVar => {
          if ( templateVar.name === variableName ) {
            alreadyExists = true;
            newVars.push( templateVar );
          }
        } );

        // if it didn't already exist, then let's create a new one
        if ( !alreadyExists ) {

          // For `ohhi{{fdsa}}` output looks like `["{{fdsa}}", "fdsa", index: 4, groups: undefined]`
          newVars.push( new window.TemplateVariable( variableName, variableOutput.index ) );

        }
      } );
      this.vars = newVars;
      this.updateVarUI();
      this.updateOutputPhrase( string );
    }

    /**
     * Creator method
     * @param {HTMLElement} input - the input element to monitor for sentence changes
     * @param {HTMLElement} varDiv - container for the variable uis
     * @param {HTMLElement} output - container for the output sentence
     * @returns {PhraseBuilder}
     */
    static create( input, varDiv, output ) {
      return new window.PhraseBuilder( input, varDiv, output );
    }
  };

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
    let output = [];
    let match;

    // make sure the pattern has the global flag
    let regexPatternWithGlobal = RegExp( regexPattern, "g" );
    while ( match = regexPatternWithGlobal.exec( sourceString ) ) {

      // get rid of the string copy
      delete match.input;

      // store the match data
      output.push( match )
    }
    return output
  }

} )();