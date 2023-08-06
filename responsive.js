let element = document.querySelector("i");
let overlay = document.querySelector("#overlay");
let nav = document.querySelector("#big-outer-circle");

element.onclick = () => {
    element.style.display = "none";
    overlay.style.display = "initial";
    nav.style.display = "none";

}

let close = document.querySelector("#close-button");
close.onclick = () => {
    overlay.style.display = "none";
    element.style.display = "initial";
    nav.style.display = "initial";



}