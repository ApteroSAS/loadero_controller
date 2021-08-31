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
 * The TestIDCopyBody model module.
 * @module model/TestIDCopyBody
 * @version v0.32.1
 */
export class TestIDCopyBody {
  /**
   * Constructs a new <code>TestIDCopyBody</code>.
   * @alias module:model/TestIDCopyBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TestIDCopyBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestIDCopyBody} obj Optional instance to populate.
   * @return {module:model/TestIDCopyBody} The populated <code>TestIDCopyBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TestIDCopyBody();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
TestIDCopyBody.prototype.name = undefined;

