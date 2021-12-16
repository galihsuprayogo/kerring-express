const fire = require("../config/fire");

exports.verifyToken = async (req, res, next) => {
  if (req.headers?.authorization?.startsWith("Bearer ")) {
    let checkRevoked = true;
    const idToken = req.headers.authorization.split("Bearer ")[1];
    try {
      await fire.auth().verifyIdToken(idToken, checkRevoked);
      next();
    } catch (err) {
      res.status(401).json({ message: "token expired" });
    }
  } else {
    res.status(401).json({ message: "token empty" });
  }
};
