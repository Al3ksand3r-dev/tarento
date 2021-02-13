const router = require("express").Router();
const { verifyUser } = require("../auth");

router.get("/", verifyUser, (req, res) => {
  const user = req.user;
  res.json(user);
});

module.exports = router;
