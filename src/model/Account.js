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
 * The Account model module.
 * @module model/Account
 * @version v0.32.1
 */
export class Account {
  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @class
   * @param email {String} 
   * @param firstName {String} 
   * @param lastName {String} 
   */
  constructor(email, firstName, lastName) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Account();
      if (data.hasOwnProperty('avatar'))
        obj.avatar = ApiClient.convertToType(data['avatar'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('last_login'))
        obj.lastLogin = ApiClient.convertToType(data['last_login'], 'Date');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('superuser'))
        obj.superuser = ApiClient.convertToType(data['superuser'], 'Boolean');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {String} avatar
 */
Account.prototype.avatar = undefined;

/**
 * @member {Date} created
 */
Account.prototype.created = undefined;

/**
 * @member {String} email
 */
Account.prototype.email = undefined;

/**
 * @member {String} firstName
 */
Account.prototype.firstName = undefined;

/**
 * @member {Number} id
 */
Account.prototype.id = undefined;

/**
 * @member {Date} lastLogin
 */
Account.prototype.lastLogin = undefined;

/**
 * @member {String} lastName
 */
Account.prototype.lastName = undefined;

/**
 * @member {Boolean} superuser
 */
Account.prototype.superuser = undefined;

/**
 * @member {Date} updated
 */
Account.prototype.updated = undefined;

