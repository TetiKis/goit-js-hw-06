const input = document.querySelector('#validation-input');
const attributeNumber = Number(input.getAttribute("data-length"));

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (input.value.length === attributeNumber) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

