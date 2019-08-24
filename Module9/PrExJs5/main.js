const refs = {
  images: document.querySelector('.images'),
};

console.log(refs.images);

function hendlerOnClickImg({ target }) {
  const { alt } = target;
  alert(alt);
}

refs.images.addEventListener('click', hendlerOnClickImg);
