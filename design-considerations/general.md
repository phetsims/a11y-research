# Design Considerations

Starting this document to track design considerations that we may need to keep in mind as we learn more about the accessibility design features being created for simulations.

## About Mark Down
This is a document written in Markdowm, see [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) for help. Use any text editor (i.e., not a word processor) to edit this document. A text editor with syntax highlighting is a good idea (e.g., SublimeText, TextMate).

## About Design Considerations
In your consideratons, please indicate:
- an example
- that it is simulation specific
- that is very general, and/or
- if the design consideration is sim-specific, and could have general implications.

### Examples
- **Genereal design consideration** might be related to the common parts of a simulation, like the naming of common regions (Scene, Summary, Play Area, Control Panel, etc.), how we design the Keyboard Shortcuts dialog, or how we use interaction hints to scaffold users, etc.

- **Simulation specific considerations** are specific to a simulation and may or may not have general implications. For example, in _Balloons and Static Electricity_, the custom interaction of moving the balloon could warrant a stronger emphasis on checking out the Keyboard Shortcuts dialog. Where and how to cue the importance of a design feature or resource is specific to BASE in this case, but may influence how we cue custom interactions in general.

# General Design Considerations
## Cue for Keyboard Shortcuts dialog
- **General Consideration:** When a sim contains custom interactions should there be a stronger cue to check out the keyboard shortcuts dialog?
- **Sim Example:** Balloons and Static Electricity (BASE)
- **Sim Consideration:** Considering how beneficial the custom keyboard shortcuts, specifically the Jump Keys (JW, JS, JN, JC) are for non-visual users, should the cue in the Scene Summary be stronger?
- **Interview Data for BASE:** 
  - At least one user who had explored both BASE and another sim indicated that the information in the Keybaord Shortcuts dialog was more critical in BASE than in teh other sim (was Ohm's Law or Resistance in a Wire).
  - Most users who read about the shortcuts used them. Of this who used them, liked them, and some commented that they made the interactions faster.

### Design Suggestions
> If needed, checkout the Keyboard Shortcuts for this sim under Sim Resources.

- If needed, checkout the Keyboard Shortcuts under Sim Resources. This sim has custom shortcuts.
- If needed, checkout the Keyboard Shortcuts under Sim Resources. This sim has a custom interaction.

## Scene Summary Heading & Region
- **General Consideration:** Do we the Scene Summary heading and region? Would it be fine to just open teh simulation with the scene summary information wihout the Scene Sumamry heading and without the region that contains it?
- **Considerations:** The inforamtion in the Scene Summary is essentail for setting up productive explorations and sim use for non-visual users. This is not under debate. The question is, can this essentail content live happily directly under the H1 that contains the name of the simualtion being described? 
- **Implications:** The `<section>` element (i.e., a region) must have a heading, so without a hading the Scene Summary section element would need to be removed from all sims.
- **Interview Data:** One non-visual user in their first exploration indicated that it was strange to go directly from an H1 to an H2. Many users have indicated that heading structire is very useful for their exploration, and somethign that they look for when visiting a site or application for the first time.

# Sim-specific Design Considerations

## Cue for Grabbing Balloon
- **Sim Example:** Balloons and Static Electricity (BASE)
- **Considerations:** Considering improvements to overall description design and specifically improvements to way that the ARIA role `application` is now handled by browsers, does the balloon interaction need two cues?

In BASE, the general cue at the end of the Scenee Summary is
> Grab balloon to play.

A second more spcific cue coe directly after teh Grab balloon button at the end of teh Balloon's dynamic description.
> Look for grab button to play.

- **Interview Data:** In general, these cues have not gotten in the way, and have likely cued prodictive explorations. In one recent interaview, however, a user tried to interact with the "Grab balloon to play" interaction cue as if it were a button. tThey user had no indication that it was a button, but tried a butto interaction (Space or Enter key) just to test if perhaps the text was interactive. When this same user got to the Grab balloon button, their comment was, "oh, there is a grab button."

### Design Suggestion
- Replace the general Scene Summary interaction cue with the more specific, "Look for grab button to play." Or more spcifically, "Look for grab balloon button to play." With this more specific interaction cue in the Scene Sumary, a cue at the object level should be unecessary. 
- The single cue at the end of the Scene Summary has been adopted for other simulations (e.g., Ohm's Law, Resistance in a Wire). This pattern seems to be more general.
- Some interactions, especially custom ones like the balloon interaction, may need extra guidance. If so, the two cues are working nicely together in BASE. If a sinlge cue works, it would be nice to reduce the content in the dynamic description of both balloons. The specific cue does show up for each balloon when both balloons ar active.


  