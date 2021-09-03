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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ErrorResponse } from '../models';
import { InlineResponse200 } from '../models';
import { Run } from '../models';
import { RunBody } from '../models';
/**
 * RunApi - axios parameter creator
 * @export
 */
export const RunApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint starts test execution. Project and test must be previously created
         * @summary Create and launch new test run
         * @param {number} testID 
         * @param {number} projectID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTestRun: async (testID: number, projectID: number, describe?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'testID' is not null or undefined
            if (testID === null || testID === undefined) {
                throw new RequiredError('testID','Required parameter testID was null or undefined when calling createTestRun.');
            }
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling createTestRun.');
            }
            const localVarPath = `/projects/{projectID}/tests/{testID}/runs/`
                .replace(`{${"testID"}}`, encodeURIComponent(String(testID)))
                .replace(`{${"projectID"}}`, encodeURIComponent(String(projectID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (describe !== undefined) {
                localVarQueryParameter['describe'] = describe;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint retrieves all test run info. Project and test must be previously created
         * @summary Get all existing test runs for test
         * @param {number} testID 
         * @param {number} projectID 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [describe] 
         * @param {string} [filterTestName] 
         * @param {string} [filterStartedFrom] 
         * @param {string} [filterStartedTo] 
         * @param {string} [filterFinishedFrom] 
         * @param {string} [filterFinishedTo] 
         * @param {string} [filterExecutionStartedFrom] 
         * @param {string} [filterExecutionStartedTo] 
         * @param {string} [filterExecutionFinishedFrom] 
         * @param {string} [filterExecutionFinishedTo] 
         * @param {string} [filterIncrementStrategy] 
         * @param {string} [filterStatus] 
         * @param {string} [filterTestMode] 
         * @param {string} [filterStartIntervalFrom] 
         * @param {string} [filterStartIntervalTo] 
         * @param {string} [filterParticipantTimeoutFrom] 
         * @param {string} [filterParticipantTimeoutTo] 
         * @param {string} [filterActive] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readAllTestRuns: async (testID: number, projectID: number, limit?: number, offset?: number, describe?: string, filterTestName?: string, filterStartedFrom?: string, filterStartedTo?: string, filterFinishedFrom?: string, filterFinishedTo?: string, filterExecutionStartedFrom?: string, filterExecutionStartedTo?: string, filterExecutionFinishedFrom?: string, filterExecutionFinishedTo?: string, filterIncrementStrategy?: string, filterStatus?: string, filterTestMode?: string, filterStartIntervalFrom?: string, filterStartIntervalTo?: string, filterParticipantTimeoutFrom?: string, filterParticipantTimeoutTo?: string, filterActive?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'testID' is not null or undefined
            if (testID === null || testID === undefined) {
                throw new RequiredError('testID','Required parameter testID was null or undefined when calling readAllTestRuns.');
            }
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling readAllTestRuns.');
            }
            const localVarPath = `/projects/{projectID}/tests/{testID}/runs/`
                .replace(`{${"testID"}}`, encodeURIComponent(String(testID)))
                .replace(`{${"projectID"}}`, encodeURIComponent(String(projectID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (describe !== undefined) {
                localVarQueryParameter['describe'] = describe;
            }

            if (filterTestName !== undefined) {
                localVarQueryParameter['filter_test_name'] = filterTestName;
            }

            if (filterStartedFrom !== undefined) {
                localVarQueryParameter['filter_started_from'] = filterStartedFrom;
            }

            if (filterStartedTo !== undefined) {
                localVarQueryParameter['filter_started_to'] = filterStartedTo;
            }

            if (filterFinishedFrom !== undefined) {
                localVarQueryParameter['filter_finished_from'] = filterFinishedFrom;
            }

            if (filterFinishedTo !== undefined) {
                localVarQueryParameter['filter_finished_to'] = filterFinishedTo;
            }

            if (filterExecutionStartedFrom !== undefined) {
                localVarQueryParameter['filter_execution_started_from'] = filterExecutionStartedFrom;
            }

            if (filterExecutionStartedTo !== undefined) {
                localVarQueryParameter['filter_execution_started_to'] = filterExecutionStartedTo;
            }

            if (filterExecutionFinishedFrom !== undefined) {
                localVarQueryParameter['filter_execution_finished_from'] = filterExecutionFinishedFrom;
            }

            if (filterExecutionFinishedTo !== undefined) {
                localVarQueryParameter['filter_execution_finished_to'] = filterExecutionFinishedTo;
            }

            if (filterIncrementStrategy !== undefined) {
                localVarQueryParameter['filter_increment_strategy'] = filterIncrementStrategy;
            }

            if (filterStatus !== undefined) {
                localVarQueryParameter['filter_status'] = filterStatus;
            }

            if (filterTestMode !== undefined) {
                localVarQueryParameter['filter_test_mode'] = filterTestMode;
            }

            if (filterStartIntervalFrom !== undefined) {
                localVarQueryParameter['filter_start_interval_from'] = filterStartIntervalFrom;
            }

            if (filterStartIntervalTo !== undefined) {
                localVarQueryParameter['filter_start_interval_to'] = filterStartIntervalTo;
            }

            if (filterParticipantTimeoutFrom !== undefined) {
                localVarQueryParameter['filter_participant_timeout_from'] = filterParticipantTimeoutFrom;
            }

            if (filterParticipantTimeoutTo !== undefined) {
                localVarQueryParameter['filter_participant_timeout_to'] = filterParticipantTimeoutTo;
            }

            if (filterActive !== undefined) {
                localVarQueryParameter['filter_active'] = filterActive;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint retrieves test run info. Project, test and run must be previously created
         * @summary Read test run info
         * @param {number} runID 
         * @param {number} testID 
         * @param {number} projectID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readTestRun: async (runID: number, testID: number, projectID: number, describe?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'runID' is not null or undefined
            if (runID === null || runID === undefined) {
                throw new RequiredError('runID','Required parameter runID was null or undefined when calling readTestRun.');
            }
            // verify required parameter 'testID' is not null or undefined
            if (testID === null || testID === undefined) {
                throw new RequiredError('testID','Required parameter testID was null or undefined when calling readTestRun.');
            }
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling readTestRun.');
            }
            const localVarPath = `/projects/{projectID}/tests/{testID}/runs/{runID}/`
                .replace(`{${"runID"}}`, encodeURIComponent(String(runID)))
                .replace(`{${"testID"}}`, encodeURIComponent(String(testID)))
                .replace(`{${"projectID"}}`, encodeURIComponent(String(projectID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (describe !== undefined) {
                localVarQueryParameter['describe'] = describe;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint stops test run. Project, test and run must be previously created. Test run needs to be in progress.
         * @summary Stop test run
         * @param {number} runID 
         * @param {number} testID 
         * @param {number} projectID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopTestRun: async (runID: number, testID: number, projectID: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'runID' is not null or undefined
            if (runID === null || runID === undefined) {
                throw new RequiredError('runID','Required parameter runID was null or undefined when calling stopTestRun.');
            }
            // verify required parameter 'testID' is not null or undefined
            if (testID === null || testID === undefined) {
                throw new RequiredError('testID','Required parameter testID was null or undefined when calling stopTestRun.');
            }
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling stopTestRun.');
            }
            const localVarPath = `/projects/{projectID}/tests/{testID}/runs/{runID}/stop/`
                .replace(`{${"runID"}}`, encodeURIComponent(String(runID)))
                .replace(`{${"testID"}}`, encodeURIComponent(String(testID)))
                .replace(`{${"projectID"}}`, encodeURIComponent(String(projectID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RunApi - functional programming interface
 * @export
 */
export const RunApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This endpoint starts test execution. Project and test must be previously created
         * @summary Create and launch new test run
         * @param {number} testID 
         * @param {number} projectID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTestRun(testID: number, projectID: number, describe?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Run>> {
            const localVarAxiosArgs = await RunApiAxiosParamCreator(configuration).createTestRun(testID, projectID, describe, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint retrieves all test run info. Project and test must be previously created
         * @summary Get all existing test runs for test
         * @param {number} testID 
         * @param {number} projectID 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [describe] 
         * @param {string} [filterTestName] 
         * @param {string} [filterStartedFrom] 
         * @param {string} [filterStartedTo] 
         * @param {string} [filterFinishedFrom] 
         * @param {string} [filterFinishedTo] 
         * @param {string} [filterExecutionStartedFrom] 
         * @param {string} [filterExecutionStartedTo] 
         * @param {string} [filterExecutionFinishedFrom] 
         * @param {string} [filterExecutionFinishedTo] 
         * @param {string} [filterIncrementStrategy] 
         * @param {string} [filterStatus] 
         * @param {string} [filterTestMode] 
         * @param {string} [filterStartIntervalFrom] 
         * @param {string} [filterStartIntervalTo] 
         * @param {string} [filterParticipantTimeoutFrom] 
         * @param {string} [filterParticipantTimeoutTo] 
         * @param {string} [filterActive] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readAllTestRuns(testID: number, projectID: number, limit?: number, offset?: number, describe?: string, filterTestName?: string, filterStartedFrom?: string, filterStartedTo?: string, filterFinishedFrom?: string, filterFinishedTo?: string, filterExecutionStartedFrom?: string, filterExecutionStartedTo?: string, filterExecutionFinishedFrom?: string, filterExecutionFinishedTo?: string, filterIncrementStrategy?: string, filterStatus?: string, filterTestMode?: string, filterStartIntervalFrom?: string, filterStartIntervalTo?: string, filterParticipantTimeoutFrom?: string, filterParticipantTimeoutTo?: string, filterActive?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await RunApiAxiosParamCreator(configuration).readAllTestRuns(testID, projectID, limit, offset, describe, filterTestName, filterStartedFrom, filterStartedTo, filterFinishedFrom, filterFinishedTo, filterExecutionStartedFrom, filterExecutionStartedTo, filterExecutionFinishedFrom, filterExecutionFinishedTo, filterIncrementStrategy, filterStatus, filterTestMode, filterStartIntervalFrom, filterStartIntervalTo, filterParticipantTimeoutFrom, filterParticipantTimeoutTo, filterActive, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint retrieves test run info. Project, test and run must be previously created
         * @summary Read test run info
         * @param {number} runID 
         * @param {number} testID 
         * @param {number} projectID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readTestRun(runID: number, testID: number, projectID: number, describe?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunBody>> {
            const localVarAxiosArgs = await RunApiAxiosParamCreator(configuration).readTestRun(runID, testID, projectID, describe, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint stops test run. Project, test and run must be previously created. Test run needs to be in progress.
         * @summary Stop test run
         * @param {number} runID 
         * @param {number} testID 
         * @param {number} projectID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stopTestRun(runID: number, testID: number, projectID: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await RunApiAxiosParamCreator(configuration).stopTestRun(runID, testID, projectID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RunApi - factory interface
 * @export
 */
export const RunApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This endpoint starts test execution. Project and test must be previously created
         * @summary Create and launch new test run
         * @param {number} testID 
         * @param {number} projectID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTestRun(testID: number, projectID: number, describe?: string, options?: any): AxiosPromise<Run> {
            return RunApiFp(configuration).createTestRun(testID, projectID, describe, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint retrieves all test run info. Project and test must be previously created
         * @summary Get all existing test runs for test
         * @param {number} testID 
         * @param {number} projectID 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [describe] 
         * @param {string} [filterTestName] 
         * @param {string} [filterStartedFrom] 
         * @param {string} [filterStartedTo] 
         * @param {string} [filterFinishedFrom] 
         * @param {string} [filterFinishedTo] 
         * @param {string} [filterExecutionStartedFrom] 
         * @param {string} [filterExecutionStartedTo] 
         * @param {string} [filterExecutionFinishedFrom] 
         * @param {string} [filterExecutionFinishedTo] 
         * @param {string} [filterIncrementStrategy] 
         * @param {string} [filterStatus] 
         * @param {string} [filterTestMode] 
         * @param {string} [filterStartIntervalFrom] 
         * @param {string} [filterStartIntervalTo] 
         * @param {string} [filterParticipantTimeoutFrom] 
         * @param {string} [filterParticipantTimeoutTo] 
         * @param {string} [filterActive] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readAllTestRuns(testID: number, projectID: number, limit?: number, offset?: number, describe?: string, filterTestName?: string, filterStartedFrom?: string, filterStartedTo?: string, filterFinishedFrom?: string, filterFinishedTo?: string, filterExecutionStartedFrom?: string, filterExecutionStartedTo?: string, filterExecutionFinishedFrom?: string, filterExecutionFinishedTo?: string, filterIncrementStrategy?: string, filterStatus?: string, filterTestMode?: string, filterStartIntervalFrom?: string, filterStartIntervalTo?: string, filterParticipantTimeoutFrom?: string, filterParticipantTimeoutTo?: string, filterActive?: string, options?: any): AxiosPromise<InlineResponse200> {
            return RunApiFp(configuration).readAllTestRuns(testID, projectID, limit, offset, describe, filterTestName, filterStartedFrom, filterStartedTo, filterFinishedFrom, filterFinishedTo, filterExecutionStartedFrom, filterExecutionStartedTo, filterExecutionFinishedFrom, filterExecutionFinishedTo, filterIncrementStrategy, filterStatus, filterTestMode, filterStartIntervalFrom, filterStartIntervalTo, filterParticipantTimeoutFrom, filterParticipantTimeoutTo, filterActive, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint retrieves test run info. Project, test and run must be previously created
         * @summary Read test run info
         * @param {number} runID 
         * @param {number} testID 
         * @param {number} projectID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readTestRun(runID: number, testID: number, projectID: number, describe?: string, options?: any): AxiosPromise<RunBody> {
            return RunApiFp(configuration).readTestRun(runID, testID, projectID, describe, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint stops test run. Project, test and run must be previously created. Test run needs to be in progress.
         * @summary Stop test run
         * @param {number} runID 
         * @param {number} testID 
         * @param {number} projectID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopTestRun(runID: number, testID: number, projectID: number, options?: any): AxiosPromise<void> {
            return RunApiFp(configuration).stopTestRun(runID, testID, projectID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RunApi - object-oriented interface
 * @export
 * @class RunApi
 * @extends {BaseAPI}
 */
export class RunApi extends BaseAPI {
    /**
     * This endpoint starts test execution. Project and test must be previously created
     * @summary Create and launch new test run
     * @param {number} testID 
     * @param {number} projectID 
     * @param {string} [describe] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunApi
     */
    public createTestRun(testID: number, projectID: number, describe?: string, options?: any) {
        return RunApiFp(this.configuration).createTestRun(testID, projectID, describe, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint retrieves all test run info. Project and test must be previously created
     * @summary Get all existing test runs for test
     * @param {number} testID 
     * @param {number} projectID 
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {string} [describe] 
     * @param {string} [filterTestName] 
     * @param {string} [filterStartedFrom] 
     * @param {string} [filterStartedTo] 
     * @param {string} [filterFinishedFrom] 
     * @param {string} [filterFinishedTo] 
     * @param {string} [filterExecutionStartedFrom] 
     * @param {string} [filterExecutionStartedTo] 
     * @param {string} [filterExecutionFinishedFrom] 
     * @param {string} [filterExecutionFinishedTo] 
     * @param {string} [filterIncrementStrategy] 
     * @param {string} [filterStatus] 
     * @param {string} [filterTestMode] 
     * @param {string} [filterStartIntervalFrom] 
     * @param {string} [filterStartIntervalTo] 
     * @param {string} [filterParticipantTimeoutFrom] 
     * @param {string} [filterParticipantTimeoutTo] 
     * @param {string} [filterActive] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunApi
     */
    public readAllTestRuns(testID: number, projectID: number, limit?: number, offset?: number, describe?: string, filterTestName?: string, filterStartedFrom?: string, filterStartedTo?: string, filterFinishedFrom?: string, filterFinishedTo?: string, filterExecutionStartedFrom?: string, filterExecutionStartedTo?: string, filterExecutionFinishedFrom?: string, filterExecutionFinishedTo?: string, filterIncrementStrategy?: string, filterStatus?: string, filterTestMode?: string, filterStartIntervalFrom?: string, filterStartIntervalTo?: string, filterParticipantTimeoutFrom?: string, filterParticipantTimeoutTo?: string, filterActive?: string, options?: any) {
        return RunApiFp(this.configuration).readAllTestRuns(testID, projectID, limit, offset, describe, filterTestName, filterStartedFrom, filterStartedTo, filterFinishedFrom, filterFinishedTo, filterExecutionStartedFrom, filterExecutionStartedTo, filterExecutionFinishedFrom, filterExecutionFinishedTo, filterIncrementStrategy, filterStatus, filterTestMode, filterStartIntervalFrom, filterStartIntervalTo, filterParticipantTimeoutFrom, filterParticipantTimeoutTo, filterActive, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint retrieves test run info. Project, test and run must be previously created
     * @summary Read test run info
     * @param {number} runID 
     * @param {number} testID 
     * @param {number} projectID 
     * @param {string} [describe] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunApi
     */
    public readTestRun(runID: number, testID: number, projectID: number, describe?: string, options?: any) {
        return RunApiFp(this.configuration).readTestRun(runID, testID, projectID, describe, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint stops test run. Project, test and run must be previously created. Test run needs to be in progress.
     * @summary Stop test run
     * @param {number} runID 
     * @param {number} testID 
     * @param {number} projectID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunApi
     */
    public stopTestRun(runID: number, testID: number, projectID: number, options?: any) {
        return RunApiFp(this.configuration).stopTestRun(runID, testID, projectID, options).then((request) => request(this.axios, this.basePath));
    }
}
