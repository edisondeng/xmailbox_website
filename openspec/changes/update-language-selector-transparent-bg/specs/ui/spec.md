## ADDED Requirements
### Requirement: Language Selector Transparent Background
The language selector button SHALL have a transparent background by default to better integrate with various page designs.

#### Scenario: Default transparent background
- **WHEN** the page loads and the language selector is displayed
- **THEN** the button background SHALL be transparent
- **AND** the button SHALL maintain its text and icon visibility

#### Scenario: Hover state provides feedback
- **WHEN** the user hovers over the language selector button
- **THEN** the background SHALL change to gray to provide visual feedback
- **AND** the transition SHALL be smooth

#### Scenario: Accessibility maintained
- **WHEN** users interact with the language selector
- **THEN** all existing functionality SHALL work as before
- **AND** the button SHALL remain accessible and usable
- **AND** the dropdown menu SHALL continue to function properly