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
    define(['ApiClient', 'model/ArtifactsInfo', 'model/MachineStats', 'model/Metrics', 'model/Params', 'model/ResultAssert', 'model/ResultLog', 'model/ResultResourceUsage', 'model/RunParticipant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ArtifactsInfo'), require('./MachineStats'), require('./Metrics'), require('./Params'), require('./ResultAssert'), require('./ResultLog'), require('./ResultResourceUsage'), require('./RunParticipant'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.ExtendedResult = factory(root.LoaderoController.ApiClient, root.LoaderoController.ArtifactsInfo, root.LoaderoController.MachineStats, root.LoaderoController.Metrics, root.LoaderoController.Params, root.LoaderoController.ResultAssert, root.LoaderoController.ResultLog, root.LoaderoController.ResultResourceUsage, root.LoaderoController.RunParticipant);
  }
}(this, function(ApiClient, ArtifactsInfo, MachineStats, Metrics, Params, ResultAssert, ResultLog, ResultResourceUsage, RunParticipant) {
  'use strict';

  /**
   * The ExtendedResult model module.
   * @module model/ExtendedResult
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>ExtendedResult</code>.
   * @alias module:model/ExtendedResult
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ExtendedResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedResult} obj Optional instance to populate.
   * @return {module:model/ExtendedResult} The populated <code>ExtendedResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('aggregated_machine_statistics'))
        obj.aggregatedMachineStatistics = MachineStats.constructFromObject(data['aggregated_machine_statistics']);
      if (data.hasOwnProperty('artifacts'))
        obj.artifacts = ArtifactsInfo.constructFromObject(data['artifacts']);
      if (data.hasOwnProperty('asserts'))
        obj.asserts = ApiClient.convertToType(data['asserts'], [ResultAssert]);
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('end'))
        obj.end = ApiClient.convertToType(data['end'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('log_paths'))
        obj.logPaths = ResultLog.constructFromObject(data['log_paths']);
      if (data.hasOwnProperty('machine_stats'))
        obj.machineStats = ApiClient.convertToType(data['machine_stats'], [ResultResourceUsage]);
      if (data.hasOwnProperty('metrics'))
        obj.metrics = Metrics.constructFromObject(data['metrics']);
      if (data.hasOwnProperty('participant_details'))
        obj.participantDetails = RunParticipant.constructFromObject(data['participant_details']);
      if (data.hasOwnProperty('profile_params'))
        obj.profileParams = Params.constructFromObject(data['profile_params']);
      if (data.hasOwnProperty('run_participant_id'))
        obj.runParticipantId = ApiClient.convertToType(data['run_participant_id'], 'Number');
      if (data.hasOwnProperty('selenium_result'))
        obj.seleniumResult = ApiClient.convertToType(data['selenium_result'], 'String');
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'Date');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }

  /**
   * @member {module:model/MachineStats} aggregatedMachineStatistics
   */
  exports.prototype.aggregatedMachineStatistics = undefined;

  /**
   * @member {module:model/ArtifactsInfo} artifacts
   */
  exports.prototype.artifacts = undefined;

  /**
   * @member {Array.<module:model/ResultAssert>} asserts
   */
  exports.prototype.asserts = undefined;

  /**
   * @member {Date} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Date} end
   */
  exports.prototype.end = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/ResultLog} logPaths
   */
  exports.prototype.logPaths = undefined;

  /**
   * @member {Array.<module:model/ResultResourceUsage>} machineStats
   */
  exports.prototype.machineStats = undefined;

  /**
   * @member {module:model/Metrics} metrics
   */
  exports.prototype.metrics = undefined;

  /**
   * @member {module:model/RunParticipant} participantDetails
   */
  exports.prototype.participantDetails = undefined;

  /**
   * @member {module:model/Params} profileParams
   */
  exports.prototype.profileParams = undefined;

  /**
   * @member {Number} runParticipantId
   */
  exports.prototype.runParticipantId = undefined;

  /**
   * @member {String} seleniumResult
   */
  exports.prototype.seleniumResult = undefined;

  /**
   * @member {Date} start
   */
  exports.prototype.start = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Date} updated
   */
  exports.prototype.updated = undefined;


  return exports;

}));
