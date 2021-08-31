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
    root.LoaderoController.ComputeUnitUsage = factory(root.LoaderoController.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ComputeUnitUsage model module.
   * @module model/ComputeUnitUsage
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>ComputeUnitUsage</code>.
   * @alias module:model/ComputeUnitUsage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ComputeUnitUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ComputeUnitUsage} obj Optional instance to populate.
   * @return {module:model/ComputeUnitUsage} The populated <code>ComputeUnitUsage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('included'))
        obj.included = ApiClient.convertToType(data['included'], 'Number');
      if (data.hasOwnProperty('used'))
        obj.used = ApiClient.convertToType(data['used'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} included
   */
  exports.prototype.included = undefined;

  /**
   * @member {Number} used
   */
  exports.prototype.used = undefined;


  return exports;

}));
