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
    root.LoaderoController.ProjectrunparticipantApi = factory(root.LoaderoController.ApiClient, root.LoaderoController.ErrorResponse, root.LoaderoController.RunParticipantBody);
  }
}(this, function(ApiClient, ErrorResponse, RunParticipantBody) {
  'use strict';

  /**
   * Projectrunparticipant service.
   * @module api/ProjectrunparticipantApi
   * @version v0.32.1
   */

  /**
   * Constructs a new ProjectrunparticipantApi. 
   * @alias module:api/ProjectrunparticipantApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the readAllProjectRunParticipants operation.
     * @callback module:api/ProjectrunparticipantApi~readAllProjectRunParticipantsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all existing project run participants for run
     * This endpoint retrieves all project run participant info.
     * @param {Number} runID 
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
     * @param {module:api/ProjectrunparticipantApi~readAllProjectRunParticipantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.readAllProjectRunParticipants = function(runID, projectID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'runID' is set
      if (runID === undefined || runID === null) {
        throw new Error("Missing the required parameter 'runID' when calling readAllProjectRunParticipants");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readAllProjectRunParticipants");
      }


      var pathParams = {
        'runID': runID,
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/projects/{projectID}/runs/{runID}/participants/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readProjectRunParticipant operation.
     * @callback module:api/ProjectrunparticipantApi~readProjectRunParticipantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RunParticipantBody} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get existing project run participant
     * This endpoint retrieves project run participant info. Run, run participant must be previously created
     * @param {Number} runParticipantID 
     * @param {Number} runID 
     * @param {Number} projectID 
     * @param {module:api/ProjectrunparticipantApi~readProjectRunParticipantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RunParticipantBody}
     */
    this.readProjectRunParticipant = function(runParticipantID, runID, projectID, callback) {
      var postBody = null;

      // verify the required parameter 'runParticipantID' is set
      if (runParticipantID === undefined || runParticipantID === null) {
        throw new Error("Missing the required parameter 'runParticipantID' when calling readProjectRunParticipant");
      }

      // verify the required parameter 'runID' is set
      if (runID === undefined || runID === null) {
        throw new Error("Missing the required parameter 'runID' when calling readProjectRunParticipant");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readProjectRunParticipant");
      }


      var pathParams = {
        'runParticipantID': runParticipantID,
        'runID': runID,
        'projectID': projectID
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
      var returnType = RunParticipantBody;

      return this.apiClient.callApi(
        '/projects/{projectID}/runs/{runID}/participants/{runParticipantID}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
