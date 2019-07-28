/*
  Напиши функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.

  Если значение поля inactiveDays болше чем period,
  поставить для isActive значение false.

  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true

  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const users = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true },
];


function setGuestState(guests, period) {
  return guests.map((guest) => {
    if (guest.inactiveDays > period) {
      return {
        ...guest, isActive: guest.isActive = false,
      };
    } return {
      ...guest, isActive: guest.isActive = true,
    };
  });
}

// Вызовы функции для проверки
console.table(
  setGuestState(users, 10),
); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

console.log(
  setGuestState(users, 20),
); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

console.log(
  setGuestState(users, 50),
); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
