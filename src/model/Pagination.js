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
 * The Pagination model module.
 * @module model/Pagination
 * @version v0.32.1
 */
export class Pagination {
  /**
   * Constructs a new <code>Pagination</code>.
   * @alias module:model/Pagination
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pagination} obj Optional instance to populate.
   * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Pagination();
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('page'))
        obj.page = ApiClient.convertToType(data['page'], 'Number');
      if (data.hasOwnProperty('total_pages'))
        obj.totalPages = ApiClient.convertToType(data['total_pages'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} limit
 */
Pagination.prototype.limit = undefined;

/**
 * @member {Number} offset
 */
Pagination.prototype.offset = undefined;

/**
 * @member {Number} page
 */
Pagination.prototype.page = undefined;

/**
 * @member {Number} totalPages
 */
Pagination.prototype.totalPages = undefined;

