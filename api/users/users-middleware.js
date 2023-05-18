const userModel = require("./users-model");

function validatePayload(req, res, next) {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      res
        .status(400)
        .json({ message: "kullanıcı adı veya parola eksik veya hatalı." });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validateUserNameIsUnique(req, res, next) {
  try {
    let { username } = req.body;
    const isExist = userModel
      .getAllUsers()
      .find((user) => user.username === username);
    if (isExist) {
      res.status(400).json({ message: "aynı kullancı adı mevcut." });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validateLogin(req, res, next) {
  try {
    let { username, password } = req.body;
    const isLogin = userModel
      .getAllUsers()
      .find((user) => user.name === username && user.password === password);
    if (!isLogin) {
      res.status(400).json({ message: "giriş bilgileriniz hatalı." });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { validatePayload, validateUserNameIsUnique, validateLogin };
