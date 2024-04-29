const jwt = require("jsonwebtoken")


const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, "kfc")
        const decoded = jwt.verify(token, "kfc");
        if (decoded) {
            req.body.userId = decoded.userId;
            next();
        } else {
            res.send({ msg: "Please Login first" });
        }
    } else {
        res.send({ msg: "Please Login first" });
    }
}

module.exports = {
    authenticate
};