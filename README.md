# Bootloks

A small library to create modal windows for notification and inputs using Bootstrap 5 modal. It automatically handles
DOM manipulation and provides callbacks for capturing user events.

**NOTE: This library uses Bootstrap 5's modal windows, which doesn't require jQuery, but Bootstrap's js file must be
loaded before loading bs-dialog.**

demo site is available here https://srisar.github.io/bs-dialog

## Dialogs

+ Information dialog (bootstrap primary color)
+ Success dialog (bootstrap success color)
+ Error dialog (bootstrap danger color)

## Prompts

+ Text prompt
+ Multi-line text prompt
+ Date prompt
+ Number prompt

## How to use

bs-dialogs can be imported using ES6 import syntax

```javascript
import {successDialog, errorDialog} from "bs-dialog";

/* or import everything at once */
import * as bsDialog from "bs-dialog";
```

## Examples of alert dialog boxes

To show success dialog

```javascript

/* without title, it defaults to 'Success' */
successDialog({
    message: "The message to be displayed",
});

successDialog({
    message: "The message to be displayed",
    title: "Title of the dialog box"
});

/* 
 * You can also attach close callback, which will be triggered
 * when the dialog box is closed 
 * */

successDialog({
    message: "The message to be displayed",
    title: "Title of the dialog box"
}, function () {
    console.log("I am closed");
});

```

Error dialog is exactly as same as success dialog, except, success dialog is drawn in green color, and error dialog box
is drawn in red.

This green and red colors come from Bootstrap's own 'success' and 'danger' color properties. If you have overridden
those colors, it will be reflected here as well.

## Examples of prompt dialog boxes

Prompt dialog boxes have ok callback and cancel callback. They are triggered when Ok or Cancel button is clicked. Ok
callback takes data parameter which will have the value entered by the user. Data input are not validated or sanitized
in any way.

### To show text input prompt dialog

```javascript

textPrompt({
    message: "What is your name?"
}, function (data) {
    // ok callback
    console.log(data); // data is the value entered by the user
}, function () {
    // cancel callback
});


/* cancel callbacks are not required always */
textPrompt({
    message: "What is your name?",
    title: "Name please..."
}, function (data) {
    // ok callback
});


```

### To show other input fields

```javascript

/* multi-line text input */
textAreaPrompt({
    message: "What is your address?",
    title: "Address"
}, function (data) {
    // ok callback
});

/* date input */
datePrompt({
    message: "When is your birthday?",
    title: "Date of birth"
}, function (data) {
    // ok callback
});

/* number input */
numberPrompt({
    message: "What is the meaning of life?",
    title: "Supreme question"
}, function (data) {

    if (data === "42") {
        console.log("You are absolutely right!");
    } else {
        console.log("You may need a hitchhiker's guide, after all");
    }

});


```