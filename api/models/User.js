/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    birthday: {
      type: 'date',
    },

    address: {
      type: 'string',
    },
    lat: {
      type: 'string',
    },
    lng: {
      type: 'string',
    },
    userServices: {
      collection: 'userService',
      via: 'user'
    },

    toJSON: function() {
      const obj = this.toObject();
      delete obj.password;

      return obj;
    }
  },
  beforeCreate(values, cb) {
    if (!values.password) {
      return cb({err: ["Password is required"]});
    }

    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) {
        return cb(err)
      };
      values.password = hash;

      cb();
    });
  }
};

