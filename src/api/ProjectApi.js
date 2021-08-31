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
    define(['ApiClient', 'model/ErrorResponse', 'model/FullProject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/FullProject'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.ProjectApi = factory(root.LoaderoController.ApiClient, root.LoaderoController.ErrorResponse, root.LoaderoController.FullProject);
  }
}(this, function(ApiClient, ErrorResponse, FullProject) {
  'use strict';

  /**
   * Project service.
   * @module api/ProjectApi
   * @version v0.32.1
   */

  /**
   * Constructs a new ProjectApi. 
   * @alias module:api/ProjectApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the readProject operation.
     * @callback module:api/ProjectApi~readProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullProject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get existing project
     * This endpoint retrieves project info. Project must be previously created
     * @param {Number} projectID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:api/ProjectApi~readProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FullProject}
     */
    this.readProject = function(projectID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readProject");
      }


      var pathParams = {
        'projectID': projectID
      };
      var queryParams = {
        'describe': opts['describe'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FullProject;

      return this.apiClient.callApi(
        '/projects/{projectID}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
