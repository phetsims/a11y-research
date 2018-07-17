

# How to Make a Sim Accessible

## Understand the Goal
  * Many years in the making
  * Fluid process, lot's changing (?)

## Understanding the Accessibility Tree??
Assitive technology accesses an Accessibility Tree (need link to a good article) in order to get accessibility 
information that it can pass along to users of the assitive technology. For web pages and web applications the 
Document Object Model (DOM) is what provides the Accessibility Tree with the information that users need.
## Understanding the PDOM
The traditional renderings of PhET sims (svg, canvas, webgl) hold very little semantic data as to what is inside the
rendered graphic. They are a single, graphical element in the html. The PDOM ( parallel DOM (document object model))
pulls semantic data from the `Scenery` scene graph and adds it to an separate html structure that is accessible to
assistive technologies. When we say PDOM, think an html manifestation of the graphical `Node` content in the phetsim.

This html acts as just another modality to the phet model. You can interact with it to control the simulation, and you
can get information out of it, as the PDOM is updated in real time in response to changes in the model.

## Overall Code structure
Note: a11y is a synonym for accessibility.

* `Accessibility.js` is a trait that is added to `Node.js`, so all we have to do is pass in a11y specific
options like normal into the `Parent.call()` or `mutate()` function calls.

* The DAG features of the a11y side of Scenery are handled parallel to `Node`s in Scenery. Each `Node` with the
`Accessibility` trait added to its prototype has N `AccessibleInstance`s based on the number of times it has been added
to the scene graph. The PDOM elements of each `Node` are created and handled with `AccessiblePeer`. There is a 1x1
relationship of `AccessibleInstance` and `AccessiblePeer`.

## Basic Example - adding a11y features to a `Node`
The primary way that developers will interact with a11y is through options passed through to `Node.js`. First off, each
`Node` that wants content in the PDOM will need an html element in the PDOM to represent it. To do this, use the
`tagName` option:
```js
var a11yNode = new Node( {
  tagName: 'p'
}
```
The above code snippet will create a node that is a `<p>` tag in the PDOM. To give content to this `<p>`, use the
`innerContent` option.

```js
a11yNode.innerContent = 'I am a p tag in the PDOM!';
```

Just like other Node options, you can pass them into an options object, `mutate` call, and by using getters/setters.
Now the PDOM will look like:
```html
<p>I am a p tag in the PDOM</p>
```


## Each Node can have more than one `HTMLElements` in the PDOM
  * `labelTagName`, `labelContent`
  * `containerTagName`
  * Terminology of PDOM elements (parent and siblings of the primary sibling)


## Keyboard Navigation

### Inputs
  * `inputType`, `inputValue`, `accessibleChecked`
### Focusability
  * `focusable: true` to make any interactive focusable with keyboard nav
  * `accessibleVisible`?

#### Setting you own focus highlight
  * `focusHighlight: {Node}`
  * `focusHighlightLayerable: true` (node must be in the scene graph and set visibility to false)

#### Group Focus
  * `groupFocusHighlight` TODO: this isn't set in stone yet I think)

### Input Listeners
  * `this.addAccessibleInputListener()`

## Descriptions

### Static Descriptions
  * Understand the goal. Anyone should be able to come to a phetsim and understand the basic structure?
  * [Working document](https://docs.google.com/document/d/1OOpxVDwYc49axUcU2A6T_SO2ppt0z4mNJTNC4jDHr-4/edit#)
  * When adding options to nodes, separate acessibility specific options in their own block, header them 
  with an `// a11y` comment
  * Understand [Accessible Name](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
  The short article above describes very simply and briefly the different ways an element gets an accessible name.
      * element's content: Example `<button>my button</button>`. The inner text within the button's opening and 
	  closing tags is the button element's accessible name.
      * `label` element: a `label` element can be associated with an interactive _input type_ (e.g., `input type="checkbox"`) 
	  that does not have inner content in order to provide the input with an accessible name. A `label` is preferred naming 
	  method when the sim interaction has visible text-based identifying it on screen. A `label` element can only be associated 
	  with _labelable elements_ like typical interactive HTML elements 
	  [http://w3c.github.io/html/sec-forms.html#labelable-element](http://w3c.github.io/html/sec-forms.html#labelable-element). 
	  It cannot, for example, be associated with a `div` with `role="checkbox"`. When a visible text-based label does not exist on screen, 
	  other labeling options can be considered. 
	  * `aria-label`: is an aria attribute that can provide an accessible name.
      * `aria-labelledby`: aria-labelledby can be used to associate an HTML element other than the label element to another element. 
	  The elements do not have to be right beside eachother. In a PhET Sim one might want to associate a heading element with a region or group. 
	  For example, an H2 heading is associated with the Play Area region through an `aria-labelledby` attribute. With this association 
	  the H2's content, "Play Area", provides the region with an accessible name in the _Accessibility Tree_ which is 
	  accessed by assistive technology.
	  * `describedby`????: a description that can be associated with another element to provide more context. 
	  It does not provide an element's accessible name??
  * This is where you are piecing together all of the individual nodes.
  * More complex options come up
    * `appendLabel`, `appendDescription`
    * `accessibleOrder`


### Interactive Alerts
  * Talk about `UtteranceQueue` (AriaHerald?)


## Handling a11y specific strings
  * Not YET translatable, but they will be, so please treat usages as similarly to strings of the `strings!` plugin as
  possible so that it is easier to transfer them over to translatable strings, think means:
    * Name a11y strings without `String` at the end of the key
    * declare all a11y strings at the top of the file (like their own module)
    * have `var`s that end in `String` when declaring strings
    * string keys should hold an object with a "`value`" key that stores the a11y string.
  * Create an `{{SIM}}A11yStrings.js` file.


## In Conclusion

Please discuss questions or problems with @jessegreenberg, @zepumph, or @mbarlow12 and update this document accordingly
to help those who follow in your footsteps!

### Resources for further understanding:
* [Screen Reader Support for a Complex Interactive Science Simulation](https://drive.google.com/file/d/0B44Uycdx6JGdRFpXcDJqZl9BUk0/view)
* [Description Strategies to Make an Interactive Science Simulation Accessible
](http://scholarworks.csun.edu/handle/10211.3/190214)


### Happy a11y development!
