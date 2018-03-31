

# How to Make a Sim Accessible

## Overall Code structure

* `Accessibility.js` is a mixin that is added to Node.js, so all we have to do is pass in a11y specific
options like normal into the `Parent.call()` or `mutate()` function calls.
* `_domElement` is the main 'node' if you will for the parallel DOM. It get assigned listeners similar to items in the 
 scene graph and can be updated by the sim.

## Keyboard Navigation

+ Decide what members of the sim need to be tab navigable, for each do the following
  * Choose an html element that fits.
  * Add accessible content:
    + extending options in the type's constructor. This is a list of options, for more see `Accessibility.js`:
      * `tagName`: Sets the tag name for the DOM element representing this node in the parallel DOM
      * `inputType`: Sets the input type for the representative DOM element, only relevant if tagname is 'input'
      * `inputValue`: Sets the input value for the representative DOM element, only relevant if tagname is 'input'
      * `containerTagName`: Sets the tag name for an element that contains this node's DOM element and its peers
      * `labelTagName`: Sets the tag name for the DOM element labelling this node, usually a paragraph
      * `descriptionTagName`: Sets the tag name for the DOM element describing this node, usually a paragraph
      * `focusHighlight`: Sets the focus highlight for the node, see `setFocusHighlight()`
      * `labelContent`: Set the label content for the node, see `setLabelContent()`
      * `descriptionContent`: Set the description content for the node, see `setDescriptionContent()`
      * `accessibleVisible`: Sets whether or not the node's DOM element is visible in the parallel DOM
      * `focusable`: Sets whether or not the node can receive keyboard focus
      * `useAriaLabel`: Sets whether or not the label will use the 'aria-label' attribute, see `setUseAriaLabel()`
      * `ariaRole`: Sets the ARIA role for the DOM element, see `setAriaRole()` for documentation
      * `ariaDescribedByElement`: Sets a description relationship for this node's DOM element by id, see `setAriaDescribedByElement()`
      * `ariaLabelledByElement`: Sets a label relationship with another element in the DOM by id, see `setAriaLabelledByElement()`
      * `prependLabels`: Sets whether we want to prepend labels above the node's HTML element, see `setPrependLabels()` 
    + Add the listeners for the keyboard that are already set up for the mouse.
        * `this.addAccessibleInputListener( { [event]: function(){}});` 
        * This [event] should reflect the event from the `tagName` html element that was passed in the options.
  * Use `this.accessibleOrder = []` to set the ordering of tab navigation. The first element in the array
  is prioritized first and all elements that are not included in the array are appended last.
