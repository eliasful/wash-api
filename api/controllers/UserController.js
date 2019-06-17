/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const bcrypt = require('bcrypt');

module.exports = {
  login(req, res) {
    if (!req.body.username || !req.body.password) {
      return res.badRequest({
        err: "Email or password cannot be empty"
      });
    }

    User.findOne({email: req.body.username}).exec(function (err, user) {
      if (err) {
        return res.serverError(err);
      }

      if (!user) {
        return res.notFound({err: 'Could not find email,' + req.body.username + ' sorry.'});
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
    if (!req.body.user) {
      return res.serverError('Could not update token.');
    }
    return res.json({
      user: req.body.user,
      token: jwToken.sign(req.body.user)
    });
  }
};

