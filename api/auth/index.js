const jwt = require("jsonwebtoken");
require("dotenv/config");

module.exports = {
  verifyUser(req, res, next) {
    const authHeaders = req.headers.authorization;
    if (typeof authHeaders !== "undefined") {
      const verify = jwt.verify(
        authHeaders.replace("Bearer ", ""),
        process.env.SECRET
      );
      req.user = verify;
      next();
    } else {
      res.status(401).json({ error: "Not allowed" });
    }
  },
};
