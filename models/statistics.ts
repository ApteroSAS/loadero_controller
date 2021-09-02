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
 * Statistics describes result resource usage statistics with JSON field descriptions.
 * @export
 * @interface Statistics
 */
export interface Statistics {
    /**
     * 
     * @type {number}
     * @memberof Statistics
     */
    cpuAvailable?: any;
    /**
     * 
     * @type {number}
     * @memberof Statistics
     */
    cpuUsage?: any;
    /**
     * 
     * @type {number}
     * @memberof Statistics
     */
    memoryAvailable?: any;
    /**
     * 
     * @type {number}
     * @memberof Statistics
     */
    memoryUsage?: any;
    /**
     * 
     * @type {NetworkStatistics}
     * @memberof Statistics
     */
    networkRx?: any;
    /**
     * 
     * @type {NetworkStatistics}
     * @memberof Statistics
     */
    networkTx?: any;
}
