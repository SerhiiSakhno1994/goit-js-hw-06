const changeInput = document.querySelector('#name-input');
const changeSpan = document.querySelector('#name-output')

changeInput.addEventListener('input', hendleInputChange)

function hendleInputChange(event) {

  changeSpan.textContent = event.currentTarget.value; 
};