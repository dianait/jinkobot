import { firestore } from 'firebase/admin';

export default (response) => {
  firestore
    .collection('questions')
    .get()
    .then((docs) => response.json(docs.data()))
    .catch(() => {
      response.status(404).end();
    });
};
