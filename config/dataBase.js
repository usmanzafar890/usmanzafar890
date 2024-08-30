const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://afzal.firebaseio.com' // For Realtime Database
  // Or for Firestore
  // databaseURL: 'https://your-project-id.firebaseio.com'
});

const db = admin.firestore(); // For Firestore
// or 
// const db = admin.database(); // For Realtime Database
module.exports = db;
