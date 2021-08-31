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
    root.LoaderoController.Run = factory(root.LoaderoController.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Run model module.
   * @module model/Run
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>Run</code>.
   * @alias module:model/Run
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Run</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Run} obj Optional instance to populate.
   * @return {module:model/Run} The populated <code>Run</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('execution_finished'))
        obj.executionFinished = ApiClient.convertToType(data['execution_finished'], 'Date');
      if (data.hasOwnProperty('execution_started'))
        obj.executionStarted = ApiClient.convertToType(data['execution_started'], 'Date');
      if (data.hasOwnProperty('group_count'))
        obj.groupCount = ApiClient.convertToType(data['group_count'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('increment_strategy'))
        obj.incrementStrategy = ApiClient.convertToType(data['increment_strategy'], 'String');
      if (data.hasOwnProperty('launching_account_id'))
        obj.launchingAccountId = ApiClient.convertToType(data['launching_account_id'], 'Number');
      if (data.hasOwnProperty('participant_timeout'))
        obj.participantTimeout = ApiClient.convertToType(data['participant_timeout'], 'Number');
      if (data.hasOwnProperty('processing_finished'))
        obj.processingFinished = ApiClient.convertToType(data['processing_finished'], 'Date');
      if (data.hasOwnProperty('processing_started'))
        obj.processingStarted = ApiClient.convertToType(data['processing_started'], 'Date');
      if (data.hasOwnProperty('script_file_id'))
        obj.scriptFileId = ApiClient.convertToType(data['script_file_id'], 'Number');
      if (data.hasOwnProperty('start_interval'))
        obj.startInterval = ApiClient.convertToType(data['start_interval'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('success_rate'))
        obj.successRate = ApiClient.convertToType(data['success_rate'], 'Number');
      if (data.hasOwnProperty('test_id'))
        obj.testId = ApiClient.convertToType(data['test_id'], 'Number');
      if (data.hasOwnProperty('test_mode'))
        obj.testMode = ApiClient.convertToType(data['test_mode'], 'String');
      if (data.hasOwnProperty('test_name'))
        obj.testName = ApiClient.convertToType(data['test_name'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }

  /**
   * @member {Date} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Date} executionFinished
   */
  exports.prototype.executionFinished = undefined;

  /**
   * @member {Date} executionStarted
   */
  exports.prototype.executionStarted = undefined;

  /**
   * @member {Number} groupCount
   */
  exports.prototype.groupCount = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} incrementStrategy
   */
  exports.prototype.incrementStrategy = undefined;

  /**
   * @member {Number} launchingAccountId
   */
  exports.prototype.launchingAccountId = undefined;

  /**
   * @member {Number} participantTimeout
   */
  exports.prototype.participantTimeout = undefined;

  /**
   * @member {Date} processingFinished
   */
  exports.prototype.processingFinished = undefined;

  /**
   * @member {Date} processingStarted
   */
  exports.prototype.processingStarted = undefined;

  /**
   * @member {Number} scriptFileId
   */
  exports.prototype.scriptFileId = undefined;

  /**
   * @member {Number} startInterval
   */
  exports.prototype.startInterval = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Number} successRate
   */
  exports.prototype.successRate = undefined;

  /**
   * @member {Number} testId
   */
  exports.prototype.testId = undefined;

  /**
   * @member {String} testMode
   */
  exports.prototype.testMode = undefined;

  /**
   * @member {String} testName
   */
  exports.prototype.testName = undefined;

  /**
   * @member {Date} updated
   */
  exports.prototype.updated = undefined;


  return exports;

}));
