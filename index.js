import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";
import cartsRoutes from "./routes/carts.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// all routes in here are starting with /users
app.use("/users", usersRoutes);
app.use("/carts", cartsRoutes);

app.get("/", (req, res) => {
  res.send("Hello from homepage");
});

app.listen(PORT, () =>
  console.log(`SERVER RUNNING ON PORT: http://localhost:${PORT}`)
);
