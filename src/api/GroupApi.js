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
    define(['ApiClient', 'model/Body', 'model/ErrorResponse', 'model/Group', 'model/ValidationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body'), require('../model/ErrorResponse'), require('../model/Group'), require('../model/ValidationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.GroupApi = factory(root.LoaderoController.ApiClient, root.LoaderoController.Body, root.LoaderoController.ErrorResponse, root.LoaderoController.Group, root.LoaderoController.ValidationResponse);
  }
}(this, function(ApiClient, Body, ErrorResponse, Group, ValidationResponse) {
  'use strict';

  /**
   * Group service.
   * @module api/GroupApi
   * @version v0.32.1
   */

  /**
   * Constructs a new GroupApi. 
   * @alias module:api/GroupApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createGroup operation.
     * @callback module:api/GroupApi~createGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new group
     * This endpoint creates new group with given data.
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:model/Group} opts.group 
     * @param {module:api/GroupApi~createGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.createGroup = function(projectID, testID, opts, callback) {
      opts = opts || {};
      var postBody = opts['group'];

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling createGroup");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling createGroup");
      }


      var pathParams = {
        'projectID': projectID,
        'testID': testID
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
      var returnType = Group;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/groups/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/GroupApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete existing group
     * This endpoint deletes group. Test and group must be previously created
     * @param {Number} groupID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {module:api/GroupApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroup = function(groupID, projectID, testID, callback) {
      var postBody = null;

      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling deleteGroup");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling deleteGroup");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling deleteGroup");
      }


      var pathParams = {
        'groupID': groupID,
        'projectID': projectID,
        'testID': testID
      };
      var queryParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/groups/{groupID}/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the duplicateGroup operation.
     * @callback module:api/GroupApi~duplicateGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Duplicate existing group
     * This endpoint duplicates given group. If no copy name is provided an \"Copy of\" prefix will be applied to the group name. Test and group must be previously created.
     * @param {Number} groupID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body} opts.body 
     * @param {String} opts.describe 
     * @param {module:api/GroupApi~duplicateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.duplicateGroup = function(groupID, projectID, testID, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling duplicateGroup");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling duplicateGroup");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling duplicateGroup");
      }


      var pathParams = {
        'groupID': groupID,
        'projectID': projectID,
        'testID': testID
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
      var returnType = Group;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/groups/{groupID}/copy/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readAllGroups operation.
     * @callback module:api/GroupApi~readAllGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all existing groups for test
     * This endpoint retrieves all group info. Test must be previously created
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {Number} opts.offset 
     * @param {String} opts.describe 
     * @param {String} opts.filterName 
     * @param {String} opts.filterCountFrom 
     * @param {String} opts.filterCountTo 
     * @param {module:api/GroupApi~readAllGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.readAllGroups = function(projectID, testID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readAllGroups");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling readAllGroups");
      }


      var pathParams = {
        'projectID': projectID,
        'testID': testID
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'describe': opts['describe'],
        'filter_name': opts['filterName'],
        'filter_count_from': opts['filterCountFrom'],
        'filter_count_to': opts['filterCountTo'],
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/groups/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readGroup operation.
     * @callback module:api/GroupApi~readGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read group info
     * This endpoint retrieves group info. Test and group must be previously created
     * @param {Number} groupID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:api/GroupApi~readGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.readGroup = function(groupID, projectID, testID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling readGroup");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readGroup");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling readGroup");
      }


      var pathParams = {
        'groupID': groupID,
        'projectID': projectID,
        'testID': testID
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
      var returnType = Group;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/groups/{groupID}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroup operation.
     * @callback module:api/GroupApi~updateGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing group
     * This endpoint updates group with given properties. Test and group must be previously created
     * @param {Number} groupID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:model/Group} opts.group 
     * @param {module:api/GroupApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.updateGroup = function(groupID, projectID, testID, opts, callback) {
      opts = opts || {};
      var postBody = opts['group'];

      // verify the required parameter 'groupID' is set
      if (groupID === undefined || groupID === null) {
        throw new Error("Missing the required parameter 'groupID' when calling updateGroup");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling updateGroup");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling updateGroup");
      }


      var pathParams = {
        'groupID': groupID,
        'projectID': projectID,
        'testID': testID
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
      var returnType = Group;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/groups/{groupID}/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));