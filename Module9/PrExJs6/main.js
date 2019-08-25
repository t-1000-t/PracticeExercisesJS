const refs = {
  list: document.querySelector('.list'),
  current: null,
};

console.log(document);

function hendlerDelElem({ target }) {
  console.log(target);
  if (target.nodeName === 'BUTTON') {
    target.parentElement.innerHTML = '';
  } else return;
}

function hendlerResDubleClick({ target }) {
  console.log(target);
  if (target.nodeName === 'LI') {
    console.log(target);
    window.location.reload();
    // location.reload();
  } else return;
}

refs.list.addEventListener('click', hendlerDelElem);
refs.list.addEventListener('dblclick', hendlerResDubleClick);
