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
 * Network is a concrete classificator value that is used to describe different network setting values. Network describes group of network conditions that simulate various network conditions for a single user and allow client to test app behaviour under changing network.
 * @export
 * @interface Network
 */
export interface Network {
    /**
     * 
     * @type {ClassificatorType}
     * @memberof Network
     */
    classificator?: any;
    /**
     * 
     * @type {string}
     * @memberof Network
     */
    description?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Network
     */
    disabled?: any;
    /**
     * 
     * @type {string}
     * @memberof Network
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof Network
     */
    value?: any;
}
