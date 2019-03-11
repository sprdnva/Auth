const Authentication = require("./controllers/AuthController");

module.exports = app => {
  app.post("/signup", Authentication.signup);
};
