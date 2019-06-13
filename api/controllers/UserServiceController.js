/**
 * UserServiceController
 *
 * @description :: Server-side logic for managing userservices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  findServices(req, res) {
    return ServiceType.find({
      description: 'Camisa'
    }).exec(function (err, records) {
      return res.ok(records);
    });
  }
};

