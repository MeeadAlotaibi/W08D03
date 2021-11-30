const jwt = require("jsonwebtoken");
require("dotenv").config();

/////////////////////////////////////////////////

const secret = process.env.secretKey; // كلمة السر الموجدة في ملف .env

const authentication = (req, res, next) => {
  try {
          console.log(req);
    if (!req.headers.authorization) /// يتاكد اذا ماعندي توكن أو لا ؟
      return res.status(403).send({ message: "forbidden" });
    const token = req.headers.authorization.split(" ")[1];
    const parsedToken = jwt.verify(token, secret);
    req.token = parsedToken;
    next();
  } catch (error) {
    res.status(403).send(error);
  }
};
module.exports = authentication;
