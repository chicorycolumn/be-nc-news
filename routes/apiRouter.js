const apiRouter = require("express").Router();
const { authorizeUser } = require("../controllers/authorizeUser.controller");
const topicsRouter = require("./topicsRouter");
const usersRouter = require("./usersRouter");
const articlesRouter = require("./articlesRouter");
const commentsRouter = require("./commentsRouter");
const loginRouter = require("./loginRouter");

const { getEndpoints } = require("../controllers/api.controller");
const { handle405s } = require("../errors/errors");

apiRouter.use("/topics", topicsRouter);
apiRouter.use("/articles", articlesRouter);
apiRouter.use("/comments", commentsRouter);
apiRouter.use("/login", loginRouter);
apiRouter.use("/users", usersRouter);

apiRouter
  .route("/")
  .get(getEndpoints)
  .all(handle405s);

module.exports = apiRouter;
