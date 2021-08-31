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
 * The UpdateUserBody model module.
 * @module model/UpdateUserBody
 * @version v0.32.1
 */
export class UpdateUserBody {
  /**
   * Constructs a new <code>UpdateUserBody</code>.
   * UpdateUserBody describes the information needed for update account auth request.
   * @alias module:model/UpdateUserBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateUserBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateUserBody} obj Optional instance to populate.
   * @return {module:model/UpdateUserBody} The populated <code>UpdateUserBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateUserBody();
      if (data.hasOwnProperty('confirm_new_password'))
        obj.confirmNewPassword = ApiClient.convertToType(data['confirm_new_password'], 'String');
      if (data.hasOwnProperty('new_password'))
        obj.newPassword = ApiClient.convertToType(data['new_password'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('reset_password_token'))
        obj.resetPasswordToken = ApiClient.convertToType(data['reset_password_token'], 'String');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} confirmNewPassword
 */
UpdateUserBody.prototype.confirmNewPassword = undefined;

/**
 * @member {String} newPassword
 */
UpdateUserBody.prototype.newPassword = undefined;

/**
 * @member {String} password
 */
UpdateUserBody.prototype.password = undefined;

/**
 * @member {String} resetPasswordToken
 */
UpdateUserBody.prototype.resetPasswordToken = undefined;

/**
 * @member {String} username
 */
UpdateUserBody.prototype.username = undefined;

