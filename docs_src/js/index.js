import * as blk from "../../src/bootloks";

let output = document.getElementById("output");

document.getElementById("btnInfoDialog").addEventListener("click", () => {
    blk.infoDialog({
        message: "This is the message",
    });
});

document.getElementById("btnInfoDialogMore").addEventListener("click", () => {
    blk.infoDialog({
        message: "This is the message",
        title: "Custom title comes here 🚀"
    });
});

document.getElementById("btnInfoDialogCallback").addEventListener("click", () => {
    blk.infoDialog({
        message: "This is the message",
        title: "Custom title comes here 🚀"
    }, function () {
        alert("The dialog box was closed");
    });
});

document.getElementById("btnSuccessDialog").addEventListener("click", () => {

    blk.successDialog({
        message: "Task successfully completed. <br> <span class='fw-bold'>You can now relax.</span>",
        title: "🚀 All done sire"
    }, function () {
        alert("The dialog box was closed");
    });

});

document.getElementById("btnErrorDialog").addEventListener("click", () => {

    blk.errorDialog({
        message: "Task failed. I am sorry I have let you down.",
        title: "Oopsies... Can do nothin'"
    }, function () {
        alert("The dialog box was closed");
    });

});

document.getElementById("btnTextInputBasic").addEventListener("click", () => {

    blk.textPrompt({
        message: "Care to share your favorite color? Mine is <span class='text-danger'>red.</span>",
    }, function (data) {

        /* make sure to sanitize the input data*/
        let value = data.trim();
        if (value !== "") {
            output.innerText = "You have typed " + value + ". Are you sure that is a color?";
        }
    });

});

document.getElementById("btnTextInput").addEventListener("click", () => {

    blk.textPrompt({
        message: "What is your favorite color?",
        title: "Color please... ⛄"
    }, function (data) {

        /* make sure to sanitize the input data*/
        let value = data.trim();
        if (value !== "") {
            output.innerText = "You have typed " + value;
        }
    }, function () {
        output.innerText = "You cancelled the prompt 😢";
    });

});

document.getElementById("btnMultiTextInput").addEventListener("click", () => {

    blk.textAreaPrompt({
        message: "Can you write something in two lines?",
        title: "Haiku, Might it be?"
    }, function (data) {

        /* make sure to sanitize the input data*/
        let value = data.trim();
        if (value !== "") {
            output.innerHTML = value;
        }
    }, function () {
        output.innerText = "You cancelled the prompt 😢";
    });

});

document.getElementById("btnNumberInput").addEventListener("click", () => {

    blk.numberPrompt({
        message: "What is the meaning of life?",
        title: "Do you need a guide to galaxy?"
    }, function (data) {

        /* make sure to sanitize the input data*/
        let value = parseInt(data);
        if (!isNaN(value)) {
            if (value === 42) output.innerText = "Nice.";
            else output.innerText = "You certainly need a guide to the galaxy";
        }
    }, function () {
        output.innerText = "You cancelled the prompt 😢";
    });

});

document.getElementById("btnDateInput").addEventListener("click", () => {

    blk.datePrompt({
        message: "Choose a random date",
        title: "Date mystery"
    }, function (data) {
        output.innerText = data;
    }, function () {
        output.innerText = "You cancelled the prompt 😢";
    });

});

document.getElementById("btnDrpDateField").addEventListener("click", () => {

    blk.drpDatePrompt({message: "Choose a date"}, data => {
        let output = document.getElementById("drp-output")
        output.innerText = data;
    });

});

document.getElementById("btnDrpDateRangeField").addEventListener("click", () => {

    blk.drpDateRangePrompt({
            message: "Choose a date",
            startDate: "2020-05-10"
        },
        data => {
            let output = document.getElementById("drp-output")
            output.innerText = data;
        });

});