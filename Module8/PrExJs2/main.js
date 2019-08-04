/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

const namesTechnology = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

const createlistItem = (section, arr) => {
  const list = document.createElement('ul');

  list.textContent = section;
  list.classList.add('list');

  const listLi = document.createElement('li');
  listLi.textContent = arr[0];
  listLi.classList.add('clsItem');

  const listLi2 = document.createElement('li');
  listLi2.textContent = arr[1];
  listLi2.classList.add('clsItem');

  const listLi3 = document.createElement('li');
  listLi3.textContent = arr[2];
  listLi3.classList.add('clsItem');

  const listLi4 = document.createElement('li');
  listLi4.textContent = arr[3];
  listLi4.classList.add('clsItem');

  const listLi5 = document.createElement('li');
  listLi5.textContent = arr[4];
  listLi5.classList.add('clsItem');

  list.appendChild(listLi);
  list.appendChild(listLi2);
  list.appendChild(listLi3);
  list.appendChild(listLi4);
  list.appendChild(listLi5);

  return list;
};

const item = createlistItem('', namesTechnology);
const list = document.querySelector('body');
list.appendChild(item);