const { usersDB } = require("../functions/UserFunction");
const bcrypt = require("bcryptjs");

module.exports = {
  async createOne({ firstName, lastName, email, password }) {
    if (!firstName || !lastName || !email || !password) return;
    if (await usersDB.findOne({ email })) return;
    const newUser = await usersDB.insert({
      name: firstName + " " + lastName,
      email,
      password: await bcrypt.hash(password, 10),
      createdAt: new Date().toLocaleString(),
    });

    return {
      name: newUser.name,
      email: newUser.email,
    };
  },
};
