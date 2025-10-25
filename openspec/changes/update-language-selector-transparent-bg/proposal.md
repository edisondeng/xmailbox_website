## Why
The language selector button in the top-left corner currently has a gray background that may not match all design contexts. Users want the default background to be transparent for better visual integration, while maintaining the hover effect for usability.

## What Changes
- Update the language selector button default background from gray to transparent
- Keep hover background color for user feedback
- Maintain all existing functionality including dropdown menu and language switching

## Impact
- Affected specs: ui/language-selector
- Affected code: src/components/LanguageSwitcher.jsx