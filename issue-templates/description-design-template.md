This issue helps tracks the big picture progress of the description design, description implementation, and implementation of alternative input. Sound and adaptive features are incorporated only at a high-level here, though could be added as we move forward and learn more.
 
# Inclusive Features 
**Checked features that are being worked on for this sim**
- [ ] Alternative Input -  (Started: ) (Completed: )
  - [ ] Mobile A11y included
- [ ] Full Description - (Started: ) (Completed: )
- [ ] Sonification - (Started: ) (Completed: )
  - [ ] Estimated date for incorporating sound into the main sim repo: ()
  - [ ] Created issue for sound incorporation
- [ ] Voicing (Started: ) (Completed: )

# Design Tasks
- [ ] Multimodal Features folder created in PhET Sim Design folder. Sub-folders (Desciption, Sound, Voicing) created as needed. A11y Design Main design doc created in Description sub-folder (Date: )
   - **Note** Folder/File naming convention: {{Sim}}: Mulitmodal Features/Description/{{Sim Name}} A11y Design Main
- [ ] Link to [Sim Interactive Description]()
- [ ] This is a multi-screen sim! (If so, you may need to add links for each screen)  

# Design Prep for Interactive Description Design
- [ ] Main Sim Design reviewed for learning goals
- [ ] Teaching materials reviewed
- [ ] Reviewed model properties with Responsible Developer or A11y Developer
- [ ] Identify visual enhancements that deviate from model (e.g. "hollywooding")

# Interactive Description

<details>
<summary>Interactive Description</summary>

## PDOM 
**Checked items have PDOM structures identified & determined**
- [ ] Dynamic objects that warrant their own name and description in the Play Area
- [ ] All interactive objects and their PhET types (e.g., sliders, buttons, etc.)
- [ ] New interaction types (i.e., new PDOM components or patterns) in this sims, or check:
  - [ ] There are no new interaction types in this sim

## [State Descriptions](url to section design doc)
**Checked items drafted & ready for implementation**
### Static State Descriptions
- [ ] Static screen summary
- [ ] Initial sim-specific interaction hint (place in own paragraph)
- [ ] Headings for objects/groups in Play Area
- [ ] Labels for interactive elements
- [ ] Heading outline & Focus Order 
- [ ] Help text for interactive elements 

### [Dynamic State Descriptions](url to section design doc)
**Checked items completed in design document**
- [ ] PDOM section of Design Doc contains 1 clear example of each dynamic description
- [ ] More examples and possible edge cases have been explored for:
    - [ ] Dynamic screen summary (i.e., brief state-of-the-sim)
    - [ ] Dynamic states for identified dynamic objects (can add list to this issue)
- [ ] Dynamic parameters (scales and approximate ranges) for dynamic objects ready
    - [ ] Special case parameters or phrases for dynamic state descriptions identified (can add list)

## Responsive Descriptions
**Checked items drafted & ready for implementation**
### [Object Responses](url to section design doc)
**[Qualitative Scales & Parameters](link to section in design doc)**
- Tables (or lists) outlining dynamic parameters (scales & ranges) for each sim concept created
  - [ ] Scale determined for __CONCEPT 1__ : __OBJECT 1__ 
  - [ ] Scale determined for __CONCEPT 2__ : __OBJECT 2__

### [Context Responses](url to section design doc)
**[Complex Context Responses - By Interaction](link to design doc)**
- List out different objects/concepts as needed
  - [ ] Context responses for __OBJECT 1__ 
  - [ ] Context responses for __OBJECT 2__ 

### [Simple Context Responses (Sim options)](url to section design doc)
**Checked items ready for implementation**
  - [ ] Context responses for items in Control Area
  - [ ] Common code responses (e.g., Reset All, Mute Sound) verified
  
## [Description Design Testing](url to section design doc)
- [ ] Brief cognitive walkthrough document's the sim's main interaction (highly reccommended) 
</details>


# Interactive Description - Implementation
**Checked items verified by designer**
## State Descriptions
### Static State Descriptions (Screen Summary)
- [ ] H1 for sim title
- [ ] Tab order correct
- [ ] Sim Regions & H2 Headings (Play Area, Control Area, Sim Resources)
- [ ] Static part of screen summary
- [ ] Initial sim-specific interaction hint provided in own paragraph
- [ ] Keyboard Shortcuts interaction hint (PART OF COMMON CODE) 

### Static State Descriptions (Play Area)
- [ ] Sim-specific H3's for sim objects (or none for this sim)
- [ ] Interactions are accessible (i.e., have accessible names, keyboard accessible)
- [ ] Help text for interactive objects

### Static Descriptions (Control Area) 
- [ ] Sim-specific H3s for Control Area (or none for this sim)
- [ ] Interactions are accessible (i.e., names, keyboard accessible)
- [ ] Help text for checkboxes
- [ ] Reset All button

### Sim Resources (Sim Resources)
- [ ] Keyboard Shortcuts dialog completed
    - [ ] Keyboard Shortcuts dialog accessible
	- [ ] Keyboard Shortcuts button added
- [ ] All Audio button (added when sound is added to main sim repo)

### Dynamic State Descriptions
**Add or remove details as needed**
**Dynamic Screen Summary**
- [ ] Phrases work with all parameters
- [ ] Capitalization verified
- [ ] Punctuation verified
- [ ] Edge cases verified

**Play Area Dynamic State Descriptions for Objects**
- [ ] Phrases work with all parameters
- [ ] Capitalization verified
- [ ] Punctuation verified
- [ ] Edge cases verified

## Responsive Descriptions
### Object Responses (often aria-valuetext)
**Name interactive objects and details as needed**
**Add or remove interactive object details as needed**
**OBJECT Response 1**
- [ ] Qualitative scales verified
- [ ] Quantitative scales verified
- [ ] Increases/decreases verified
- [ ] Steps verified
- [ ] Interaction shotcuts verified (e.g., Home/End keys when appropriate)

### Complex Context Responses (often aria-live regions)
**Name Context Responses and details as needed**

(e.g., GFLB: Responses described force changes specific to changing distance or changing mass; Molarity: Responses described changes to solution concentration specific to Solute Amount changes, Solution Volume changes, and Solute changes)

**Add or remove context details as needed**
**CONTEXT Response 1: OBJECT 1 Increase**
  - [ ] Shared name (between designer and developer) for the context

### Simple Context Responses (Sim options)
**List sim options to verify (e.g., checkboxes in Control Area)**
  - [ ] Checking/unchecking alerts, verified

# Other A11y ToDo's
**Maintain [Accessible Sims page](https://phet.colorado.edu/en/accessibility/prototypes)**
- [ ] Use website admin page (or create issue) to add sim to to A11y Sims page once there is a working prototype
- [ ] Update link to prototype from time to time
  - [ ] At Dev Testing
  - [ ] At RC Testing
  - [ ] At publication

**Accessory Materials**
- [ ] Create issue to update Teacher tips
- [ ] Create issue to create Sound feature videos
- [ ] Create issues to document new or improved design patterns

**Other Features & Items (e.g., Mobile A11y features?)**
- [ ] List items as needed

**Check Credits**
- [ ] Verified A11y team additions: (add names here)
- [ ] Ceate issue with verified a11y team member additions

**Once Evaluation begins**
- [ ] Ensure interviews are recorded to the sim's interview spreadsheet

**During QA or just after publication**
- [ ] Clean and polish up Interactive Description design doc
- [ ] List out main design challenges (if any and if necessary)
- [ ] List out lessons learned from this sim (e.g., found focus issues for iOS)
- [ ] Suggest improvements to THIS issue template

**Housekeeping notes (e.g., significant changes to Checklist (optional)**
