const jwt = require("jsonwebtoken");
const adminAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, "jawed", (err, decoded) => {
      if (err) {
        res.status(401).send({ msg: "Invalid token" });
      } else {
        req.body.userId = decoded.userId;
        next();
      }
    });
  } else {
    res.status(401).send({ msg: "Please provide a valid token" });
  }
};

module.exports = {
  adminAuth,
};
