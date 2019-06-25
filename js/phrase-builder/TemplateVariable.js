// Copyright 2019, University of Colorado Boulder

( () => {

  /**
   * A data structure to hold all info for a single templated variable. This includes the select box with options and ui
   * to update it, as well as name and index in the input sentence.
   * @type {TemplateVariable}
   */
  window.TemplateVariable = class {
    constructor( name, index ) {

      // @public (read-only)
      this.name = name;
      this.index = index;

      // @private
      this.options = [];

      // @public (read-only)
      this.select = document.createElement( 'select' );
      this.ui = this.createVarUI();

    }

    /**
     * @private
     * Update the select box with current options
     */
    updateSelectBox() {
      this.select.innerHTML = '';
      this.options.forEach( optionName => {
        const option = document.createElement( 'option' );
        option.innerText = optionName;
        this.select.appendChild( option );
      } )
    }

    /**
     * Add a dynamic option to this templated var
     * @private
     * @param {number} optionName
     */
    addOption( optionName ) {
      this.options.push( optionName );
      this.updateSelectBox();
    }

    /**
     * Create the ui to add options to this templated var
     * @returns {HTMLElement}
     */
    createVarUI() {
      const div = document.createElement( 'div' );

      const area = document.createElement( 'textarea' );
      const submit = document.createElement( 'button' );
      submit.innerText = `Add options for "${this.name}", separated by a new line.`;
      submit.addEventListener( 'click', () => {
        this.options = [];
        area.value.split( '\n' ).forEach( option => { this.addOption( option )} );
      } );

      div.appendChild( area );
      div.appendChild( submit );
      return div;
    }
  }
} )();