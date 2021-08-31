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
 * The AssertPrecondition model module.
 * @module model/AssertPrecondition
 * @version v0.32.1
 */
export class AssertPrecondition {
  /**
   * Constructs a new <code>AssertPrecondition</code>.
   * AssertPrecondition describes single assert precondition instance with JSON field descriptions.
   * @alias module:model/AssertPrecondition
   * @class
   * @param expected {String} 
   * @param operator {String} 
   * @param property {String} 
   */
  constructor(expected, operator, property) {
    this.expected = expected;
    this.operator = operator;
    this.property = property;
  }

  /**
   * Constructs a <code>AssertPrecondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssertPrecondition} obj Optional instance to populate.
   * @return {module:model/AssertPrecondition} The populated <code>AssertPrecondition</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AssertPrecondition();
      if (data.hasOwnProperty('assert_id'))
        obj.assertId = ApiClient.convertToType(data['assert_id'], 'Number');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('expected'))
        obj.expected = ApiClient.convertToType(data['expected'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('operator'))
        obj.operator = ApiClient.convertToType(data['operator'], 'String');
      if (data.hasOwnProperty('property'))
        obj.property = ApiClient.convertToType(data['property'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {Number} assertId
 */
AssertPrecondition.prototype.assertId = undefined;

/**
 * @member {Date} created
 */
AssertPrecondition.prototype.created = undefined;

/**
 * @member {String} expected
 */
AssertPrecondition.prototype.expected = undefined;

/**
 * @member {Number} id
 */
AssertPrecondition.prototype.id = undefined;

/**
 * @member {String} operator
 */
AssertPrecondition.prototype.operator = undefined;

/**
 * @member {String} property
 */
AssertPrecondition.prototype.property = undefined;

/**
 * @member {Date} updated
 */
AssertPrecondition.prototype.updated = undefined;

