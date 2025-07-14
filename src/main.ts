const button = document.getElementById('click-btn') as HTMLButtonElement;
const countDisplay = document.getElementById('click-count') as HTMLSpanElement;

let count = 0;

button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count.toString();
});
