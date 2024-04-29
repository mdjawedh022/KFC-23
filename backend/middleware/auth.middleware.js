const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({ msg: "Invalid token. Please login again." });
            }
            req.body.userId = decoded.userId;
            next();
        });
    } else {
        res.status(401).send({ msg: "No token provided. Please login first." });
    }
};

module.exports = {
    authenticate,
};
