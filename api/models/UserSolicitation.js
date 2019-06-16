/**
 * UserSolicitation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    owner: {
      model: 'user'
    },
    userService: {
      model: 'userService'
    },
    observation: 'string',
    quantity: 'integer',
    status: 'string',
    estimatedTime: 'float',
    acceptedIn: 'datetime',
    ratingOwner: 'integer',
    ratingProfessional: 'integer',
  }
};

