const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

///////////// signUp /////////////////

const signup = async (req, res) => {
  const { email, password, role } = req.body;

  const savedEmail = email.toLowerCase();
  const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));

  const newUser = new userModel({
    email: savedEmail,
    password: hashedPassword,
    role,
  });

  newUser
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};


///////////// signin /////////////////


const signin = (req, res) => {
  const { email, password } = req.body;

  const savedEmail = email.toLowerCase();

  userModel
    .findOne({ email: savedEmail })
    .then(async (result) => {
      if (result) {
        if (result.email == savedEmail) {
          const checkedPassword = await bcrypt.compare(
            password,
            result.password
          );
          if (checkedPassword) {
            const payload = { role: result.role };
            const options = { expiresIn: "60m" };


            const secret = process.env.secretKey;

            
            const token = await jwt.sign(payload, secret, options);
            res.status(200).send({ result, token });
          } else {
            res.status(404).send("Invalid email or password");
          }
        } else {
          res.status(404).send("Invalid email or password");
        }
      } else {
        res.status(404).send("User doesn't exist");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

///////////////// Get all Users //////////////

const getAllUsers = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
///////////////// Delete User ////////////////////

const deleteUser = (req, res) => {
  const id = req.params.id;
  console.log(id);
  userModel
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).json("user removed");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = { signup, signin, getAllUsers, deleteUser };
