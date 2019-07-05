const goodsNames = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const goodsPrices = [1000, 2000, 1500, 2700, 1600, 8000];


function combine(names, prices) {
  if (names.length !== prices.length) return 'error';
  const result = [];
  for (const i in names) {
    result.push({ [names[i]]: prices[i] });
  }
  return result;
}


const products = combine(goodsNames, goodsPrices);
console.log(products); // массив объектов со свойствами name и price
