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
 * 
 * @export
 * @interface ExtendedResult
 */
export interface ExtendedResult {
    /**
     * 
     * @type {MachineStats}
     * @memberof ExtendedResult
     */
    aggregatedMachineStatistics?: any;
    /**
     * 
     * @type {ArtifactsInfo}
     * @memberof ExtendedResult
     */
    artifacts?: any;
    /**
     * 
     * @type {Array&lt;ResultAssert&gt;}
     * @memberof ExtendedResult
     */
    asserts?: any;
    /**
     * 
     * @type {Date}
     * @memberof ExtendedResult
     */
    created?: any;
    /**
     * 
     * @type {Date}
     * @memberof ExtendedResult
     */
    end?: any;
    /**
     * 
     * @type {number}
     * @memberof ExtendedResult
     */
    id?: any;
    /**
     * 
     * @type {ResultLog}
     * @memberof ExtendedResult
     */
    logPaths?: any;
    /**
     * 
     * @type {Array&lt;ResultResourceUsage&gt;}
     * @memberof ExtendedResult
     */
    machineStats?: any;
    /**
     * 
     * @type {Metrics}
     * @memberof ExtendedResult
     */
    metrics?: any;
    /**
     * 
     * @type {RunParticipant}
     * @memberof ExtendedResult
     */
    participantDetails?: any;
    /**
     * 
     * @type {Params}
     * @memberof ExtendedResult
     */
    profileParams?: any;
    /**
     * 
     * @type {number}
     * @memberof ExtendedResult
     */
    runParticipantId?: any;
    /**
     * 
     * @type {string}
     * @memberof ExtendedResult
     */
    seleniumResult?: any;
    /**
     * 
     * @type {Date}
     * @memberof ExtendedResult
     */
    start?: any;
    /**
     * 
     * @type {string}
     * @memberof ExtendedResult
     */
    status?: any;
    /**
     * 
     * @type {Date}
     * @memberof ExtendedResult
     */
    updated?: any;
}
