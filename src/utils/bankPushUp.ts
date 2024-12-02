import { db } from '@/firebase-config';
import { doc, increment, updateDoc } from '@firebase/firestore';

export async function bankPushUp(uid: string, pushups: number) {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      pushups: increment(pushups),
      pushUpsCurrentRound: increment(pushups),
    });
  } catch (error) {
    console.error('Error occurred banking pushups: ', error);
    throw error;
  }
}
