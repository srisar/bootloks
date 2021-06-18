# BS-DIALOG

A small library to create modal windows for notification and inputs using Bootstrap 5 modal. It automatically handles
DOM manipulation and provides callbacks for capturing user events.

## Dialogs

+ Success dialog
+ Error dialog

## Prompts

+ Text prompt
+ Multi-line text prompt
+ Date prompt
+ Number prompt

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