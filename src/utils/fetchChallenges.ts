import { adminDB } from '@/firebase-admin-config';
import { FirebaseTimeStamp } from './timeStampToDate';

export type ChallengeType = {
  id: string;
  title: string;
  description: string;
  startDate: FirebaseTimeStamp;
  endDate: FirebaseTimeStamp;
  creatorUID: string;
  contestants: string[];
  maxContestants: number;
};

export default async function fetchChallenges() {
  const challengesSnapshot = await adminDB.collection('challenges').get();
  const challenges: ChallengeType[] =
    challengesSnapshot.docs.map<ChallengeType>((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<ChallengeType, 'id'>),
    }));

  return challenges;
}
