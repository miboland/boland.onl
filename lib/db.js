export default async () => {
  const firebase = await import('firebase/app')

  await import('firebase/database')

  const databaseURL = process.env.FIREBASE_DATABASE_URL

  try {
    firebase.initializeApp({
      databaseURL
    })
  } catch (error) {
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
      // eslint-disable-next-line no-console
      console.error('Firebase initialization error', error.stack)
    }
  }

  return firebase.database().ref('views')
}
