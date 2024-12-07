// TODO: make this server-side

import { db } from '@/firebase-config';
import { doc, getDoc } from 'firebase/firestore';

export async function fetchDocumentById(collectionName: string, id: string) {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error('No document found!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    return undefined;
  }
}
