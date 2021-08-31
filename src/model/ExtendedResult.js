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
 * Swagger Codegen version: 3.0.27
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {ArtifactsInfo} from './ArtifactsInfo';
import {MachineStats} from './MachineStats';
import {Metrics} from './Metrics';
import {Params} from './Params';
import {ResultAssert} from './ResultAssert';
import {ResultLog} from './ResultLog';
import {ResultResourceUsage} from './ResultResourceUsage';
import {RunParticipant} from './RunParticipant';

/**
 * The ExtendedResult model module.
 * @module model/ExtendedResult
 * @version v0.32.1
 */
export class ExtendedResult {
  /**
   * Constructs a new <code>ExtendedResult</code>.
   * @alias module:model/ExtendedResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ExtendedResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedResult} obj Optional instance to populate.
   * @return {module:model/ExtendedResult} The populated <code>ExtendedResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ExtendedResult();
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
}

/**
 * @member {module:model/MachineStats} aggregatedMachineStatistics
 */
ExtendedResult.prototype.aggregatedMachineStatistics = undefined;

/**
 * @member {module:model/ArtifactsInfo} artifacts
 */
ExtendedResult.prototype.artifacts = undefined;

/**
 * @member {Array.<module:model/ResultAssert>} asserts
 */
ExtendedResult.prototype.asserts = undefined;

/**
 * @member {Date} created
 */
ExtendedResult.prototype.created = undefined;

/**
 * @member {Date} end
 */
ExtendedResult.prototype.end = undefined;

/**
 * @member {Number} id
 */
ExtendedResult.prototype.id = undefined;

/**
 * @member {module:model/ResultLog} logPaths
 */
ExtendedResult.prototype.logPaths = undefined;

/**
 * @member {Array.<module:model/ResultResourceUsage>} machineStats
 */
ExtendedResult.prototype.machineStats = undefined;

/**
 * @member {module:model/Metrics} metrics
 */
ExtendedResult.prototype.metrics = undefined;

/**
 * @member {module:model/RunParticipant} participantDetails
 */
ExtendedResult.prototype.participantDetails = undefined;

/**
 * @member {module:model/Params} profileParams
 */
ExtendedResult.prototype.profileParams = undefined;

/**
 * @member {Number} runParticipantId
 */
ExtendedResult.prototype.runParticipantId = undefined;

/**
 * @member {String} seleniumResult
 */
ExtendedResult.prototype.seleniumResult = undefined;

/**
 * @member {Date} start
 */
ExtendedResult.prototype.start = undefined;

/**
 * @member {String} status
 */
ExtendedResult.prototype.status = undefined;

/**
 * @member {Date} updated
 */
ExtendedResult.prototype.updated = undefined;

