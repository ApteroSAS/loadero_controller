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
    root.LoaderoController.AddressInfo = factory(root.LoaderoController.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AddressInfo model module.
   * @module model/AddressInfo
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>AddressInfo</code>.
   * @alias module:model/AddressInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AddressInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressInfo} obj Optional instance to populate.
   * @return {module:model/AddressInfo} The populated <code>AddressInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('line1'))
        obj.line1 = ApiClient.convertToType(data['line1'], 'String');
      if (data.hasOwnProperty('line2'))
        obj.line2 = ApiClient.convertToType(data['line2'], 'String');
      if (data.hasOwnProperty('postal_code'))
        obj.postalCode = ApiClient.convertToType(data['postal_code'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * @member {String} line1
   */
  exports.prototype.line1 = undefined;

  /**
   * @member {String} line2
   */
  exports.prototype.line2 = undefined;

  /**
   * @member {String} postalCode
   */
  exports.prototype.postalCode = undefined;

  /**
   * @member {String} state
   */
  exports.prototype.state = undefined;


  return exports;

}));