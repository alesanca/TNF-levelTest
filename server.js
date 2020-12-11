// ----- CONFIG ----- //

const express = require('express');
const 
  mongoose
= require('mongoose');
const app = express();
const cors = require("cors");

mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.emit1.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors({
  origin: true
}));
app.use(express.json());

// ----- Router -----//
const usersRouter = require("./api/users/users.router");

//----- Model -----//

const usersModel = require("./api/users/users.model");

//----- App use -----//
app.use("/users", usersRouter);

// ---------------------------------------------- //

app.post("/register", async function (req, res) {
  let body = req.body;
  let {
    name,
    surname,
    active,
    email,
    city,
    birthday,
    creationAt
  } = body;
  const newUser = await usersModel.create({
    name,
    surname,
    active,
    email,
    city,
    birthday,
    creationAt
  });
  return res.json(newUser);
});

app.listen(3000, (err) => {
  if (err) return console.log("ERROR: ", err);
  console.log("Servidor corriendo en el 3000");
});