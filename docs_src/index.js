import * as bsDialog from "../src/bs-dialogs";


document.getElementById("btnSuccessDialog").addEventListener("click", () => {

    bsDialog.successDialog({
        message: "hello",
        title: "title..."
    });

});