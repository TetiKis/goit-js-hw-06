let counterValue = 0;

const value = document.querySelector("#value");
const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");



const valueRemove = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const valueAdd = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrement.addEventListener("click", valueRemove);
increment.addEventListener("click", valueAdd);