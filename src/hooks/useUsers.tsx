import { db } from '@/firebase-config';
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from '@firebase/firestore';
import { useEffect, useState } from 'react';

export default function useUsers(): [DocumentData[], boolean] {
  const [users, setUsers] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'users'),
      orderBy('pushUpsCurrentRound', 'desc')
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const users: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        setUsers(users);
        setLoading(false);
      },
      (error) => {
        console.error('Error listening to changes:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return [users, loading];
}
