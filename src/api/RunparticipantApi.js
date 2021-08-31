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
    define(['ApiClient', 'model/ErrorResponse', 'model/RunParticipantBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/RunParticipantBody'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.RunparticipantApi = factory(root.LoaderoController.ApiClient, root.LoaderoController.ErrorResponse, root.LoaderoController.RunParticipantBody);
  }
}(this, function(ApiClient, ErrorResponse, RunParticipantBody) {
  'use strict';

  /**
   * Runparticipant service.
   * @module api/RunparticipantApi
   * @version v0.32.1
   */

  /**
   * Constructs a new RunparticipantApi. 
   * @alias module:api/RunparticipantApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the readAllTestRunParticipants operation.
     * @callback module:api/RunparticipantApi~readAllTestRunParticipantsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all existing test run participants for run
     * This endpoint retrieves all test run participant info.
     * @param {Number} runID 
     * @param {Number} testID 
     * @param {Number} projectID 
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
     * @param {String} opts.filterNumFrom 
     * @param {String} opts.filterNumTo 
     * @param {String} opts.filterGroupName 
     * @param {String} opts.filterGroupNumFrom 
     * @param {String} opts.filterGroupNumTo 
     * @param {String} opts.filterRecordAudio 
     * @param {module:api/RunparticipantApi~readAllTestRunParticipantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.readAllTestRunParticipants = function(runID, testID, projectID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'runID' is set
      if (runID === undefined || runID === null) {
        throw new Error("Missing the required parameter 'runID' when calling readAllTestRunParticipants");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling readAllTestRunParticipants");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readAllTestRunParticipants");
      }


      var pathParams = {
        'runID': runID,
        'testID': testID,
        'projectID': projectID
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
        'filter_num_from': opts['filterNumFrom'],
        'filter_num_to': opts['filterNumTo'],
        'filter_group_name': opts['filterGroupName'],
        'filter_group_num_from': opts['filterGroupNumFrom'],
        'filter_group_num_to': opts['filterGroupNumTo'],
        'filter_record_audio': opts['filterRecordAudio'],
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
        '/projects/{projectID}/tests/{testID}/runs/{runID}/participants/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readTestRunParticipant operation.
     * @callback module:api/RunparticipantApi~readTestRunParticipantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RunParticipantBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get existing test run participant
     * This endpoint retrieves test run participant info. Run, run participant must be previously created
     * @param {Number} runParticipantID 
     * @param {Number} runID 
     * @param {Number} testID 
     * @param {Number} projectID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:api/RunparticipantApi~readTestRunParticipantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RunParticipantBody}
     */
    this.readTestRunParticipant = function(runParticipantID, runID, testID, projectID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'runParticipantID' is set
      if (runParticipantID === undefined || runParticipantID === null) {
        throw new Error("Missing the required parameter 'runParticipantID' when calling readTestRunParticipant");
      }

      // verify the required parameter 'runID' is set
      if (runID === undefined || runID === null) {
        throw new Error("Missing the required parameter 'runID' when calling readTestRunParticipant");
      }

      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling readTestRunParticipant");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readTestRunParticipant");
      }


      var pathParams = {
        'runParticipantID': runParticipantID,
        'runID': runID,
        'testID': testID,
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
      var returnType = RunParticipantBody;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/runs/{runID}/participants/{runParticipantID}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
