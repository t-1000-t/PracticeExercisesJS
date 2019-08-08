
const description = {
  image: 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
  alt: 'movie image',
  name: 'The Godfather',
  text: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of thewould-be killers, launching a campaign of bloody revenge.',
  release: 'Released: 1972-03-14',
  status: 'Rating: 8.6',
};

const filmDescription = ({
  image, alt, name, text, release, status,
}) => {
  const movie = document.createElement('div');
  movie.classList.add('movie');

  const img = document.createElement('img');
  img.classList.add('movie__image');
  img.src = image;
  img.alt = alt;



  const movie__body = document.createElement('div');
  movie__body.classList.add('movie__body');

  const movie__title = document.createElement('h2');
  movie__title.classList.add('movie__title');
  movie__title.textContent = name;
  console.log(name);
  const movie__description = document.createElement('p');
  movie__description.classList.add('movie__description');
  movie__description.textContent = text;
  console.log(text);
  const movie__date = document.createElement('p');
  movie__date.classList.add('movie__date');
  movie__date.textContent = release;
  console.log(release);
  const movie__rating = document.createElement('p');
  movie__rating.classList.add('movie__rating');
  movie__rating.textContent = status;
  console.log(status);
  movie.append(img, movie__body, movie__title, movie__description, movie__date, movie__rating);

  return movie;
};

const item = document.querySelector('body');
item.append(filmDescription(description));
