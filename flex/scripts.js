const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const wrapper = document.querySelector('.wrapper');

data.forEach(letter => {
  const div = document.createElement('div');
  div.textContent = letter;
  wrapper.appendChild(div);
});

const emptyDivs = 3 - data.length % 3;

for (let i = 0; i < emptyDivs; i++) {
  const div = document.createElement('div');
  div.textContent = '';
  div.classList.add('empty');
  wrapper.appendChild(div);
}

