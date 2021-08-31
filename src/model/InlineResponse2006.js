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
import {AssertPrecondition} from './AssertPrecondition';
import {Filterer} from './Filterer';
import {Pagination} from './Pagination';

/**
 * The InlineResponse2006 model module.
 * @module model/InlineResponse2006
 * @version v0.32.1
 */
export class InlineResponse2006 {
  /**
   * Constructs a new <code>InlineResponse2006</code>.
   * @alias module:model/InlineResponse2006
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2006();
      if (data.hasOwnProperty('filter'))
        obj.filter = Filterer.constructFromObject(data['filter']);
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
      if (data.hasOwnProperty('results'))
        obj.results = ApiClient.convertToType(data['results'], [AssertPrecondition]);
    }
    return obj;
  }
}

/**
 * @member {module:model/Filterer} filter
 */
InlineResponse2006.prototype.filter = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
InlineResponse2006.prototype.pagination = undefined;

/**
 * @member {Array.<module:model/AssertPrecondition>} results
 */
InlineResponse2006.prototype.results = undefined;
