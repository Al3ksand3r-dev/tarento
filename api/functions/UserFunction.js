const NeDB = require("nedb-promise");

const usersDB = new NeDB({
  filename: "./db/users.db",
  autoload: true,
});

module.exports = { usersDB };
