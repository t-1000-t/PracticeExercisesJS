
const namesAnimals = ['Кот', 'Хомяк', 'Лошадь', 'Попугай'];
const namesVegetables = ['Хлеб', 'Творог', 'Зелень'];
const namesTechnologies = ['html', 'css', 'js', 'react', 'node'];

const createlistItem = (section, arr) => {
  const list = document.createElement('ul');

  list.textContent = section;
  list.classList.add('list');

  const listLi = document.createElement('li');
  listLi.textContent = arr[0];
  listLi.classList.add('animal');

  const listLi2 = document.createElement('li');
  listLi2.textContent = arr[1];
  listLi2.classList.add('animal');

  const listLi3 = document.createElement('li');
  listLi3.textContent = arr[2];
  listLi3.classList.add('animal');

  const listLi4 = document.createElement('li');
  listLi4.textContent = arr[3];
  listLi4.classList.add('animal');

  const listLi5 = document.createElement('li');
  listLi5.textContent = arr[4];
  listLi5.classList.add('animal');

  list.appendChild(listLi);
  list.appendChild(listLi2);
  list.appendChild(listLi3);
  list.appendChild(listLi4);
  list.appendChild(listLi5);

  return list;
};
const item = createlistItem('Животные', namesAnimals);
const item2 = createlistItem('Продукты', namesVegetables);
const item3 = createlistItem('Технологии', namesTechnologies);
const list = document.querySelector('.list');
list.appendChild(item);
list.appendChild(item2);
list.appendChild(item3);
