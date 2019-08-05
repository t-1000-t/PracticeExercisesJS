/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

const list = document.querySelector('.list');

list.firstElementChild.style.cssText = 'color: red';
list.lastElementChild.style.cssText = 'color: blue';
