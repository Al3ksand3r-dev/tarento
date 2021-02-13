const jwt = require("jsonwebtoken");
require("dotenv/config");
export const verifyUser = async (req, res) => {
  const authHeaders = req.headers.authorization;
  if (typeof authHeaders !== "undefined") {
    const bearer = authHeaders.split(" ");
    const token = bearer[1];
    const user = jwt.verify(token, process.env.SECRET);
    return res.status(200).json(user);
  }
  res.status(401).json({ error: "Not allowed" });
};
