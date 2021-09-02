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
 * @interface BillingInfo
 */
export interface BillingInfo {
    /**
     * 
     * @type {AddressInfo}
     * @memberof BillingInfo
     */
    billingAddress?: any;
    /**
     * 
     * @type {string}
     * @memberof BillingInfo
     */
    buyerKind?: any;
    /**
     * normalize indentation
     * @type {string}
     * @memberof BillingInfo
     */
    defaultPaymentMethod?: any;
    /**
     * normalize indentation
     * @type {Array&lt;BillingInvoice&gt;}
     * @memberof BillingInfo
     */
    invoices?: any;
    /**
     * 
     * @type {string}
     * @memberof BillingInfo
     */
    name?: any;
    /**
     * 
     * @type {BillingInvoice}
     * @memberof BillingInfo
     */
    nextInvoice?: any;
    /**
     * 
     * @type {Array&lt;PaymentMethod&gt;}
     * @memberof BillingInfo
     */
    paymentMethods?: any;
    /**
     * 
     * @type {number}
     * @memberof BillingInfo
     */
    subscriptionId?: any;
    /**
     * 
     * @type {VatInfo}
     * @memberof BillingInfo
     */
    vatInfo?: any;
}