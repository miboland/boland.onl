const admin = require("firebase-admin");

const client_email = process.env.FIREBASE_CLIENT_EMAIL;
// eslint-disable-next-line require-unicode-regexp
const private_key = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n");
const project_id = process.env.FIREBASE_PROJECT_ID;
const databaseURL = process.env.FIREBASE_DATABASE_URL;

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email,
      private_key,
      project_id,
    }),
    databaseURL,
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error("Firebase admin initialization error", error.stack);
  }
}

module.exports = admin.database();
