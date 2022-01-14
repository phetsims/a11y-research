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
    this.wireUpVariableUI();
  }

  /**
   * Create the UI that will be used to set options for this variable. Some elements are created in the constructor
   * because they are used by other places. HTML that is otherwise used for display is created, populated, and wired up
   * by this function.
   * @private
   */
  wireUpVariableUI() {
    this.optionAddingArea.addEventListener( 'input', () => {
      this.options = [];
      const inputOptions = this.optionAddingArea.value.split( '\n' );
      this.optionAddingArea.rows = Math.max( this.optionAddingArea.rows, inputOptions.length );
      this.setOptions( inputOptions.filter( option => option !== '' ) );
    } );

    this.optionAddingArea.id = `optionAddingArea-${name}`;
    const uiLabel = document.createElement( 'label' );
    uiLabel.innerHTML = `<strong>${this.name}:</strong>`;
    uiLabel.setAttribute( 'for', this.optionAddingArea.id );
    this.ui.appendChild( uiLabel );
    this.ui.appendChild( document.createElement( 'br' ) );
    this.ui.appendChild( this.optionAddingArea );
    this.ui.appendChild( document.createElement( 'br' ) );
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
    variable.setOptions( serializedTemplateVar.options );
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
   * Set all the options and repopulate the select box
   * @private
   * @param {string[]} optionName
   */
  setOptions( options ) {
    this.options = options.slice();
    this.updateSelectBox();
  }
}

export default TemplateVariable;