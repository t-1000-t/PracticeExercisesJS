
const namesAnimals = ['Кот', 'Хомяк', 'Лошадь', 'Попугай'];

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

  list.appendChild(listLi);
  list.appendChild(listLi2);
  list.appendChild(listLi3);
  list.appendChild(listLi4);

  return list;
};

const item = createlistItem('Животные', namesAnimals);
const list = document.querySelector('body');
list.appendChild(item);
/* End 1 */
const namesVegetables = ['Хлеб', 'Творог', 'Зелень'];

const createlistItem2 = (section, arr) => {
  const list2 = document.createElement('ul');

  list2.textContent = section;
  list2.classList.add('list');

  const listLi = document.createElement('li');
  listLi.textContent = arr[0];
  listLi.classList.add('clsItem');

  const listLi2 = document.createElement('li');
  listLi2.textContent = arr[1];
  listLi2.classList.add('clsItem');

  const listLi3 = document.createElement('li');
  listLi3.textContent = arr[2];
  listLi3.classList.add('clsItem');

  list2.appendChild(listLi);
  list2.appendChild(listLi2);
  list2.appendChild(listLi3);

  return list2;
};

const item2 = createlistItem2('Продукты', namesVegetables);
const list2 = document.querySelector('body');
list.appendChild(item2);
/* End 2 */
const namesTechnologies = ['html', 'css', 'js', 'react', 'node'];

const createlistItem3 = (section, arr) => {
  const list3 = document.createElement('ul');

  list3.textContent = section;
  list3.classList.add('list');

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

  list3.appendChild(listLi);
  list3.appendChild(listLi2);
  list3.appendChild(listLi3);
  list3.appendChild(listLi4);
  list3.appendChild(listLi5);

  return list3;
};

const item3 = createlistItem3('Технологии', namesTechnologies);
const list3 = document.querySelector('body');
list3.appendChild(item3);
/* End 3 */
