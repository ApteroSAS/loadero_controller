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
 * The VatInfo model module.
 * @module model/VatInfo
 * @version v0.32.1
 */
export class VatInfo {
  /**
   * Constructs a new <code>VatInfo</code>.
   * @alias module:model/VatInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VatInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VatInfo} obj Optional instance to populate.
   * @return {module:model/VatInfo} The populated <code>VatInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VatInfo();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} type
 */
VatInfo.prototype.type = undefined;

/**
 * @member {String} value
 */
VatInfo.prototype.value = undefined;

