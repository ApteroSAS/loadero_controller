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
import {ErrorResponse} from '../model/ErrorResponse';
import {InlineResponse200} from '../model/InlineResponse200';
import {Run} from '../model/Run';
import {RunBody} from '../model/RunBody';

/**
* Run service.
* @module api/RunApi
* @version v0.32.1
*/
export class RunApi {

    /**
    * Constructs a new RunApi. 
    * @alias module:api/RunApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createTestRun operation.
     * @callback moduleapi/RunApi~createTestRunCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Run{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create and launch new test run
     * This endpoint starts test execution. Project and test must be previously created
     * @param {Number} testID 
     * @param {Number} projectID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:api/RunApi~createTestRunCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createTestRun(testID, projectID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling createTestRun");
      }
      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling createTestRun");
      }

      let pathParams = {
        'testID': testID,'projectID': projectID
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
      let returnType = Run;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/runs/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readAllTestRuns operation.
     * @callback moduleapi/RunApi~readAllTestRunsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all existing test runs for test
     * This endpoint retrieves all test run info. Project and test must be previously created
     * @param {Number} testID 
     * @param {Number} projectID 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {Number} opts.offset 
     * @param {String} opts.describe 
     * @param {String} opts.filterTestName 
     * @param {String} opts.filterStartedFrom 
     * @param {String} opts.filterStartedTo 
     * @param {String} opts.filterFinishedFrom 
     * @param {String} opts.filterFinishedTo 
     * @param {String} opts.filterExecutionStartedFrom 
     * @param {String} opts.filterExecutionStartedTo 
     * @param {String} opts.filterExecutionFinishedFrom 
     * @param {String} opts.filterExecutionFinishedTo 
     * @param {String} opts.filterIncrementStrategy 
     * @param {String} opts.filterStatus 
     * @param {String} opts.filterTestMode 
     * @param {String} opts.filterStartIntervalFrom 
     * @param {String} opts.filterStartIntervalTo 
     * @param {String} opts.filterParticipantTimeoutFrom 
     * @param {String} opts.filterParticipantTimeoutTo 
     * @param {String} opts.filterActive 
     * @param {module:api/RunApi~readAllTestRunsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    readAllTestRuns(testID, projectID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling readAllTestRuns");
      }
      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readAllTestRuns");
      }

      let pathParams = {
        'testID': testID,'projectID': projectID
      };
      let queryParams = {
        'limit': opts['limit'],'offset': opts['offset'],'describe': opts['describe'],'filter_test_name': opts['filterTestName'],'filter_started_from': opts['filterStartedFrom'],'filter_started_to': opts['filterStartedTo'],'filter_finished_from': opts['filterFinishedFrom'],'filter_finished_to': opts['filterFinishedTo'],'filter_execution_started_from': opts['filterExecutionStartedFrom'],'filter_execution_started_to': opts['filterExecutionStartedTo'],'filter_execution_finished_from': opts['filterExecutionFinishedFrom'],'filter_execution_finished_to': opts['filterExecutionFinishedTo'],'filter_increment_strategy': opts['filterIncrementStrategy'],'filter_status': opts['filterStatus'],'filter_test_mode': opts['filterTestMode'],'filter_start_interval_from': opts['filterStartIntervalFrom'],'filter_start_interval_to': opts['filterStartIntervalTo'],'filter_participant_timeout_from': opts['filterParticipantTimeoutFrom'],'filter_participant_timeout_to': opts['filterParticipantTimeoutTo'],'filter_active': opts['filterActive']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/runs/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readTestRun operation.
     * @callback moduleapi/RunApi~readTestRunCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RunBody{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read test run info
     * This endpoint retrieves test run info. Project, test and run must be previously created
     * @param {Number} runID 
     * @param {Number} testID 
     * @param {Number} projectID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.describe 
     * @param {module:api/RunApi~readTestRunCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    readTestRun(runID, testID, projectID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'runID' is set
      if (runID === undefined || runID === null) {
        throw new Error("Missing the required parameter 'runID' when calling readTestRun");
      }
      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling readTestRun");
      }
      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling readTestRun");
      }

      let pathParams = {
        'runID': runID,'testID': testID,'projectID': projectID
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
      let returnType = RunBody;

      return this.apiClient.callApi(
        '/projects/{projectID}/tests/{testID}/runs/{runID}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the stopTestRun operation.
     * @callback moduleapi/RunApi~stopTestRunCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop test run
     * This endpoint stops test run. Project, test and run must be previously created. Test run needs to be in progress.
     * @param {Number} runID 
     * @param {Number} testID 
     * @param {Number} projectID 
     * @param {module:api/RunApi~stopTestRunCallback} callback The callback function, accepting three arguments: error, data, response
     */
    stopTestRun(runID, testID, projectID, callback) {
      
      let postBody = null;
      // verify the required parameter 'runID' is set
      if (runID === undefined || runID === null) {
        throw new Error("Missing the required parameter 'runID' when calling stopTestRun");
      }
      // verify the required parameter 'testID' is set
      if (testID === undefined || testID === null) {
        throw new Error("Missing the required parameter 'testID' when calling stopTestRun");
      }
      // verify the required parameter 'projectID' is set
      if (projectID === undefined || projectID === null) {
        throw new Error("Missing the required parameter 'projectID' when calling stopTestRun");
      }

      let pathParams = {
        'runID': runID,'testID': testID,'projectID': projectID
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
        '/projects/{projectID}/tests/{testID}/runs/{runID}/stop/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}