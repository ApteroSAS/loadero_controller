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
 * The Common model module.
 * @module model/Common
 * @version v0.32.1
 */
export class Common {
  /**
   * Constructs a new <code>Common</code>.
   * @alias module:model/Common
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
   * Constructs a <code>Common</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Common} obj Optional instance to populate.
   * @return {module:model/Common} The populated <code>Common</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Common();
      if (data.hasOwnProperty('expected'))
        obj.expected = ApiClient.convertToType(data['expected'], 'String');
      if (data.hasOwnProperty('operator'))
        obj.operator = ApiClient.convertToType(data['operator'], 'String');
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} expected
 */
Common.prototype.expected = undefined;

/**
 * @member {String} operator
 */
Common.prototype.operator = undefined;

/**
 * @member {String} path
 */
Common.prototype.path = undefined;

