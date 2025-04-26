import firebaseAdmin from "firebase-admin";
import serviceAccount from "../big-project-12152-firebase-adminsdk-5kiy4-d8b8a0de64.json" assert { type: "json" };

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  storageBucket: "big-project-12152.appspot.com",
});

export const bucket = firebaseAdmin.storage().bucket();