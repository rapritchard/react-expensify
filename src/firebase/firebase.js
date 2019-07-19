import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVTjzAD-v9yC46lNHZzIANCuN9RGo5IPI",
  authDomain: "expensify-413f8.firebaseapp.com",
  databaseURL: "https://expensify-413f8.firebaseio.com",
  projectId: "expensify-413f8",
  storageBucket: "expensify-413f8.appspot.com",
  messagingSenderId: "168583573054",
  appId: "1:168583573054:web:07d077640d85409b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });


// database.ref('expenses').push({
//   description: 'Water Bill',
//   note: 'Monthly Water bill',
//   amount: 10000,
//   createdAt: 5000,
// });


// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python',
// });

// database.ref('notes/-Lk9nwXR2ZI36Tjwfpot').remove();

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref('location/city').once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((error) => {
//     console.log('Error Fetching', error.message);
//   });

// database.ref().set({
//   name: 'Reece Pritchard',
//   age: 23,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google',
//   },
//   isSingle: true,
//   location: {
//     city: 'London',
//     country: 'United Kingdom',
//   },
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'loction/city': 'Manchester',
// }).then(() => {
//   console.log('Data is updated');
// }).catch((error) => {
//   console.log('Failed update', error.message);
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch((error) => {
//     console.log('Failed to remove data', error.message);
//   });
