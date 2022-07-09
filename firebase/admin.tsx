import admin from 'firebase-admin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('./firebase_keys.json');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://jinkobot-1b4c5.firebaseio.com',
  });
} catch (e) {
  console.log(e);
}

export const firestore = admin.firestore();
