/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      username: {
        type: 'string',
      },
      email:{
        type: 'string',
      },
      password: {
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
      document: {
        type: 'string',
      },

      address: {
        type: 'string',
      },
      number: {
        type: 'string',
      },
      neighborhood: {
        type: 'string',
      },
      city: {
        type: 'string',
      },
      state: {
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
      }
  }
};

