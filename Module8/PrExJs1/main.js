const namesAnimals = ['Кот', 'Хомяк', 'Лошадь', 'Попугай'];

const createlistItem = (arr) => {
  const list = document.createElement('ul');

  const listLi = document.createElement('li');
  listLi.textContent = arr[0];

  const listLi1 = document.createElement('li');
  listLi1.textContent = arr[1];

  const listLi2 = document.createElement('li');
  listLi2.textContent = arr[2];

  const listLi3 = document.createElement('li');
  listLi3.textContent = arr[3];

  list.appendChild(listLi);
  list.appendChild(listLi1);
  list.appendChild(listLi2);
  list.appendChild(listLi3);

  return list;
};

const item = createlistItem(namesAnimals);
const list = document.querySelector('.clsItem');
list.appendChild(item);
/* 1 */

const namesVegetables = ['Хлеб', 'Творог', 'Зелень'];

const createlistItem1 = (arr) => {
  const list1 = document.createElement('ul');

  const listLi = document.createElement('li');
  listLi.textContent = arr[0];

  const listLi1 = document.createElement('li');
  listLi1.textContent = arr[1];

  const listLi2 = document.createElement('li');
  listLi2.textContent = arr[2];


  list1.appendChild(listLi);
  list1.appendChild(listLi1);
  list1.appendChild(listLi2);


  return list1;
};

const item1 = createlistItem1(namesVegetables);
const list1 = document.querySelector('.clsItem1');
list1.appendChild(item1);
/* 2 */

const namesTechnologies = ['html', 'css', 'js', 'react', 'node'];

const createlistItem2 = (arr) => {
  const list2 = document.createElement('ul');

  const listLi = document.createElement('li');
  listLi.textContent = arr[0];

  const listLi1 = document.createElement('li');
  listLi1.textContent = arr[1];

  const listLi2 = document.createElement('li');
  listLi2.textContent = arr[2];

  const listLi3 = document.createElement('li');
  listLi3.textContent = arr[3];

  const listLi4 = document.createElement('li');
  listLi4.textContent = arr[4];


  list2.appendChild(listLi);
  list2.appendChild(listLi1);
  list2.appendChild(listLi2);
  list2.appendChild(listLi3);
  list2.appendChild(listLi4);


  return list2;
};

const item2 = createlistItem2(namesTechnologies);
const list2 = document.querySelector('.clsItem2');
list2.appendChild(item2);
/* 3 */
