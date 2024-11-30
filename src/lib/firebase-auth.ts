'use client';

import { auth } from '@/firebase-config';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

export function useUser() {
  const [currentUser, setCurrentUser] = useState<User | null>();

  useEffect(() => {
    // Subscribe to onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser); // Update the state
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return currentUser;
}
