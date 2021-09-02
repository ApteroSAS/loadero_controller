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
 * MachineStats consists of indicators about resource usage by the test execution.
 * @export
 * @interface MachineStats
 */
export interface MachineStats {
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    avg?: any;
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    max?: any;
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    min?: any;
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    perc25?: any;
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    perc50?: any;
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    perc75?: any;
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    perc95?: any;
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    perc99?: any;
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    relativeStdDev?: any;
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    stdDev?: any;
    /**
     * 
     * @type {Statistics}
     * @memberof MachineStats
     */
    total?: any;
}
