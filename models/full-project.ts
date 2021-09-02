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
 * fullProject describes single project instance with JSON field descriptions and additional subscription info.
 * @export
 * @interface FullProject
 */
export interface FullProject {
    /**
     * 
     * @type {string}
     * @memberof FullProject
     */
    accountRole?: any;
    /**
     * 
     * @type {number}
     * @memberof FullProject
     */
    awsInfoId?: any;
    /**
     * 
     * @type {ComputeUnitUsage}
     * @memberof FullProject
     */
    computeUnitUsage?: any;
    /**
     * 
     * @type {Date}
     * @memberof FullProject
     */
    created?: any;
    /**
     * 
     * @type {number}
     * @memberof FullProject
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof FullProject
     */
    language: any;
    /**
     * 
     * @type {number}
     * @memberof FullProject
     */
    memberCount?: any;
    /**
     * 
     * @type {string}
     * @memberof FullProject
     */
    name: any;
    /**
     * 
     * @type {Subscription}
     * @memberof FullProject
     */
    subscription?: any;
    /**
     * 
     * @type {number}
     * @memberof FullProject
     */
    subscriptionId?: any;
    /**
     * 
     * @type {boolean}
     * @memberof FullProject
     */
    trialExpired?: any;
    /**
     * 
     * @type {Date}
     * @memberof FullProject
     */
    updated?: any;
}
