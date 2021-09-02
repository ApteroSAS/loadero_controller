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
 * MetricPath defines joint path of different metric keys that lead to specific metric. Single metric path can have multiple children, forming a tree.
 * @export
 * @interface MetricPath
 */
export interface MetricPath {
    /**
     * 
     * @type {boolean}
     * @memberof MetricPath
     */
    _final?: any;
    /**
     * 
     * @type {number}
     * @memberof MetricPath
     */
    ID?: any;
    /**
     * 
     * @type {string}
     * @memberof MetricPath
     */
    key?: any;
    /**
     * 
     * @type {number}
     * @memberof MetricPath
     */
    parentID?: any;
}
