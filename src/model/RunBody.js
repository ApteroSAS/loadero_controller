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

/**
 * The RunBody model module.
 * @module model/RunBody
 * @version v0.32.1
 */
export class RunBody {
  /**
   * Constructs a new <code>RunBody</code>.
   * @alias module:model/RunBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RunBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RunBody} obj Optional instance to populate.
   * @return {module:model/RunBody} The populated <code>RunBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RunBody();
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
      if (data.hasOwnProperty('participant_count'))
        obj.participantCount = ApiClient.convertToType(data['participant_count'], 'Number');
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
}

/**
 * @member {Date} created
 */
RunBody.prototype.created = undefined;

/**
 * @member {Date} executionFinished
 */
RunBody.prototype.executionFinished = undefined;

/**
 * @member {Date} executionStarted
 */
RunBody.prototype.executionStarted = undefined;

/**
 * @member {Number} groupCount
 */
RunBody.prototype.groupCount = undefined;

/**
 * @member {Number} id
 */
RunBody.prototype.id = undefined;

/**
 * @member {String} incrementStrategy
 */
RunBody.prototype.incrementStrategy = undefined;

/**
 * @member {Number} launchingAccountId
 */
RunBody.prototype.launchingAccountId = undefined;

/**
 * @member {Number} participantCount
 */
RunBody.prototype.participantCount = undefined;

/**
 * @member {Number} participantTimeout
 */
RunBody.prototype.participantTimeout = undefined;

/**
 * @member {Date} processingFinished
 */
RunBody.prototype.processingFinished = undefined;

/**
 * @member {Date} processingStarted
 */
RunBody.prototype.processingStarted = undefined;

/**
 * @member {Number} scriptFileId
 */
RunBody.prototype.scriptFileId = undefined;

/**
 * @member {Number} startInterval
 */
RunBody.prototype.startInterval = undefined;

/**
 * @member {String} status
 */
RunBody.prototype.status = undefined;

/**
 * @member {Number} successRate
 */
RunBody.prototype.successRate = undefined;

/**
 * @member {Number} testId
 */
RunBody.prototype.testId = undefined;

/**
 * @member {String} testMode
 */
RunBody.prototype.testMode = undefined;

/**
 * @member {String} testName
 */
RunBody.prototype.testName = undefined;

/**
 * @member {Date} updated
 */
RunBody.prototype.updated = undefined;

