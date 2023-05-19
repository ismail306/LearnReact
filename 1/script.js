let number=0;
const button =document.querySelector("#button");
const display =document.querySelector("#display");

button.addEventListener("click",() => {
    number++;
    display.textContent = number;
});
