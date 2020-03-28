const data = ['A', 'B', 'C', 'D', 'E', 'F', 'D', 'H'];
const wrapper = document.querySelector('.wrapper');

const gridFragment = document.createDocumentFragment();

data.forEach(letter => {
  const div = document.createElement('div');
  div.textContent = letter;
  gridFragment.appendChild(div);
});

wrapper.appendChild(gridFragment);
