const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, "kfc", (err, decoded) => {
      if (err) {
        // Token verification failed
        console.error("Token verification failed:", err);
        res.status(401).send({ msg: "Invalid token" });
      } else {
        // Token is valid
        req.body.userId = decoded.userId;
        next();
      }
    });
  } else {
    res.status(401).send({ msg: "Please provide a valid token" });
  }
};

module.exports = {
  authenticate,
};
