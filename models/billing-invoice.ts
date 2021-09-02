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
 * @interface BillingInvoice
 */
export interface BillingInvoice {
    /**
     * 
     * @type {number}
     * @memberof BillingInvoice
     */
    amount?: any;
    /**
     * 
     * @type {number}
     * @memberof BillingInvoice
     */
    computeUnits?: any;
    /**
     * 
     * @type {string}
     * @memberof BillingInvoice
     */
    currency?: any;
    /**
     * 
     * @type {string}
     * @memberof BillingInvoice
     */
    description?: any;
    /**
     * 
     * @type {string}
     * @memberof BillingInvoice
     */
    hostedInvoiceUrl?: any;
    /**
     * 
     * @type {number}
     * @memberof BillingInvoice
     */
    paidAt?: any;
    /**
     * 
     * @type {string}
     * @memberof BillingInvoice
     */
    pdf?: any;
    /**
     * 
     * @type {number}
     * @memberof BillingInvoice
     */
    periodEnd?: any;
    /**
     * 
     * @type {number}
     * @memberof BillingInvoice
     */
    periodStart?: any;
    /**
     * 
     * @type {string}
     * @memberof BillingInvoice
     */
    status?: any;
}