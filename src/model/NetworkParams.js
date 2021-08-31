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
    root.LoaderoController.NetworkParams = factory(root.LoaderoController.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworkParams model module.
   * @module model/NetworkParams
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>NetworkParams</code>.
   * @alias module:model/NetworkParams
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworkParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkParams} obj Optional instance to populate.
   * @return {module:model/NetworkParams} The populated <code>NetworkParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bytes'))
        obj.bytes = ApiClient.convertToType(data['bytes'], 'Number');
      if (data.hasOwnProperty('bytes_per_second'))
        obj.bytesPerSecond = ApiClient.convertToType(data['bytes_per_second'], 'Number');
      if (data.hasOwnProperty('dropped'))
        obj.dropped = ApiClient.convertToType(data['dropped'], 'Number');
      if (data.hasOwnProperty('dropped_per_second'))
        obj.droppedPerSecond = ApiClient.convertToType(data['dropped_per_second'], 'Number');
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], 'Number');
      if (data.hasOwnProperty('errors_per_second'))
        obj.errorsPerSecond = ApiClient.convertToType(data['errors_per_second'], 'Number');
      if (data.hasOwnProperty('packets'))
        obj.packets = ApiClient.convertToType(data['packets'], 'Number');
      if (data.hasOwnProperty('packets_per_second'))
        obj.packetsPerSecond = ApiClient.convertToType(data['packets_per_second'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} bytes
   */
  exports.prototype.bytes = undefined;

  /**
   * @member {Number} bytesPerSecond
   */
  exports.prototype.bytesPerSecond = undefined;

  /**
   * @member {Number} dropped
   */
  exports.prototype.dropped = undefined;

  /**
   * @member {Number} droppedPerSecond
   */
  exports.prototype.droppedPerSecond = undefined;

  /**
   * @member {Number} errors
   */
  exports.prototype.errors = undefined;

  /**
   * @member {Number} errorsPerSecond
   */
  exports.prototype.errorsPerSecond = undefined;

  /**
   * @member {Number} packets
   */
  exports.prototype.packets = undefined;

  /**
   * @member {Number} packetsPerSecond
   */
  exports.prototype.packetsPerSecond = undefined;


  return exports;

}));