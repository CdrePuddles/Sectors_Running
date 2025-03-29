import admin from 'firebase-admin';

// Path to your downloaded firebase admin SDK key
var serviceAccount = require("../serviceAccountKey.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const firestore = admin.firestore();

export { admin, firestore };