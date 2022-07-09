/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.removeItem('uid');
    })
    .catch((error) => {
      return { error };
    });
};

export const signIn = async ({ email, password }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user.uid;
      const email = response.user.email;
      localStorage.setItem('uid', uid);
      localStorage.setItem('email', email);
      return uid;
    })
    .catch((error) => {
      return { error };
    });
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;

    onChange(normalizedUser);
  });
};

const mapUserFromFirebaseAuthToUser = (user) => {
  const { name, uid } = user;
  return { uid, name };
};

export const getAllPatients = () => {
  return db
    .collection('patients')
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { name, isActive, sessionCount } = data;
        return {
          ...data,
          id: id.replace(' ', '_'),
          name,
          isActive,
          sessionCount,
        };
      });
    });
};

export const getQuestions = () => {
  return db
    .collection('questions')
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const isSelected = false;
        const { id, answer, question, src } = data;
        return {
          ...data,
          id,
          answer,
          question,
          src,
          isSelected,
        };
      });
    });
};
