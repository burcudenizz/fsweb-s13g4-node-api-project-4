const router = require("express").Router();
const mw = require("./users-middleware");
const userModel = require("./users-model");
router.get("/users", (req, res, next) => {
  try {
    const allUsers = userModel.getAllUsers();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/register",
  mw.validatePayload,
  mw.validateUserNameIsUnique,
  (req, res, next) => {
    try {
      const insertedUser = userModel.insertUser({
        username: req.body.username,
        password: res.boy.password,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.post("/login", (req, res, next) => {});
