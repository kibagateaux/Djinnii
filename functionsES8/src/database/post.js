// Realtime Database under the path /messages/:pushId/original
export const addMovesStoryline = (functions, admin) => {
  functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const storylines = req.query.storylines;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    admin.database().ref('/database/get').push(...storylines).then(snapshot => {
      console.log('post storys', snapshot);
      // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
      // res.redirect(303, snapshot.ref);
    });
  });
};