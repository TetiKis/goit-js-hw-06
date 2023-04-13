const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", inputChange);

function inputChange(event) {
    console.log(event.currentTarget.value);
    outputName.textContent = event.currentTarget.value;
    if (event.target.value === '') {
		outputName.textContent = 'Anonymous'
    };
}