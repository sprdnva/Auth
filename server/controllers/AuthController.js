const User = require("../models/User");

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(422).send({ error: "You must provide email and password" });
  }

  User.findOne({ email }).then((err, foundUser) => {
    if (err) {
      return next(err);
    }

    if (foundUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    const user = new User({
      email,
      password
    });
    user.save(err => {
      if (err) {
        return next(err);
      }
    });
    res.json(user);
  });
};
