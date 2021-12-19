const fire = require("../config/fire");

exports.signOut = (req, res, next) => {
  const { uid } = req.body;
  fire
    .auth()
    .revokeRefreshTokens(uid)
    .then(async () => {
      return fire.auth().getUser(uid);
    })
    .then((userRecord) => {
      // return new Date(userRecord.tokensValidAfterTime).getTime() / 1000;
      return 60 * 60 * 24 * 5 * 1000;
    })
    .then((timestamp) => {
      const metadataRef = fire.database().ref("metadata/" + uid);
      metadataRef.set({ revokeTime: timestamp }).then(() => {
        console.log("Database updated successfully.");
      });
      res.status(200).json({ message: "Logout Successfully" });
    })
    .catch((error) => {
      res.status(401).json({ message: "Try Again" });
    });
};
