const router = require("express").Router();
const axios = require("axios");
const userModel = require("../../src/usuarioRouter/");

router.route("/register").post(async (req, res) => {
  const { name, surname, email, password } = req.body;
  const dataUser = {
    name: name,
    surname: surname,
    email: email,
    password: password,
  };

  try {
    const responseDB = await userModel.create(dataUser);
    res.json({ msg: "usuario registrado" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.route("/login").post(async (req, res) => {
  const { email, password } = req.bory;
  const responseDB = await userModel.findOne({ email: email });

  if (responseDB.password === password) {
    try {
      const responseDataUser = authenticationUser({
        email: email,
        password: password,
      });
      return res.json({
        name: responseDB.name,
        surname: responseDB.surname,
        statusLogin: true,
        ...responseDataUser,
      });
    } catch (err) {
      res.json({ msg: "Usuario não encontrado" });
    }
  } else {
    res.json({ msg: "Senha incorreta" });
  }
});
