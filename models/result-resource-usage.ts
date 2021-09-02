/* tslint:disable */
/* eslint-disable */
/**
 * Loadero Controller
 * This application serves main Loadero's endpoints that can be used to manipulate test data and other services
 *
 * OpenAPI spec version: v0.32.1
 * Contact: support@loadero.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * ResultResourceUsage describes single result resource usage instance with JSON field descriptions.
 * @export
 * @interface ResultResourceUsage
 */
export interface ResultResourceUsage {
    /**
     * 
     * @type {number}
     * @memberof ResultResourceUsage
     */
    cpuAvailable?: any;
    /**
     * 
     * @type {number}
     * @memberof ResultResourceUsage
     */
    cpuUsage?: any;
    /**
     * 
     * @type {Date}
     * @memberof ResultResourceUsage
     */
    created?: any;
    /**
     * 
     * @type {number}
     * @memberof ResultResourceUsage
     */
    id?: any;
    /**
     * 
     * @type {number}
     * @memberof ResultResourceUsage
     */
    memoryAvailable?: any;
    /**
     * 
     * @type {number}
     * @memberof ResultResourceUsage
     */
    memoryUsage?: any;
    /**
     * 
     * @type {NetworkParams}
     * @memberof ResultResourceUsage
     */
    networkRx?: any;
    /**
     * 
     * @type {NetworkParams}
     * @memberof ResultResourceUsage
     */
    networkTx?: any;
    /**
     * 
     * @type {Date}
     * @memberof ResultResourceUsage
     */
    readTime?: any;
    /**
     * 
     * @type {number}
     * @memberof ResultResourceUsage
     */
    resultId?: any;
}