//
// Object Destructuring
//

// const person = {
//   name: 'Reece',
//   age: 23,
//   location: {
//     city: 'London',
//     temp: 21,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['999 Chestnut Road', 'Basildon', 'Essex', 'SS11 1AB'];
// const [, city, county = 'Kent'] = address;
// console.log(`You are in ${city} ${county}`);

const item = ['Coffee (hot)', '£2', '£2.50', '£2.75'];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);
