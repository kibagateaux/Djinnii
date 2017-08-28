
export const setMovesApiToken = (functions, admin) => {
  return functions.https.onRequest((req, res) => {
    const { access_token, refresh_token, uid } = body;
    const tokens = {
      accessToken: access_token,
      refreshToken: refresh_token
    };
    const tokenRef = admin.database().ref(`/tokens/${uid}/moves`)
    tokenRef
      .set(tokens)
      .then((snapshot) => {
        console.log('post moves token snap', snapshot.value, snapshot.val());
        res.send(snapshot.val());
      })
      .catch((err) => {
        console.log('err uploading moves token', err)
      }) 
  });
};

export const initMovesOAuth = (functions, admin) => {
  return functions.https.onRequest((req, res) => {
    const Moves = require('moves');
    const _moves = new Moves(functions.config().moves);
    if (!req.query.code) {
      const url = _moves.authorize({
        scope: ["activity", "location"]
      });
      console.log("init auth url", url);
      res.send({
        statusCode: 200,
        url
      }); // send to RN for Linking
    } else {
      _moves.token(req.query.code, function(error, data, body) {
        const { access_token, refresh_token } = JSON.parse(data.body);
        // if this is cb from moves there will be no uid. sooo...?
        console.log('init moves cb req', req.body, req.params);
        const {uid} = req.body;
        console.log('token, uid', access_token, uid);
        axios.post(
          "setMovesApiToken: http://localhost:5000/djinn-64564/us-central1/setMovesApiToken", 
          {access_token, refresh_token, uid}
        ).then((snapshot) => {
          console.log('send token res', snapshot, snapshort.val());
          res.send({
            statusCode: 200,
            data: snapshot.val(),
          })
        })
        .catch((err) => console.log('cld func err'));
        ;
      });
    }
  })
}
// How to set environment variables on functions cloud?

/* should really save to ref('tokens/{id}/moves')*/
/* can easily be changed to setAuthToken with ref('tokens/{id}/{provider}) */