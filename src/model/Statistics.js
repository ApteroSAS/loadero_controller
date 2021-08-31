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
    define(['ApiClient', 'model/NetworkStatistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworkStatistics'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.Statistics = factory(root.LoaderoController.ApiClient, root.LoaderoController.NetworkStatistics);
  }
}(this, function(ApiClient, NetworkStatistics) {
  'use strict';

  /**
   * The Statistics model module.
   * @module model/Statistics
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>Statistics</code>.
   * Statistics describes result resource usage statistics with JSON field descriptions.
   * @alias module:model/Statistics
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Statistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Statistics} obj Optional instance to populate.
   * @return {module:model/Statistics} The populated <code>Statistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cpu_available'))
        obj.cpuAvailable = ApiClient.convertToType(data['cpu_available'], 'Number');
      if (data.hasOwnProperty('cpu_usage'))
        obj.cpuUsage = ApiClient.convertToType(data['cpu_usage'], 'Number');
      if (data.hasOwnProperty('memory_available'))
        obj.memoryAvailable = ApiClient.convertToType(data['memory_available'], 'Number');
      if (data.hasOwnProperty('memory_usage'))
        obj.memoryUsage = ApiClient.convertToType(data['memory_usage'], 'Number');
      if (data.hasOwnProperty('network_rx'))
        obj.networkRx = NetworkStatistics.constructFromObject(data['network_rx']);
      if (data.hasOwnProperty('network_tx'))
        obj.networkTx = NetworkStatistics.constructFromObject(data['network_tx']);
    }
    return obj;
  }

  /**
   * @member {Number} cpuAvailable
   */
  exports.prototype.cpuAvailable = undefined;

  /**
   * @member {Number} cpuUsage
   */
  exports.prototype.cpuUsage = undefined;

  /**
   * @member {Number} memoryAvailable
   */
  exports.prototype.memoryAvailable = undefined;

  /**
   * @member {Number} memoryUsage
   */
  exports.prototype.memoryUsage = undefined;

  /**
   * @member {module:model/NetworkStatistics} networkRx
   */
  exports.prototype.networkRx = undefined;

  /**
   * @member {module:model/NetworkStatistics} networkTx
   */
  exports.prototype.networkTx = undefined;


  return exports;

}));
