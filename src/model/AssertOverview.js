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
import {RunAssertPrecondition} from './RunAssertPrecondition';

/**
 * The AssertOverview model module.
 * @module model/AssertOverview
 * @version v0.32.1
 */
export class AssertOverview {
  /**
   * Constructs a new <code>AssertOverview</code>.
   * @alias module:model/AssertOverview
   * @class
   * @param expected {String} 
   * @param operator {String} 
   * @param path {String} 
   */
  constructor(expected, operator, path) {
    this.expected = expected;
    this.operator = operator;
    this.path = path;
  }

  /**
   * Constructs a <code>AssertOverview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssertOverview} obj Optional instance to populate.
   * @return {module:model/AssertOverview} The populated <code>AssertOverview</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AssertOverview();
      if (data.hasOwnProperty('expected'))
        obj.expected = ApiClient.convertToType(data['expected'], 'String');
      if (data.hasOwnProperty('fail'))
        obj.fail = ApiClient.convertToType(data['fail'], 'Number');
      if (data.hasOwnProperty('operator'))
        obj.operator = ApiClient.convertToType(data['operator'], 'String');
      if (data.hasOwnProperty('pass'))
        obj.pass = ApiClient.convertToType(data['pass'], 'Number');
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
      if (data.hasOwnProperty('preconditions'))
        obj.preconditions = ApiClient.convertToType(data['preconditions'], [RunAssertPrecondition]);
      if (data.hasOwnProperty('run_assert_id'))
        obj.runAssertId = ApiClient.convertToType(data['run_assert_id'], 'Number');
      if (data.hasOwnProperty('skip'))
        obj.skip = ApiClient.convertToType(data['skip'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} expected
 */
AssertOverview.prototype.expected = undefined;

/**
 * @member {Number} fail
 */
AssertOverview.prototype.fail = undefined;

/**
 * @member {String} operator
 */
AssertOverview.prototype.operator = undefined;

/**
 * @member {Number} pass
 */
AssertOverview.prototype.pass = undefined;

/**
 * @member {String} path
 */
AssertOverview.prototype.path = undefined;

/**
 * @member {Array.<module:model/RunAssertPrecondition>} preconditions
 */
AssertOverview.prototype.preconditions = undefined;

/**
 * @member {Number} runAssertId
 */
AssertOverview.prototype.runAssertId = undefined;

/**
 * @member {Number} skip
 */
AssertOverview.prototype.skip = undefined;

/**
 * @member {String} status
 */
AssertOverview.prototype.status = undefined;

