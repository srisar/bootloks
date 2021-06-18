import {successDialog, errorDialog} from "../dist/bs-dialogs.min";


document.getElementById("btnSuccessDialog").addEventListener("click", () => {

    successDialog({
        message: "hello",
        title: "title..."
    })

});