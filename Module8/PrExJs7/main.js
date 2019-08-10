const ref = {
  root: document.querySelector('#root'),
};

const INIT = {
  SIZE: 30,
  STEP: 10,
};

const someColor = () => `#${Math.floor(Math.random() * 16777216).toString(16)}`;

(function createBoxes(num) {
  const container = document.createElement('div');
  new Array(num).fill('').map((el, index) => {
    const doc = document.createElement('div');
    doc.classList.add('box');
    doc.style.width = `${INIT.SIZE + index * INIT.STEP}px`;
    doc.style.height = `${INIT.SIZE + index * INIT.STEP}px`;
    doc.style.backgroundColor = someColor();
    doc.textContent = 'test';
    container.appendChild(doc);
  });
  ref.root.appendChild(container);
}(5));
