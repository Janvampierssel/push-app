// Util function to help transform the Firebase Timestamp type to a date

export type FirebaseTimeStamp = {
  _seconds: number;
  _nanoseconds: number;
};

export default function timeStampToDate(
  firebaseTimeStamp: FirebaseTimeStamp
): Date {
  return new Date(firebaseTimeStamp._seconds * 1000);
}
