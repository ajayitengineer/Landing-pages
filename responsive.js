let element = document.querySelector("i");
let overlay = document.querySelector("#overlay");

element.onclick = () => {
    overlay.style.display = "initial";
}

let close = document.querySelector("#close");
close.onclick = () => {
    overlay.style.display = "none";
}