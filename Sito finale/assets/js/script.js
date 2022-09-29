console.log('prova');

const btn = document.querySelector(".btn-open-menu");
const body = document.querySelector("body");
btn.addEventListener("click", () => {
    body.classList.toggle("open-menu");
});