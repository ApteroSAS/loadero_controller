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
    define(['ApiClient', 'model/ErrorResponse', 'model/ExtendedResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/ExtendedResult'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.ProjectresultApi = factory(root.LoaderoController.ApiClient, root.LoaderoController.ErrorResponse, root.LoaderoController.ExtendedResult);
  }
}(this, function(ApiClient, ErrorResponse, ExtendedResult) {
  'use strict';

  /**
   * Projectresult service.
   * @module api/ProjectresultApi
   * @version v0.32.1
   */

  /**
   * Constructs a new ProjectresultApi. 
   * @alias module:api/ProjectresultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the readAllProjectResults operation.
     * @callback module:api/ProjectresultApi~readAllProjectResultsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read all project run results
     * This endpoint retrieves all project run results. Project, run must be previously created and run has to be finished in order to get results
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
     * @param {String} opts.filterStartFrom 
     * @param {String} opts.filterStartTo 
     * @param {String} opts.filterEndFrom 
     * @param {String} opts.filterEndTo 
     * @param {String} opts.filterStatus 
     * @param {String} opts.filterSeleniumResult 
     * @param {String} opts.filterDone 
     * @param {module:api/ProjectresultApi~readAllProjectResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.readAllProjectResults = function(runID, projectID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'runID' is set
      if (runID === undefined || runID === null) {
        throw new Error("Missing the required parameter 'runID' when calling readAllProjectResults");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readAllProjectResults");
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
        'filter_start_from': opts['filterStartFrom'],
        'filter_start_to': opts['filterStartTo'],
        'filter_end_from': opts['filterEndFrom'],
        'filter_end_to': opts['filterEndTo'],
        'filter_status': opts['filterStatus'],
        'filter_selenium_result': opts['filterSeleniumResult'],
        'filter_done': opts['filterDone'],
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
        '/projects/{projectID}/runs/{runID}/results/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readProjectResult operation.
     * @callback module:api/ProjectresultApi~readProjectResultCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExtendedResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read single project run result
     * This endpoint retrieves single project run result info. Project, run and result must be previously created
     * @param {Number} resultID 
     * @param {Number} runID 
     * @param {Number} projectID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:api/ProjectresultApi~readProjectResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExtendedResult}
     */
    this.readProjectResult = function(resultID, runID, projectID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'resultID' is set
      if (resultID === undefined || resultID === null) {
        throw new Error("Missing the required parameter 'resultID' when calling readProjectResult");
      }

      // verify the required parameter 'runID' is set
      if (runID === undefined || runID === null) {
        throw new Error("Missing the required parameter 'runID' when calling readProjectResult");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readProjectResult");
      }


      var pathParams = {
        'resultID': resultID,
        'runID': runID,
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ExtendedResult;

      return this.apiClient.callApi(
        '/projects/{projectID}/runs/{runID}/results/{resultID}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readProjectResultStatistics operation.
     * @callback module:api/ProjectresultApi~readProjectResultStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read all project result statistics
     * This endpoint retrieves all project result statisctics. Project and run must be previously created
     * @param {Number} runID 
     * @param {Number} projectID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:api/ProjectresultApi~readProjectResultStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.readProjectResultStatistics = function(runID, projectID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'runID' is set
      if (runID === undefined || runID === null) {
        throw new Error("Missing the required parameter 'runID' when calling readProjectResultStatistics");
      }

      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readProjectResultStatistics");
      }


      var pathParams = {
        'runID': runID,
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/projects/{projectID}/runs/{runID}/results/statistics/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
