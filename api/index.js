const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const userRouter = require("./handler/users");
const dashboardRouter = require("./handler/dashboard");
const loginRouter = require("./handler/login");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/login", loginRouter);

app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));
