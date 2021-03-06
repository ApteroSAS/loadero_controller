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
import {AddressInfo} from './AddressInfo';
import {BillingInvoice} from './BillingInvoice';
import {PaymentMethod} from './PaymentMethod';
import {VatInfo} from './VatInfo';

/**
 * The BillingInfo model module.
 * @module model/BillingInfo
 * @version v0.32.1
 */
export class BillingInfo {
  /**
   * Constructs a new <code>BillingInfo</code>.
   * @alias module:model/BillingInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BillingInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingInfo} obj Optional instance to populate.
   * @return {module:model/BillingInfo} The populated <code>BillingInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BillingInfo();
      if (data.hasOwnProperty('billing_address'))
        obj.billingAddress = AddressInfo.constructFromObject(data['billing_address']);
      if (data.hasOwnProperty('buyer_kind'))
        obj.buyerKind = ApiClient.convertToType(data['buyer_kind'], 'String');
      if (data.hasOwnProperty('default_payment_method'))
        obj.defaultPaymentMethod = ApiClient.convertToType(data['default_payment_method'], 'String');
      if (data.hasOwnProperty('invoices'))
        obj.invoices = ApiClient.convertToType(data['invoices'], [BillingInvoice]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('next_invoice'))
        obj.nextInvoice = BillingInvoice.constructFromObject(data['next_invoice']);
      if (data.hasOwnProperty('payment_methods'))
        obj.paymentMethods = ApiClient.convertToType(data['payment_methods'], [PaymentMethod]);
      if (data.hasOwnProperty('subscription_id'))
        obj.subscriptionId = ApiClient.convertToType(data['subscription_id'], 'Number');
      if (data.hasOwnProperty('vat_info'))
        obj.vatInfo = VatInfo.constructFromObject(data['vat_info']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AddressInfo} billingAddress
 */
BillingInfo.prototype.billingAddress = undefined;

/**
 * @member {String} buyerKind
 */
BillingInfo.prototype.buyerKind = undefined;

/**
 * normalize indentation
 * @member {String} defaultPaymentMethod
 */
BillingInfo.prototype.defaultPaymentMethod = undefined;

/**
 * normalize indentation
 * @member {Array.<module:model/BillingInvoice>} invoices
 */
BillingInfo.prototype.invoices = undefined;

/**
 * @member {String} name
 */
BillingInfo.prototype.name = undefined;

/**
 * @member {module:model/BillingInvoice} nextInvoice
 */
BillingInfo.prototype.nextInvoice = undefined;

/**
 * @member {Array.<module:model/PaymentMethod>} paymentMethods
 */
BillingInfo.prototype.paymentMethods = undefined;

/**
 * @member {Number} subscriptionId
 */
BillingInfo.prototype.subscriptionId = undefined;

/**
 * @member {module:model/VatInfo} vatInfo
 */
BillingInfo.prototype.vatInfo = undefined;

