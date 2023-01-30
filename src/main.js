import { nanoid } from 'nanoid'
import copy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const rangeInput = document.getElementById('length-range');
const numberRange = document.getElementById('length')


// passwordBtnEl.addEventListener('click', () => {
//   const randomPassword = nanoid();
//   displayPasswordEl.innerHTML = randomPassword;
// });

rangeInput.addEventListener("input", function() {
  // const randomPass = nanoid()
  displayPasswordEl.innerHTML = nanoid(this.value);
  numberRange.value = this.value;
  // console.log(this.value);
});

displayPasswordEl.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});
