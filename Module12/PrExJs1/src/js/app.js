const refs = {
  btnLight: document.querySelector('[data-theme="light"]'),
  btnDark: document.querySelector('[data-theme="dark"]'),
  body: document.querySelector('body'),
};


const heandlerClickChengeTheme = (e) => {
  if (e.target.dataset.theme === 'light') {
    refs.body.classList.add('theme-light');
    refs.body.classList.remove('theme-dark');
  }
  if (e.target.dataset.theme === 'dark') {
    refs.body.classList.add('theme-dark');
    refs.body.classList.remove('theme-light');
  }
  localStorage.setItem('post-theme', refs.body.attributes.class.value);
};

refs.btnLight.addEventListener('click', heandlerClickChengeTheme);
refs.btnDark.addEventListener('click', heandlerClickChengeTheme);

const lastSession = localStorage.getItem('post-theme');

if (lastSession) {
  refs.body.classList.add(lastSession);
}
