const router = require("express").Router();
const User = require("../controllers/UserController");

router.post("/", async (req, res) => {
  const user = await User.createOne(req.body);
  if (user) {
    res.status(201).json(user);
    return;
  }
  res.status(400).json({ error: "Oops, something went wrong..." });
});

module.exports = router;
