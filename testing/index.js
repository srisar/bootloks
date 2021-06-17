import {successDialog} from "../dist/bs-dialogs.min";

document.getElementById("btn").addEventListener("click", function () {

    successDialog({
        message: "hello world!",
        title: "Hi"
    })

});