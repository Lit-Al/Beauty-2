const nameElements = document.querySelectorAll('.evaluations-name--referee');
const itemElements = document.querySelectorAll('.evaluations-item--referee');

for (let i = 0; i < nameElements.length; i++) {
  const nameHeight = nameElements[i].offsetHeight;
  itemElements[i].style.height = `${nameHeight}px`;
}