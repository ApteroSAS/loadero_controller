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
import {ClassificatorType} from './ClassificatorType';

/**
 * The Network model module.
 * @module model/Network
 * @version v0.32.1
 */
export class Network {
  /**
   * Constructs a new <code>Network</code>.
   * Network is a concrete classificator value that is used to describe different network setting values. Network describes group of network conditions that simulate various network conditions for a single user and allow client to test app behaviour under changing network.
   * @alias module:model/Network
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Network</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Network} obj Optional instance to populate.
   * @return {module:model/Network} The populated <code>Network</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Network();
      if (data.hasOwnProperty('classificator'))
        obj.classificator = ClassificatorType.constructFromObject(data['classificator']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('disabled'))
        obj.disabled = ApiClient.convertToType(data['disabled'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/ClassificatorType} classificator
 */
Network.prototype.classificator = undefined;

/**
 * @member {String} description
 */
Network.prototype.description = undefined;

/**
 * @member {Boolean} disabled
 */
Network.prototype.disabled = undefined;

/**
 * @member {String} name
 */
Network.prototype.name = undefined;

/**
 * @member {String} value
 */
Network.prototype.value = undefined;

