let hiddenMessage;

function init() {
    document.getElementsByClassName("svg")[0].addEventListener("click", revealText);
    hiddenMessage = document.getElementsByClassName("hiddenMessage")[0];
    hiddenMessage.style.display = "none";
};
window.addEventListener("load", init);

function revealText() {
    if (hiddenMessage.style.display === "none") {
        hiddenMessage.style.display = "block";
    } else {
        hiddenMessage.style.display = "none";
    }
};
