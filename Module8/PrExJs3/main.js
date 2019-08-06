const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const listLi = (elem) => {
  const element = document.createElement('li');
  element.textContent = elem;

  return element;
};

const list = document.querySelector('.list');
const listAll = elements.map(elem => listLi(elem));
list.append(...listAll);
