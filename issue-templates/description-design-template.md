This checklist will help track the big picture progress of the design and implementation of description and alternative input.

# A11y Features 
Check active features and add dates
- [ ] Keyboard Navigation -  (Started: ) (Completed: )
- [ ] Simple Description (Started: ) (Completed: )
- [ ] Full Description - (Started: ) (Completed: )
- [ ] Sonification - (Started: ) (Completed: )
- [ ] Mobile Accessibility - (Started: ) (Completed: )

# A11y Design
- [ ] Multimodal Sim/Description folders created in Sim folder and Sim A11y Design Main design doc created in Ddescription folder (Date: )
- [ ] Link to [Sim's A11y Design Main]()  

# A11y Design Prep
- [ ] Main Sim Design do reviewed for learning goals
- [ ] Teaching materials reviewed
- [ ] Reviewed model properties with Developer
- [ ] Identify any visual "Hollywooding" (i.e., places where visuals are not directly linked to model)

# Determine Structure of PDOM
- [ ] Identify dynamic objects that warrant their own name and description in the Play Area
- [ ] Identify all interactive objects and their PhET types
- [ ] Identify any new interaction types (i.e., new a11y types) in this sims, or check:
  - [ ] There are no new interaction types in this sim

# State Description Design
## Static Static State Descriptions
- [ ] Static part of screen summary ready
- [ ] Initial sim-specific interaction hint ready
- [ ] Headings for objects/groups in Play Area determined
- [ ] Labels for interactive elements ready
- [ ] Heading outline & Focus Order determined 
- [ ] Help text for interactive elements ready

## Dynamic State Descriptions
- [ ] Examples of dynamic screen summary (i.e., brief state-of-the-sim) ready
- [ ] Examples of dynamic states for identified dynamic objects
- [ ] All dynamic parameters (scales and ranges) for dynamic objects determined
- [ ] Special case phrasing for screen summary determined
- [ ] A brief cognitive walkthrough of main interaction documented (highly reccommended) 

### Object Responses
List necessary object details & provide links to design doc sections
  - [ ] Values determined for __OBJECT 1__ 
  - [ ] Values determined for __OBJECT 2__
  - [ ] List necessary details 

### Context Responses
**[Simple Context Responses - UI Options](link to section in design doc)**
  - [ ] Context responses for items in Control Area ready 

**[Complex Context Responses - By Interaction](link to design doc)**
  - [ ] Context responses for __OBJECT 1__ 
  - [ ] Context responses for __OBJECT 2__ 

# A11y Implementation
## State Descriptions
### Static State Descriptions (Screen Summary)
- [ ] H1 for sim title
- [ ] Sim Regions & H2 Headings (Play Area, Control Area, Sim Resources)
- [ ] Static part of screen summary
- [ ] Initial sim-specific interaction hint in
- [ ] Keyboard Shortcuts interaction hint is in screen summary 

### Static State Descriptions (Play Area)
- [ ] Sim-specific H3's for sim objects
- [ ] Labels for all interactive items
- [ ] Help text for interactive items

### Static Descriptions (Control Area) 
- [ ] Sim-specific H3s for Control Area (none for this sim)
- [ ] Labels for checkboxes
- [ ] Help text for checkboxes
- [ ] Reset All button

### Sim Resources (Sim Resources)
- [ ] Keyboard Shortcuts button added 

### Dynamic State Descriptions
- [ ] Dynamic state-of-the-sim description
  - [ ] List details if necessary
- [ ] __OBJECT 1 Named__ dynamic states
- [ ] __OBJECT 2 Named__ dynamic states
  - [ ] List details for __Named OBJECTSs__ if needed

## Responsive Descriptions
### Simple Context Responses - UI Options
Link to section in design doc
  - [ ] Checking/unchecking checkboxes
  - [ ] Reset All, verified

### Object Responses - Main Interacations
Link to sections in design doc
**[__OBJECT 1__](URL)
  - [ ] Details for __OBJECT 1__
**[__OBJECT 1__](URL)
  - [ ] Details for __OBJECT 2__

### Complex Context Responses - Main Interacations
Link to design doc
  - [ ] Object responses for __OBJECT 1__
  - [ ] Object responses for __OBJECT 2__

 
**Sphere position force alerts (ARIA live region)**
  - [x] Force information on position focus (position slider focus alert)
    - [x] @terracoda to verify with consultants that we need a force focus alert - removed focus alerts
  - [x] Force information as position changes (position/distance force alerts)
  - [x] Simplification to wording in alerts complete 
 
**Mass number pickers descriptions/alerts (aria-valuetext) - describes changes to mass or density of spheres**
  - [x] Mass value changes in aria-valuetext
  - [x] Mass changes: increasing mass of sphere 
  - [x] Mass changes: decreasing mass of sphere

**Mass number pickers force alerts (ARIA live region)**
  - [x] Force information on focus of mass (mass focus alert)
    - [x] @terracoda to verify with consultants that we need a force focus alert - removed focus alerts  
  - [x] Force information as mass changes (mass force alerts)
  - [x] Edge case 1 (position of same sphere changes as mass increases)
  - [x] Edge case 2 (position of other sphere changes as mass increases)
  - [x] Simplification to wording complete
  
**Mobile A11y**
- [ ] #119 - coming along nicely, but haven't yet closed issue
- [x] Discuss issue about about dynamic `aria-valuetext` with MK
   -  [x] Left/Right side of track - design solution - provide on start and special cases (see https://github.com/phetsims/gravity-force-lab-basics/issues/124#issuecomment-493950652)
   -  [X] Comparative Mass and Density descriptions - design solution moved comparative description to PDOM

**Other Features & Items (Keyboard Shortcuts, Sim Resources)**
- [x] Visual Keyboard Shortcuts Dialog
  - [X] #118 Remove Small steps for Mass & add Basic Action for checkboxes
- [x] Accessible content for Keyboard Shortcuts dialog added
- [x] Keyboard Shortcuts button added to Sim Resources
- [ ] Mute Sound toggle button added to Sim Resources (comes for free when sound is added to sim)

**Check Credits**
- [ ] Verify A11y team has been added
  - Team: add Emily B. Moore, Taliesin Smith
  - Software Development: add John Blanco, Michael Kauzmann
  - Sound Design: Ashton Morris after Graphics Arts

**Once Evaluation begins**
- [ ] Ensure interviews are recorded to this sim's interview spreadsheet


**During QA or just after publication**
- [x] Clean and polish up A11y design doc
- [x] List out main design challenges (if any and if necessary)
- [x] List out lessons learned from this sim, e.g. found focus issues for iOS
- [ ] Make a description design github issue template


**List of changes to Checklist (by date)**
