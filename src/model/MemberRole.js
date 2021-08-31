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
    define(['ApiClient', 'model/ClassificatorType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClassificatorType'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.MemberRole = factory(root.LoaderoController.ApiClient, root.LoaderoController.ClassificatorType);
  }
}(this, function(ApiClient, ClassificatorType) {
  'use strict';

  /**
   * The MemberRole model module.
   * @module model/MemberRole
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>MemberRole</code>.
   * MemberRole is a concrete classificator value that is used to describe different member role values. Member roles are different values that are assigned to each project member. They follow a predefined hierarchy that allows to define permissions to each member in a project.
   * @alias module:model/MemberRole
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MemberRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberRole} obj Optional instance to populate.
   * @return {module:model/MemberRole} The populated <code>MemberRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('classificator'))
        obj.classificator = ClassificatorType.constructFromObject(data['classificator']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('disabled'))
        obj.disabled = ApiClient.convertToType(data['disabled'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/ClassificatorType} classificator
   */
  exports.prototype.classificator = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Boolean} disabled
   */
  exports.prototype.disabled = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} value
   */
  exports.prototype.value = undefined;


  return exports;

}));
