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
    define(['ApiClient', 'model/Body', 'model/ErrorResponse', 'model/ParticipantBody', 'model/ValidationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body'), require('../model/ErrorResponse'), require('../model/ParticipantBody'), require('../model/ValidationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.ParticipantsApi = factory(root.LoaderoController.ApiClient, root.LoaderoController.Body, root.LoaderoController.ErrorResponse, root.LoaderoController.ParticipantBody, root.LoaderoController.ValidationResponse);
  }
}(this, function(ApiClient, Body, ErrorResponse, ParticipantBody, ValidationResponse) {
  'use strict';

  /**
   * Participants service.
   * @module api/ParticipantsApi
   * @version v0.32.1
   */

  /**
   * Constructs a new ParticipantsApi. 
   * @alias module:api/ParticipantsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createParticipant operation.
     * @callback module:api/ParticipantsApi~createParticipantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParticipantBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new participant.
     * This endpoint creates new participant with given properties.
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:model/ParticipantBody} opts.participant 
     * @param {module:api/ParticipantsApi~createParticipantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParticipantBody}
     */
    this.createParticipant = function(projectID, testID, opts, callback) {
      opts = opts || {};
      var postBody = opts['participant'];

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling createParticipant");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling createParticipant");
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParticipantBody;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/participants/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteParticipant operation.
     * @callback module:api/ParticipantsApi~deleteParticipantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete existing participant.
     * This endpoint deletes participant.
     * @param {Number} participantID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {module:api/ParticipantsApi~deleteParticipantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteParticipant = function(participantID, projectID, testID, callback) {
      var postBody = null;

      // verify the required parameter 'participantID' is set
      if (participantID === undefined || participantID === null) {
        throw new Error("Missing the required parameter 'participantID' when calling deleteParticipant");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling deleteParticipant");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling deleteParticipant");
      }


      var pathParams = {
        'participantID': participantID,
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/participants/{participantID}/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the duplicateParticipant operation.
     * @callback module:api/ParticipantsApi~duplicateParticipantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParticipantBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Duplicate existing participant
     * This endpoint duplicates given participant. If no copy name is provided an \"Copy of\" prefix will be applied to the participant name. Group and participant must be previously created.
     * @param {Number} participantID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {module:model/Body} opts.body 
     * @param {String} opts.describe 
     * @param {module:api/ParticipantsApi~duplicateParticipantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParticipantBody}
     */
    this.duplicateParticipant = function(participantID, projectID, testID, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'participantID' is set
      if (participantID === undefined || participantID === null) {
        throw new Error("Missing the required parameter 'participantID' when calling duplicateParticipant");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling duplicateParticipant");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling duplicateParticipant");
      }


      var pathParams = {
        'participantID': participantID,
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParticipantBody;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/participants/{participantID}/copy/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readAllParticipants operation.
     * @callback module:api/ParticipantsApi~readAllParticipantsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all existing participants for test.
     * This endpoint retrieves all participant info.
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {Number} opts.offset 
     * @param {String} opts.describe 
     * @param {String} opts.filterBrowser 
     * @param {String} opts.filterNetwork 
     * @param {String} opts.filterLocation 
     * @param {String} opts.filterMediaType 
     * @param {String} opts.filterVideoFeed 
     * @param {String} opts.filterAudioFeed 
     * @param {String} opts.filterName 
     * @param {String} opts.filterCountFrom 
     * @param {String} opts.filterCountTo 
     * @param {String} opts.filterComputeUnit 
     * @param {String} opts.filterHasGroup 
     * @param {String} opts.filterRecordAudio 
     * @param {module:api/ParticipantsApi~readAllParticipantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.readAllParticipants = function(projectID, testID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readAllParticipants");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling readAllParticipants");
      }


      var pathParams = {
        'projectID': projectID,
        'testID': testID
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'describe': opts['describe'],
        'filter_browser': opts['filterBrowser'],
        'filter_network': opts['filterNetwork'],
        'filter_location': opts['filterLocation'],
        'filter_media_type': opts['filterMediaType'],
        'filter_video_feed': opts['filterVideoFeed'],
        'filter_audio_feed': opts['filterAudioFeed'],
        'filter_name': opts['filterName'],
        'filter_count_from': opts['filterCountFrom'],
        'filter_count_to': opts['filterCountTo'],
        'filter_compute_unit': opts['filterComputeUnit'],
        'filter_has_group': opts['filterHasGroup'],
        'filter_record_audio': opts['filterRecordAudio'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/participants/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readParticipant operation.
     * @callback module:api/ParticipantsApi~readParticipantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParticipantBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get existing participant.
     * This endpoint retrieves participant info.
     * @param {Number} participantID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:api/ParticipantsApi~readParticipantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParticipantBody}
     */
    this.readParticipant = function(participantID, projectID, testID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'participantID' is set
      if (participantID === undefined || participantID === null) {
        throw new Error("Missing the required parameter 'participantID' when calling readParticipant");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readParticipant");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling readParticipant");
      }


      var pathParams = {
        'participantID': participantID,
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParticipantBody;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/participants/{participantID}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateParticipant operation.
     * @callback module:api/ParticipantsApi~updateParticipantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParticipantBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing participant.
     * This endpoint updates participant with given properties.
     * @param {Number} participantID 
     * @param {Number} projectID 
     * @param {Number} testID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:model/ParticipantBody} opts.participant 
     * @param {module:api/ParticipantsApi~updateParticipantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParticipantBody}
     */
    this.updateParticipant = function(participantID, projectID, testID, opts, callback) {
      opts = opts || {};
      var postBody = opts['participant'];

      // verify the required parameter 'participantID' is set
      if (participantID === undefined || participantID === null) {
        throw new Error("Missing the required parameter 'participantID' when calling updateParticipant");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling updateParticipant");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling updateParticipant");
      }


      var pathParams = {
        'participantID': participantID,
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParticipantBody;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/participants/{participantID}/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
