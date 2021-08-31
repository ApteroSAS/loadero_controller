/*
 * Loadero Controller
 * This application serves main Loadero's endpoints that can be used to manipulate test data and other services
 *
 * OpenAPI spec version: v0.32.1
 * Contact: support@loadero.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.Base = factory(root.LoaderoController.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Base model module.
   * @module model/Base
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>Base</code>.
   * @alias module:model/Base
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Base</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Base} obj Optional instance to populate.
   * @return {module:model/Base} The populated <code>Base</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('compute_unit'))
        obj.computeUnit = ApiClient.convertToType(data['compute_unit'], 'String');
      if (data.hasOwnProperty('group_name'))
        obj.groupName = ApiClient.convertToType(data['group_name'], 'String');
      if (data.hasOwnProperty('group_num'))
        obj.groupNum = ApiClient.convertToType(data['group_num'], 'Number');
      if (data.hasOwnProperty('participant_name'))
        obj.participantName = ApiClient.convertToType(data['participant_name'], 'String');
      if (data.hasOwnProperty('participant_num'))
        obj.participantNum = ApiClient.convertToType(data['participant_num'], 'Number');
      if (data.hasOwnProperty('profile_id'))
        obj.profileId = ApiClient.convertToType(data['profile_id'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} computeUnit
   */
  exports.prototype.computeUnit = undefined;

  /**
   * @member {String} groupName
   */
  exports.prototype.groupName = undefined;

  /**
   * @member {Number} groupNum
   */
  exports.prototype.groupNum = undefined;

  /**
   * @member {String} participantName
   */
  exports.prototype.participantName = undefined;

  /**
   * @member {Number} participantNum
   */
  exports.prototype.participantNum = undefined;

  /**
   * @member {Number} profileId
   */
  exports.prototype.profileId = undefined;


  return exports;

}));
