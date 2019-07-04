This issue helps tracks the big picture progress of the description design and description implementation, implementation of alternative input. Sound and adaptive features are incorporated only at a high-level here.

# A11y Features 
Checked features are being worked on for this sim
- [ ] Keyboard Navigation -  (Started: ) (Completed: )
- [ ] Simple Description (Started: ) (Completed: )
- [ ] Full Description - (Started: ) (Completed: )
- [ ] Sonification - (Started: ) (Completed: )
- [ ] Mobile Accessibility - (Started: ) (Completed: )

# A11y Design
- [ ] Multimodal Features folder created in PhET Sim Design folder. Sub-folders (Desciption and Sound) created as needed. A11y Design Main design doc created in Description sub-folder (Date: )
   - **Note** Folder/File naming convention: {{Sim}}: Mulitmodal Features/Description/{{Sim Name}} A11y Design Main
- [ ] Link to [Sim A11y Design Main]()
- [ ] This is a multi-screen sim! (If so, you may need to add links for each screen)  

# A11y Design Prep
- [ ] Main Sim Design reviewed for learning goals
- [ ] Teaching materials reviewed
- [ ] Reviewed model properties with Main Developer or A11y Developer
- [ ] Identify visual enhancements that deviate from model (e.g. "hollywooding")

# Determine Structure of PDOM
- [ ] Identified dynamic objects that warrant their own name and description in the Play Area
- [ ] Identified all interactive objects and their PhET types (e.g., sliders, buttons, etc.)
- [ ] Identified new interaction types (i.e., new a11y types) in this sims, or check:
  - [ ] There are no new interaction types in this sim

# State Descriptions
## Drafted & ready for implementation
### Static State Descriptions
- [ ] Static screen summary ready
- [ ] Initial sim-specific interaction hint ready
- [ ] Headings for objects/groups in Play Area determined
- [ ] Labels for interactive elements ready
- [ ] Heading outline & Focus Order determined 
- [ ] Help text for interactive elements ready 

### Dynamic State Descriptions
- [ ] PDOM section of Design Doc contains 1 example of each dynamic description
- [ ] Examples for any edges cases are linked to for:
    - [ ] Dynamic screen summary (i.e., brief state-of-the-sim)
	- [ ] Dynamic states for identified dynamic objects (can add list to this issue)
- [ ] Dynamic parameters (scales and ranges) for dynamic objects ready
    - [ ] Special case parameters or phrases identified (dynamic screen summary, dynamic states)

# State Descriptions
## Drafted & ready for implementation 
### Object Responses
**[Parameters, Scales & Ranges](link to section in design doc)**
- Tables (or lists) outlining dynamic parameters (scales & ranges) for each sim concept created
  - [ ] Scale determined for __CONCEPT 1__ : __OBJECT 1__ 
  - [ ] Scale determined for __CONCEPT 2__ : __OBJECT 2__

### Complex Context Responses
**[Complex Context Responses - By Interaction](link to design doc)**
- List out different objects/concepts as needed
  - [ ] Context responses for __OBJECT 1__ 
  - [ ] Context responses for __OBJECT 2__ 

### Simple Context Responses (Sim options)
**[Simple Context Responses - Sim Options](link to section in design doc)**
  - [ ] Context responses for items in Control Area ready
  
## Description Design Testing
**[Sample Interaction](link to design doc)**
- [ ] Brief cognitive walkthrough document's of sim's main interaction (highly reccommended) 

# A11y Implementation
## State Descriptions
### Static State Descriptions (Screen Summary)
- [ ] H1 for sim title
- [ ] Sim Regions & H2 Headings (Play Area, Control Area, Sim Resources)
- [ ] Static part of screen summary
- [ ] Initial sim-specific interaction hint provided in own paragraph
- [ ] Keyboard Shortcuts interaction hint (PART OF COMMON CODE) 

### Static State Descriptions (Play Area)
- [ ] Sim-specific H3's for sim objects (or none for this sim)
- [ ] Interactions are accessible (i.e., names, keyboard accessible)
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
- [ ] Mute Sound button (added when sound is added to main sim repo)

### Dynamic State Descriptions
**Add or remove details as needed**
**Dynamic Screen Summary**
- [ ] Phrases work with all parameters
- [ ] Capitalization verified
- [ ] Punctuation verified
- [ ] Edge cases verified

**Play Area Object Descriptions**
- [ ] Phrases work with all parameters
- [ ] Capitalization verified
- [ ] Punctuation verified
- [ ] Edge cases verified

## Responsive Descriptions
### Object Responses (often aria-valuetext)
**Name Objects and details as needed**
**Add or remove object details as needed**
**OBJECT Response 1**
- [ ] Values and ranges verified
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
**Other Features & Items (e.g., Mobile A11y features?)**

**Check Credits**
- [ ] Verify A11y team has been added

**Once Evaluation begins**
- [ ] Ensure interviews are recorded to this sim's interview spreadsheet

**During QA or just after publication**
- [ ] Clean and polish up A11y design doc
- [ ] List out main design challenges (if any and if necessary)
- [ ] List out lessons learned from this sim (e.g., found focus issues for iOS)
- [ ] Suggest improvements to THIS issue template


**List of significant changes to Checklist (by date)**
