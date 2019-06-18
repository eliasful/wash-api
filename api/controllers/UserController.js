/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const bcrypt = require('bcrypt');

module.exports = {
  login(req, res) {
    const email = req.body.email;
    if (!email || !req.body.password) {
      return res.badRequest({
        err: "Email or password cannot be empty"
      });
    }

    User.findOne({email: email}).exec(function (err, user) {
      if (err) {
        return res.serverError(err);
      }

      if (!user) {
        return res.notFound({err: 'Could not find email,' + email + ' sorry.'});
      }

      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          return res.json({
            user: user,
            token: jwToken.sign(user)
          });
        } else {
          return res.forbidden({err: 'Email and password combination do not match'});
        }
      });
    });
  },
  check(req, res) {
    return res.json({
      token: jwToken.sign(req.body.token)
    });
  }
};
