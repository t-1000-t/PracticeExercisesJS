const logger = time => console.log(`Resolved after ${time}ms`);
const delay = (ms) => {
  const promise = new Promise((resolve) => {
    setInterval(() => {
      resolve(ms);
    }, ms);
  });
  return promise;
};

// const logger = time => console.log(`Resolved after ${time}ms`);
// const delay = (time) => {
//   const promise = new Promise(() => {
//     setInterval(() => {
//       logger(time);
//     }, time);
//   });
//   return promise;
// };

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
