// Firestore Admin SDK (only available server-side)

import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.NEXT_PUBLIC_PROJECTID}.firebaseio.com`,
  });
}

export const adminDB = admin.firestore();
