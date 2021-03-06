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
import {ApiClient} from "../ApiClient";
import {Assert} from '../model/Assert';
import {ErrorResponse} from '../model/ErrorResponse';
import {InlineResponse2005} from '../model/InlineResponse2005';
import {ValidationResponse} from '../model/ValidationResponse';

/**
* Assert service.
* @module api/AssertApi
* @version v0.32.1
*/
export class AssertApi {

    /**
    * Constructs a new AssertApi. 
    * @alias module:api/AssertApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createAssert operation.
     * @callback moduleapi/AssertApi~createAssertCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Assert{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new assert
     * This endpoint creates new assert with given data.
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {module:model/Assert} opts.body 
     * @param {String} opts.describe 
     * @param {module:api/AssertApi~createAssertCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createAssert(projectID, testID, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling createAssert");
      }
      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling createAssert");
      }

      let pathParams = {
        'projectID': projectID,'testID': testID
      };
      let queryParams = {
        'describe': opts['describe']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Assert;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/asserts/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteAssert operation.
     * @callback moduleapi/AssertApi~deleteAssertCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete existing assert
     * This endpoint deletes assert. Test and assert must be previously created
     * @param {Number} assertID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {module:api/AssertApi~deleteAssertCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAssert(assertID, projectID, testID, callback) {
      
      let postBody = null;
      // verify the required parameter 'assertID' is set
      if (assertID === undefined || assertID === null) {
        throw new Error("Missing the required parameter 'assertID' when calling deleteAssert");
      }
      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling deleteAssert");
      }
      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling deleteAssert");
      }

      let pathParams = {
        'assertID': assertID,'projectID': projectID,'testID': testID
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/asserts/{assertID}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the duplicateAssert operation.
     * @callback moduleapi/AssertApi~duplicateAssertCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Assert{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Duplicate existing assert
     * This endpoint duplicates given assert. Test and assert must be previously created.
     * @param {Number} assertID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:api/AssertApi~duplicateAssertCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    duplicateAssert(assertID, projectID, testID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'assertID' is set
      if (assertID === undefined || assertID === null) {
        throw new Error("Missing the required parameter 'assertID' when calling duplicateAssert");
      }
      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling duplicateAssert");
      }
      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling duplicateAssert");
      }

      let pathParams = {
        'assertID': assertID,'projectID': projectID,'testID': testID
      };
      let queryParams = {
        'describe': opts['describe']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Assert;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/asserts/{assertID}/copy/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readAllAsserts operation.
     * @callback moduleapi/AssertApi~readAllAssertsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all existing asserts for test
     * This endpoint retrieves all assert info. Test must be previously created
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {Number} opts.offset 
     * @param {String} opts.describe 
     * @param {String} opts.filterPath 
     * @param {String} opts.filterOperator 
     * @param {String} opts.filterExpected 
     * @param {module:api/AssertApi~readAllAssertsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    readAllAsserts(projectID, testID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readAllAsserts");
      }
      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling readAllAsserts");
      }

      let pathParams = {
        'projectID': projectID,'testID': testID
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'describe': opts['describe'],'filter_path': opts['filterPath'],'filter_operator': opts['filterOperator'],'filter_expected': opts['filterExpected']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/asserts/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readAssert operation.
     * @callback moduleapi/AssertApi~readAssertCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Assert{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read assert info
     * This endpoint retrieves assert info. Test and assert must be previously created
     * @param {Number} assertID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:api/AssertApi~readAssertCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    readAssert(assertID, projectID, testID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'assertID' is set
      if (assertID === undefined || assertID === null) {
        throw new Error("Missing the required parameter 'assertID' when calling readAssert");
      }
      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readAssert");
      }
      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling readAssert");
      }

      let pathParams = {
        'assertID': assertID,'projectID': projectID,'testID': testID
      };
      let queryParams = {
        'describe': opts['describe']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Assert;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/asserts/{assertID}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateAssert operation.
     * @callback moduleapi/AssertApi~updateAssertCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Assert{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing assert
     * This endpoint updates assert with given properties. Test and assert must be previously created
     * @param {Number} assertID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {module:model/Assert} opts.body 
     * @param {String} opts.describe 
     * @param {module:api/AssertApi~updateAssertCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateAssert(assertID, projectID, testID, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'assertID' is set
      if (assertID === undefined || assertID === null) {
        throw new Error("Missing the required parameter 'assertID' when calling updateAssert");
      }
      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling updateAssert");
      }
      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling updateAssert");
      }

      let pathParams = {
        'assertID': assertID,'projectID': projectID,'testID': testID
      };
      let queryParams = {
        'describe': opts['describe']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Assert;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/asserts/{assertID}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}