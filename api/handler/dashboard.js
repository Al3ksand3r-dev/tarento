const router = require("express").Router();
const { verifyUser } = require("../auth");

router.get("/", verifyUser, (req, res) => {
  res.json({ message: "Logged in" });
});

module.exports = router;
