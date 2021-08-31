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
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.Subscription = factory(root.LoaderoController.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Subscription model module.
   * @module model/Subscription
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>Subscription</code>.
   * Subscription describes single subscription instance with JSON field descriptions.
   * @alias module:model/Subscription
   * @class
   * @param billingEmail {String} 
   * @param paymentPlan {String} 
   */
  var exports = function(billingEmail, paymentPlan) {
    this.billingEmail = billingEmail;
    this.paymentPlan = paymentPlan;
  };

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('activation_date'))
        obj.activationDate = ApiClient.convertToType(data['activation_date'], 'Date');
      if (data.hasOwnProperty('billing_email'))
        obj.billingEmail = ApiClient.convertToType(data['billing_email'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('early_subscriber'))
        obj.earlySubscriber = ApiClient.convertToType(data['early_subscriber'], 'Boolean');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('payment_plan'))
        obj.paymentPlan = ApiClient.convertToType(data['payment_plan'], 'String');
      if (data.hasOwnProperty('payment_status'))
        obj.paymentStatus = ApiClient.convertToType(data['payment_status'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }

  /**
   * @member {Date} activationDate
   */
  exports.prototype.activationDate = undefined;

  /**
   * @member {String} billingEmail
   */
  exports.prototype.billingEmail = undefined;

  /**
   * @member {Date} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Boolean} earlySubscriber
   */
  exports.prototype.earlySubscriber = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} paymentPlan
   */
  exports.prototype.paymentPlan = undefined;

  /**
   * @member {String} paymentStatus
   */
  exports.prototype.paymentStatus = undefined;

  /**
   * @member {Date} updated
   */
  exports.prototype.updated = undefined;


  return exports;

}));
