/**
 * Generates the modal window with given data and callbacks
 * @param element
 * @param params
 * @param okButtonCallback
 * @param cancelButtonCallback
 */
function generateModal(element, params, okButtonCallback, cancelButtonCallback) {
    document.body.appendChild(element);

    let myPromptDialog = new bootstrap.Modal(document.getElementById(params.id), {backdrop: "static"});
    myPromptDialog.show();


    function okEvent(e) {
        if (e.target && e.target.id === "ss-button-prompt-ok") {

            let field = document.getElementById("ss-prompt-input-value");

            /* check if it drp date-range field */
            if (field.classList.contains("drp-range-control")) {
                let dates = field.value.split(" - ");
                okButtonCallback(dates);
            } else {
                okButtonCallback(field.value);
            }

            myPromptDialog.hide();
        }
    }

    function cancelEvent(e) {
        if (e.target && e.target.id === "ss-button-prompt-cancel") {
            if (cancelButtonCallback !== undefined) {
                cancelButtonCallback();
            }
            myPromptDialog.hide();
        }
    }


    document.addEventListener("click", okEvent);
    document.addEventListener("click", cancelEvent);

    document.getElementById(params.id).addEventListener("hidden.bs.modal", function () {
        document.removeEventListener("click", okEvent);
        document.removeEventListener("click", cancelEvent);

        let dom = document.getElementById(params.id);
        const modal = bootstrap.Modal.getInstance(dom);
        modal.dispose();

        document.getElementById("ss-modal-dialog-container").remove();
    })
}


class AlertDialog {

    constructor(params = {message: "", title: "", id: "", borderClass: "", closeButtonText: ""}, closeCallback) {

        params.id = params.id ?? "ss-dialog-box-modal";
        params.title = params.title ?? "Alert";
        params.message = params.message ?? "";
        params.borderClass = params.borderClass ?? "border-primary";
        params.closeButtonText = params.closeButtonText ?? "Close";
        params.titleTextColor = params.titleTextColor ?? "text-primary";


        let element = document.createElement("div");
        element.id = "ss-modal-dialog-container";

        element.innerHTML =
            `<div class="modal fade" id="${params.id}" tabindex="-1" aria-labelledby="" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" >` +
            `<div class="modal-dialog">` +
            `<div class="modal-content border ${params.borderClass}">` +
            `<div class="modal-header">` +
            `<p class="modal-title text-uppercase fw-bold ${params.titleTextColor}">${params.title}</p>` +
            `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>` +
            `</div>` +
            `<div class="modal-body">${params.message}</div>` +
            `<div class="modal-footer">` +
            `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${params.closeButtonText}</button>` +
            `</div>` +
            `</div>` +
            `</div>` +
            `</div>`;

        document.body.appendChild(element);

        let myAlertModal = new bootstrap.Modal(document.getElementById(params.id), {backdrop: true});
        myAlertModal.show();

        document.getElementById(params.id).addEventListener("hide.bs.modal", function () {
            document.getElementById("ss-modal-dialog-container").remove()
            if (closeCallback !== undefined) {
                closeCallback();
            }
        })
    }
}

class CustomPrompt {

    constructor(params = {message: "", title: "", id: "", fieldType: ""}, okButtonCallback, cancelButtonCallback) {

        params.id = params.id ?? "ss-prompt-box-modal";
        params.title = params.title ?? "Prompt";
        params.message = params.message ?? "";

        params.fieldType = params.fieldType ?? "text";

        let element = document.createElement("div");
        element.id = "ss-modal-dialog-container";

        /* types of fields */
        let inputField = "<input type='text' class='form-control' id='ss-prompt-input-value'>";

        if (params.fieldType === "textarea") inputField = "<textarea rows='5' class='form-control' id='ss-prompt-input-value'></textarea>";
        if (params.fieldType === "number") inputField = "<input type='number' class='form-control' id='ss-prompt-input-value'>";
        if (params.fieldType === "date") inputField = "<input type='date' class='form-control' id='ss-prompt-input-value'>";
        if (params.fieldType === "drp-date") inputField = "<input type='text' class='form-control drp-control' id='ss-prompt-input-value'>";
        if (params.fieldType === "drp-date-range") inputField = "<input type='text' class='form-control drp-range-control' id='ss-prompt-input-value'>";

        element.innerHTML =
            `<div class="modal fade" id="${params.id}" tabindex="-1" aria-labelledby="" aria-hidden="true">` +
            `<div class="modal-dialog">` +
            `<div class="modal-content">` +
            `<div class="modal-header">` +
            `<p class="modal-title text-uppercase fw-bold">${params.title}</p>` +
            `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>` +
            `</div>` +
            `<div class="modal-body">` +
            `${params.message}` +
            `${inputField}` +
            `</div>` +
            ` <div class="modal-footer">` +
            `<button type="button" class="btn btn-success" id="ss-button-prompt-ok">Ok</button>` +
            `<button type="button" class="btn btn-secondary" id="ss-button-prompt-cancel" data-bs-dismiss="modal">Cancel</button>` +
            `</div>` +
            `</div>` +
            `</div>` +
            `</div>`;

        generateModal(element, params, okButtonCallback, cancelButtonCallback);
    }
}


/**
 * Information dialog box
 * @param params
 * @param closeCallback
 */
export function infoDialog(params = {}, closeCallback) {

    params.title = params.title ?? "Information";

    new AlertDialog({
        message: params.message,
        title: params.title,
        borderClass: "border-primary",
        closeButtonText: "Ok",
        titleTextColor: "text-primary"
    }, closeCallback);
}

/**
 * Success dialog box
 * @param params
 * @param closeCallback
 */
export function successDialog(params = {}, closeCallback) {

    params.title = params.title ?? "Success";

    new AlertDialog({
        message: params.message,
        title: params.title,
        borderClass: "border-success",
        closeButtonText: "Ok",
        titleTextColor: "text-success"
    }, closeCallback);
}

/**
 * Error dialog box
 * @param params
 * @param closeCallback
 */
export function errorDialog(params = {}, closeCallback) {

    params.title = params.title ?? "Error";

    new AlertDialog({
        message: params.message,
        title: params.title,
        borderClass: "border-danger",
        closeButtonText: "Ok",
        titleTextColor: "text-danger"
    }, closeCallback);
}


/**
 * A single line input field
 * @param params
 * @param okCallback
 * @param cancelCallback
 */
export function textPrompt(params = {}, okCallback, cancelCallback) {

    new CustomPrompt({
        message: params.message,
        title: params.title,
        fieldType: "text"
    }, okCallback, cancelCallback);
}

/**
 * A multiline input field
 * @param params
 * @param okCallback
 * @param cancelCallback
 */
export function textAreaPrompt(params = {}, okCallback, cancelCallback) {
    new CustomPrompt({
        message: params.message,
        title: params.title,
        fieldType: "textarea",
    }, okCallback, cancelCallback);
}

/**
 * A date input field
 * @param params
 * @param okCallback
 * @param cancelCallback
 */
export function datePrompt(params = {}, okCallback, cancelCallback) {
    new CustomPrompt({
        message: params.message,
        title: params.title,
        fieldType: "date",
    }, okCallback, cancelCallback);
}

/**
 * A number input field
 * @param params
 * @param okCallback
 * @param cancelCallback
 */
export function numberPrompt(params = {}, okCallback, cancelCallback) {
    new CustomPrompt({
        message: params.message,
        title: params.title,
        fieldType: "number",
    }, okCallback, cancelCallback);
}


export function drpDatePrompt(params = {}, okCallback, cancelCallback) {

    new CustomPrompt({
        message: params.message,
        title: params.title,
        fieldType: "drp-date",
    }, okCallback, cancelCallback);

    let sDate = params.startDate ?? moment().format("YYYY-MM-DD");

    $(".drp-control").daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoApply: true,
        startDate: sDate,
        locale: {
            format: "YYYY-MM-DD"
        }
    });
}

export function drpDateRangePrompt(params = {}, okCallback, cancelCallback) {
    new CustomPrompt({
        message: params.message,
        title: params.title,
        fieldType: "drp-date-range",
    }, okCallback, cancelCallback);

    let sDate = params.startDate ?? moment().format("YYYY-MM-DD");
    let eDate = params.endDate ?? moment().format("YYYY-MM-DD");

    $(".drp-range-control").daterangepicker({
        showDropdowns: true,
        startDate: sDate,
        endDate: eDate,
        autoApply: true,
        locale: {
            format: "YYYY-MM-DD"
        }
    });
}