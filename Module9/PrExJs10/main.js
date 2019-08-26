const ref = {
  menu: document.querySelector('.menu'),
  menuLink: document.querySelectorAll('.menu-link'),
};

console.log(ref.menu);
console.log(ref.menuLink);


function OnClickMenuAddActive({ target }) {
  console.log(target);
  const page = target.textContent.toLowerCase();
  if (page === 'index') return;
  [...ref.menuLink].map((e) => {
    e.classList.remove('active');
    if (e.textContent.toLocaleLowerCase() === page) {
      e.classList.add('active');
    }
  });
}

ref.menu.addEventListener('click', OnClickMenuAddActive);
