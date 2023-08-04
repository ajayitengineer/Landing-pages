let element = document.querySelector("i");
let overlay = document.querySelector("#overlay");

element.onclick = () => {
    element.style.display = "hidden";
    overlay.style.display = "initial";

}

let close = document.querySelector("#close-button");
close.onclick = () => {
    overlay.style.display = "none";
    element.style.display = "initial";


}