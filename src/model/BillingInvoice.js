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

/**
 * The BillingInvoice model module.
 * @module model/BillingInvoice
 * @version v0.32.1
 */
export class BillingInvoice {
  /**
   * Constructs a new <code>BillingInvoice</code>.
   * @alias module:model/BillingInvoice
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BillingInvoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingInvoice} obj Optional instance to populate.
   * @return {module:model/BillingInvoice} The populated <code>BillingInvoice</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BillingInvoice();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('compute_units'))
        obj.computeUnits = ApiClient.convertToType(data['compute_units'], 'Number');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('hosted_invoice_url'))
        obj.hostedInvoiceUrl = ApiClient.convertToType(data['hosted_invoice_url'], 'String');
      if (data.hasOwnProperty('paid_at'))
        obj.paidAt = ApiClient.convertToType(data['paid_at'], 'Number');
      if (data.hasOwnProperty('pdf'))
        obj.pdf = ApiClient.convertToType(data['pdf'], 'String');
      if (data.hasOwnProperty('period_end'))
        obj.periodEnd = ApiClient.convertToType(data['period_end'], 'Number');
      if (data.hasOwnProperty('period_start'))
        obj.periodStart = ApiClient.convertToType(data['period_start'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} amount
 */
BillingInvoice.prototype.amount = undefined;

/**
 * @member {Number} computeUnits
 */
BillingInvoice.prototype.computeUnits = undefined;

/**
 * @member {String} currency
 */
BillingInvoice.prototype.currency = undefined;

/**
 * @member {String} description
 */
BillingInvoice.prototype.description = undefined;

/**
 * @member {String} hostedInvoiceUrl
 */
BillingInvoice.prototype.hostedInvoiceUrl = undefined;

/**
 * @member {Number} paidAt
 */
BillingInvoice.prototype.paidAt = undefined;

/**
 * @member {String} pdf
 */
BillingInvoice.prototype.pdf = undefined;

/**
 * @member {Number} periodEnd
 */
BillingInvoice.prototype.periodEnd = undefined;

/**
 * @member {Number} periodStart
 */
BillingInvoice.prototype.periodStart = undefined;

/**
 * @member {String} status
 */
BillingInvoice.prototype.status = undefined;

