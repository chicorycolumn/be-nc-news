const loginRouter = require("express").Router();
const { loginUser } = require("../controllers/loginUser.controller");
const { handle405s } = require("../errors/errors");
const { authorizeUser } = require("../controllers/authorizeUser.controller");

loginRouter
  .route("/")
  .patch(loginUser)
  .all(handle405s);

module.exports = loginRouter;
