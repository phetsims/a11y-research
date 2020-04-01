// Copyright 2019-2020, University of Colorado Boulder

/**
 * A data structure to hold all info for a single templated variable. This includes the select box with options and ui
 * to update it, as well as name and index in the input sentence.
 */
class TemplateVariable {

  /**
   * @param {string} name
   * @param {number} index
   */
  constructor( name, index ) {

    // @public (read-only)
    this.name = name;
    this.index = index;

    // @private {string[]}
    this.options = [];

    // @public (read-only)
    this.select = document.createElement( 'select' );

    // TODO: rename this.ui to something else
    // @public (read-only)
    this.ui = document.createElement( 'div' );

    // @private
    this.optionAddingArea = document.createElement( 'textarea' );
    const submit = document.createElement( 'button' );
    submit.innerText = `Add options for "${this.name}", separated by a new line.`;
    submit.addEventListener( 'click', () => {
      this.options = [];
      this.optionAddingArea.value.split( '\n' ).forEach( option => this.addOption( option ) );
    } );

    this.ui.appendChild( this.optionAddingArea );
    this.ui.appendChild( submit );
  }

  /**
   * serialize into json
   * @public
   * @returns {Object}
   */
  serialize() {
    return {
      name: this.name,
      index: this.index,
      options: this.options,
      selectedOption: this.select.value
    };
  }

  /**
   * @public
   * @param {Object} serializedTemplateVar - see TemplateVariable.prototype.serialize()
   * @returns {TemplateVariable}
   */
  static deserialize( serializedTemplateVar ) {
    const variable = new TemplateVariable( serializedTemplateVar.name, serializedTemplateVar.index );
    serializedTemplateVar.options.forEach( option => {
      variable.addOption( option );
    } );
    variable.optionAddingArea.value = variable.options.join( '\n' );
    variable.updateSelectBox();
    variable.select.value = serializedTemplateVar.selectedOption;
    return variable;
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
    } );
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
}

export default TemplateVariable;