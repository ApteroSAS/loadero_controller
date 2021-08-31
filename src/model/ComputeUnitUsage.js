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
 * The ComputeUnitUsage model module.
 * @module model/ComputeUnitUsage
 * @version v0.32.1
 */
export class ComputeUnitUsage {
  /**
   * Constructs a new <code>ComputeUnitUsage</code>.
   * @alias module:model/ComputeUnitUsage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ComputeUnitUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ComputeUnitUsage} obj Optional instance to populate.
   * @return {module:model/ComputeUnitUsage} The populated <code>ComputeUnitUsage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ComputeUnitUsage();
      if (data.hasOwnProperty('included'))
        obj.included = ApiClient.convertToType(data['included'], 'Number');
      if (data.hasOwnProperty('used'))
        obj.used = ApiClient.convertToType(data['used'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} included
 */
ComputeUnitUsage.prototype.included = undefined;

/**
 * @member {Number} used
 */
ComputeUnitUsage.prototype.used = undefined;

