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
 * NewPassword holds fields for new account password creation. Model is used for parsing incoming request for new account creation with account password.
 * @export
 * @interface NewPassword
 */
export interface NewPassword {
    /**
     * 
     * @type {string}
     * @memberof NewPassword
     */
    confirmPassword: any;
    /**
     * 
     * @type {string}
     * @memberof NewPassword
     */
    password: any;
}
