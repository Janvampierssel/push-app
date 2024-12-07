'use client';

import { auth, db, googleProvider } from '@/firebase-config';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { fetchDocumentById } from './db';
import { doc, setDoc, updateDoc } from '@firebase/firestore';

export function getCurrentUser(): [User | null, boolean] {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        SyncUserWithDatabase(user);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        console.log('Logging out!');
      }
      setUserLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return [currentUser, userLoading];
}

export const doSignOut = (callback?: () => void) => {
  signOut(auth)
    .then(() => {
      callback?.();
    })
    .catch((error) => {
      alert('sign out error: ' + error);
    });
};

export const doSignIn = (callback?: () => void) => {
  console.log('Dosignin!');
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      callback?.();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      console.error(errorCode, errorMessage, email);
    });
};

export async function SyncUserWithDatabase(user: User) {
  const userDoc = await fetchDocumentById('users', user.uid);

  if (userDoc === null && user.uid) {
    await setDoc(doc(db, 'users', user.uid), {
      name: user.displayName,
      photoUrl: user.photoURL,
      pushUpsCurrentRound: 0,
      pushups: 0,
    });
  } else if (
    userDoc &&
    (userDoc?.photoUrl !== user.photoURL || userDoc?.name !== user.displayName)
  ) {
    let dataToUpdate: { [key: string]: any } = {};
    if (userDoc?.photoUrl !== user.photoURL)
      dataToUpdate.photoUrl = user?.photoURL;
    if (userDoc?.name !== user.displayName)
      dataToUpdate.name = user?.displayName;
    await updateDoc(doc(db, 'users', user.uid), dataToUpdate);
  }
}
