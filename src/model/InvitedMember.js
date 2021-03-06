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
 * The InvitedMember model module.
 * @module model/InvitedMember
 * @version v0.32.1
 */
export class InvitedMember {
  /**
   * Constructs a new <code>InvitedMember</code>.
   * InvitedMember describes single project invited member instance with JSON field descriptions.
   * @alias module:model/InvitedMember
   * @class
   * @param email {String} 
   * @param role {String} 
   */
  constructor(email, role) {
    this.email = email;
    this.role = role;
  }

  /**
   * Constructs a <code>InvitedMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvitedMember} obj Optional instance to populate.
   * @return {module:model/InvitedMember} The populated <code>InvitedMember</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InvitedMember();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('project_id'))
        obj.projectId = ApiClient.convertToType(data['project_id'], 'Number');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {Date} created
 */
InvitedMember.prototype.created = undefined;

/**
 * @member {String} email
 */
InvitedMember.prototype.email = undefined;

/**
 * @member {Number} id
 */
InvitedMember.prototype.id = undefined;

/**
 * @member {Number} projectId
 */
InvitedMember.prototype.projectId = undefined;

/**
 * @member {String} role
 */
InvitedMember.prototype.role = undefined;

/**
 * @member {Date} updated
 */
InvitedMember.prototype.updated = undefined;

