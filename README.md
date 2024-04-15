# Accessible Registration Form

Form is avaiable [here](https://kabachok-vpanike.github.io/accessible-registration-form/)

If you want to run it locally: `npm install && npm start`

## Why is it accessible:

### Main features:
 - **Easy key navigation**
   - use the Tab key to quickly navigate through the form
   - use the Enter key inside problems box — it will  take you to the field containing error
   - the Enter key on an inactive item will submit your form, in case of incorrect input, your focus will immediately move to the field with the current errors

- **Screen reader compatibility**
  - input fields are equipped with relevant input types 
  - provided `aria-describedby` tags for errors to make it clear what the field refers to
  - `aria-invalid` property is provided to understand if the information is entered correctly, 
  - `aria-label` property is provided for easier interaction
  - in case of an error, the tab name changes (the first information read by the screen reader)
  - correct architecture (nesting of tags) — for example, including inline errors in one div with the input field

### Other properties for accessibility:
 - **Adaptability**: the form is available in the same format for mobile devices
 - **Focus**: highlight field / button when in focus, enlarged input field focus area
 - **Predictability**:
   -  signup forms are usually in the middle of the screen, the user is ready for this
   -  the form reads from left to right, top to bottom
   -  button is a button (not a link)
   -  input fields are boxes, not a line (on which side to enter text?)
 -  **Errors**:
     - more natural vocabulary — problem, not an error
     - errors are highlighted not only in color but also with an indicator icon
     - no display of errors every time an invalid character is entered (kind of aggressive), only when submitting a form
