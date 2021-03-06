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
 * The ValidationResponse model module.
 * @module model/ValidationResponse
 * @version v0.32.1
 */
export class ValidationResponse {
  /**
   * Constructs a new <code>ValidationResponse</code>.
   * @alias module:model/ValidationResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidationResponse} obj Optional instance to populate.
   * @return {module:model/ValidationResponse} The populated <code>ValidationResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ValidationResponse();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], {'String': ['String']});
    }
    return obj;
  }
}

/**
 * Status code of error
 * @member {Number} code
 */
ValidationResponse.prototype.code = undefined;

/**
 * List of validation errors
 * @member {Object.<String, Array.<String>>} errors
 */
ValidationResponse.prototype.errors = undefined;

