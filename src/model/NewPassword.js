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
    root.LoaderoController.NewPassword = factory(root.LoaderoController.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NewPassword model module.
   * @module model/NewPassword
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>NewPassword</code>.
   * NewPassword holds fields for new account password creation. Model is used for parsing incoming request for new account creation with account password.
   * @alias module:model/NewPassword
   * @class
   * @param confirmPassword {String} 
   * @param password {String} 
   */
  var exports = function(confirmPassword, password) {
    this.confirmPassword = confirmPassword;
    this.password = password;
  };

  /**
   * Constructs a <code>NewPassword</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewPassword} obj Optional instance to populate.
   * @return {module:model/NewPassword} The populated <code>NewPassword</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('confirm_password'))
        obj.confirmPassword = ApiClient.convertToType(data['confirm_password'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} confirmPassword
   */
  exports.prototype.confirmPassword = undefined;

  /**
   * @member {String} password
   */
  exports.prototype.password = undefined;


  return exports;

}));