

# How to Make a Sim Accessible

## Understand the Goal
  * Many years in the making
  * Fluid process, lot's changing (?)

## Understanding the pDOM
The traditional renderings of PhET sims (svg, canvas, webgl) hold very little semantic data as to what is inside the
rendered graphic. They are a single, graphical element in the html. The pDOM ( parallel DOM (document object model))
pulls semantic data from the `Scenery` scene graph and adds it to an separate html structure that is accessible to
assistive technologies. When we say pDOM, think an html manifestation of the graphical `Node` content in the phetsim.

This html acts as just another modality to the phet model. You can interact with it to control the simulation, and you
can get information out of it, as the pDOM is updated in real time in response to changes in the model.

## Overall Code structure
Note: a11y is a synonym for accessibility.

* `Accessibility.js` is a trait that is added to `Node.js`, so all we have to do is pass in a11y specific
options like normal into the `Parent.call()` or `mutate()` function calls.

* The DAG features of the a11y side of Scenery are handled parallel to `Node`s in Scenery. Each `Node` with the
`Accessibility` trait added to its prototype has N `AccessibleInstance`s based on the number of times it has been added
to the scene graph. The pDOM elements of each `Node` are created and handled with `AccessiblePeer`. There is a 1x1
relationship of `AccessibleInstance` and `AccessiblePeer`.

## Basic Example - adding a11y features to a `Node`
The primary way that developers will interact with a11y is through options passed through to `Node.js`. First off, each
`Node` that wants content in the pDOM will need an html element in the pDOM to represent it. To do this, use the
`tagName` option:
```js
var a11yNode = new Node( {
  tagName: 'p'
}
```
The above code snippet will create a node that is a `<p>` tag in the pDOM. To give content to this `<p>`, use the
`innerContent` option.

```js
a11yNode.innerContent = 'I am a p tag in the pDOM!';
```

Just like other Node options, you can pass them into an options object, `mutate` call, and by using getters/setters.
Now the pDOM will look like:
```html
<p>I am a p tag in the pDOM</p>
```


## Each Node can have more than one `HTMLElements` in the pDOM
  * `labelTagName`, `labelContent`
  * `containerTagName`
  * Terminology of pDOM elements (parent and siblings of the primary sibling)


## Keyboard Navigation

### Inputs
  * `inputType`, `inputValue`, `accessibleChecked`
### Focusability
  * `focusable: true` to make any interactive focusable with keyboard nav
  * `accessibleVisible`, `accessibleContentDisplayed`?

#### Setting you own focus highlight
  * `focusHighlight: {Node}`
  * `focusHighlightLayerable: true` (node must be in the scene graph and set visibility to false)

#### Group Focus
  * `groupFocusHighlight` TODO: this isn't set in stone yet I think)

### Input Listeners
  * `this.addAccessibleInputListener()`

## Descriptions

### Static Descriptions
  * understand the goal. Anyone should be able to come to a phetsim and understand the basic structure?
  * [Working document](https://docs.google.com/document/d/1OOpxVDwYc49axUcU2A6T_SO2ppt0z4mNJTNC4jDHr-4/edit#)
  * understand [Accessible Name](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
      * `ariaLabel`
      * `aria-labelledby`/`describedby`????
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
