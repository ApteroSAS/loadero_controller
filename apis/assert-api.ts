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
import { Assert } from '../models';
import { ErrorResponse } from '../models';
import { InlineResponse2005 } from '../models';
import { ValidationResponse } from '../models';
/**
 * AssertApi - axios parameter creator
 * @export
 */
export const AssertApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint creates new assert with given data.
         * @summary Create new assert
         * @param {number} projectID 
         * @param {number} testID 
         * @param {Assert} [body] 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAssert: async (projectID: number, testID: number, body?: Assert, describe?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling createAssert.');
            }
            // verify required parameter 'testID' is not null or undefined
            if (testID === null || testID === undefined) {
                throw new RequiredError('testID','Required parameter testID was null or undefined when calling createAssert.');
            }
            const localVarPath = `/projects/{projectID}/tests/{testID}/asserts/`
                .replace(`{${"projectID"}}`, encodeURIComponent(String(projectID)))
                .replace(`{${"testID"}}`, encodeURIComponent(String(testID)));
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
                    ? await configuration.apiKey("LoaderoAuth")
                    : await configuration.apiKey;
                localVarHeaderParameter["LoaderoAuth"] = localVarApiKeyValue;
            }

            if (describe !== undefined) {
                localVarQueryParameter['describe'] = describe;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint deletes assert. Test and assert must be previously created
         * @summary Delete existing assert
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAssert: async (assertID: number, projectID: number, testID: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'assertID' is not null or undefined
            if (assertID === null || assertID === undefined) {
                throw new RequiredError('assertID','Required parameter assertID was null or undefined when calling deleteAssert.');
            }
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling deleteAssert.');
            }
            // verify required parameter 'testID' is not null or undefined
            if (testID === null || testID === undefined) {
                throw new RequiredError('testID','Required parameter testID was null or undefined when calling deleteAssert.');
            }
            const localVarPath = `/projects/{projectID}/tests/{testID}/asserts/{assertID}/`
                .replace(`{${"assertID"}}`, encodeURIComponent(String(assertID)))
                .replace(`{${"projectID"}}`, encodeURIComponent(String(projectID)))
                .replace(`{${"testID"}}`, encodeURIComponent(String(testID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("LoaderoAuth")
                    : await configuration.apiKey;
                localVarHeaderParameter["LoaderoAuth"] = localVarApiKeyValue;
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
         * This endpoint duplicates given assert. Test and assert must be previously created.
         * @summary Duplicate existing assert
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        duplicateAssert: async (assertID: number, projectID: number, testID: number, describe?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'assertID' is not null or undefined
            if (assertID === null || assertID === undefined) {
                throw new RequiredError('assertID','Required parameter assertID was null or undefined when calling duplicateAssert.');
            }
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling duplicateAssert.');
            }
            // verify required parameter 'testID' is not null or undefined
            if (testID === null || testID === undefined) {
                throw new RequiredError('testID','Required parameter testID was null or undefined when calling duplicateAssert.');
            }
            const localVarPath = `/projects/{projectID}/tests/{testID}/asserts/{assertID}/copy/`
                .replace(`{${"assertID"}}`, encodeURIComponent(String(assertID)))
                .replace(`{${"projectID"}}`, encodeURIComponent(String(projectID)))
                .replace(`{${"testID"}}`, encodeURIComponent(String(testID)));
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
                    ? await configuration.apiKey("LoaderoAuth")
                    : await configuration.apiKey;
                localVarHeaderParameter["LoaderoAuth"] = localVarApiKeyValue;
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
         * This endpoint retrieves all assert info. Test must be previously created
         * @summary Get all existing asserts for test
         * @param {number} projectID 
         * @param {number} testID 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [describe] 
         * @param {string} [filterPath] 
         * @param {string} [filterOperator] 
         * @param {string} [filterExpected] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readAllAsserts: async (projectID: number, testID: number, limit?: number, offset?: number, describe?: string, filterPath?: string, filterOperator?: string, filterExpected?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling readAllAsserts.');
            }
            // verify required parameter 'testID' is not null or undefined
            if (testID === null || testID === undefined) {
                throw new RequiredError('testID','Required parameter testID was null or undefined when calling readAllAsserts.');
            }
            const localVarPath = `/projects/{projectID}/tests/{testID}/asserts/`
                .replace(`{${"projectID"}}`, encodeURIComponent(String(projectID)))
                .replace(`{${"testID"}}`, encodeURIComponent(String(testID)));
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
                    ? await configuration.apiKey("LoaderoAuth")
                    : await configuration.apiKey;
                localVarHeaderParameter["LoaderoAuth"] = localVarApiKeyValue;
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

            if (filterPath !== undefined) {
                localVarQueryParameter['filter_path'] = filterPath;
            }

            if (filterOperator !== undefined) {
                localVarQueryParameter['filter_operator'] = filterOperator;
            }

            if (filterExpected !== undefined) {
                localVarQueryParameter['filter_expected'] = filterExpected;
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
         * This endpoint retrieves assert info. Test and assert must be previously created
         * @summary Read assert info
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readAssert: async (assertID: number, projectID: number, testID: number, describe?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'assertID' is not null or undefined
            if (assertID === null || assertID === undefined) {
                throw new RequiredError('assertID','Required parameter assertID was null or undefined when calling readAssert.');
            }
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling readAssert.');
            }
            // verify required parameter 'testID' is not null or undefined
            if (testID === null || testID === undefined) {
                throw new RequiredError('testID','Required parameter testID was null or undefined when calling readAssert.');
            }
            const localVarPath = `/projects/{projectID}/tests/{testID}/asserts/{assertID}/`
                .replace(`{${"assertID"}}`, encodeURIComponent(String(assertID)))
                .replace(`{${"projectID"}}`, encodeURIComponent(String(projectID)))
                .replace(`{${"testID"}}`, encodeURIComponent(String(testID)));
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
                    ? await configuration.apiKey("LoaderoAuth")
                    : await configuration.apiKey;
                localVarHeaderParameter["LoaderoAuth"] = localVarApiKeyValue;
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
         * This endpoint updates assert with given properties. Test and assert must be previously created
         * @summary Update existing assert
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {Assert} [body] 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAssert: async (assertID: number, projectID: number, testID: number, body?: Assert, describe?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'assertID' is not null or undefined
            if (assertID === null || assertID === undefined) {
                throw new RequiredError('assertID','Required parameter assertID was null or undefined when calling updateAssert.');
            }
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling updateAssert.');
            }
            // verify required parameter 'testID' is not null or undefined
            if (testID === null || testID === undefined) {
                throw new RequiredError('testID','Required parameter testID was null or undefined when calling updateAssert.');
            }
            const localVarPath = `/projects/{projectID}/tests/{testID}/asserts/{assertID}/`
                .replace(`{${"assertID"}}`, encodeURIComponent(String(assertID)))
                .replace(`{${"projectID"}}`, encodeURIComponent(String(projectID)))
                .replace(`{${"testID"}}`, encodeURIComponent(String(testID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("LoaderoAuth")
                    : await configuration.apiKey;
                localVarHeaderParameter["LoaderoAuth"] = localVarApiKeyValue;
            }

            if (describe !== undefined) {
                localVarQueryParameter['describe'] = describe;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AssertApi - functional programming interface
 * @export
 */
export const AssertApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This endpoint creates new assert with given data.
         * @summary Create new assert
         * @param {number} projectID 
         * @param {number} testID 
         * @param {Assert} [body] 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAssert(projectID: number, testID: number, body?: Assert, describe?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Assert>> {
            const localVarAxiosArgs = await AssertApiAxiosParamCreator(configuration).createAssert(projectID, testID, body, describe, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint deletes assert. Test and assert must be previously created
         * @summary Delete existing assert
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAssert(assertID: number, projectID: number, testID: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AssertApiAxiosParamCreator(configuration).deleteAssert(assertID, projectID, testID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint duplicates given assert. Test and assert must be previously created.
         * @summary Duplicate existing assert
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async duplicateAssert(assertID: number, projectID: number, testID: number, describe?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Assert>> {
            const localVarAxiosArgs = await AssertApiAxiosParamCreator(configuration).duplicateAssert(assertID, projectID, testID, describe, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint retrieves all assert info. Test must be previously created
         * @summary Get all existing asserts for test
         * @param {number} projectID 
         * @param {number} testID 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [describe] 
         * @param {string} [filterPath] 
         * @param {string} [filterOperator] 
         * @param {string} [filterExpected] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readAllAsserts(projectID: number, testID: number, limit?: number, offset?: number, describe?: string, filterPath?: string, filterOperator?: string, filterExpected?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2005>> {
            const localVarAxiosArgs = await AssertApiAxiosParamCreator(configuration).readAllAsserts(projectID, testID, limit, offset, describe, filterPath, filterOperator, filterExpected, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint retrieves assert info. Test and assert must be previously created
         * @summary Read assert info
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readAssert(assertID: number, projectID: number, testID: number, describe?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Assert>> {
            const localVarAxiosArgs = await AssertApiAxiosParamCreator(configuration).readAssert(assertID, projectID, testID, describe, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint updates assert with given properties. Test and assert must be previously created
         * @summary Update existing assert
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {Assert} [body] 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAssert(assertID: number, projectID: number, testID: number, body?: Assert, describe?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Assert>> {
            const localVarAxiosArgs = await AssertApiAxiosParamCreator(configuration).updateAssert(assertID, projectID, testID, body, describe, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AssertApi - factory interface
 * @export
 */
export const AssertApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This endpoint creates new assert with given data.
         * @summary Create new assert
         * @param {number} projectID 
         * @param {number} testID 
         * @param {Assert} [body] 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAssert(projectID: number, testID: number, body?: Assert, describe?: string, options?: any): AxiosPromise<Assert> {
            return AssertApiFp(configuration).createAssert(projectID, testID, body, describe, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint deletes assert. Test and assert must be previously created
         * @summary Delete existing assert
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAssert(assertID: number, projectID: number, testID: number, options?: any): AxiosPromise<void> {
            return AssertApiFp(configuration).deleteAssert(assertID, projectID, testID, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint duplicates given assert. Test and assert must be previously created.
         * @summary Duplicate existing assert
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        duplicateAssert(assertID: number, projectID: number, testID: number, describe?: string, options?: any): AxiosPromise<Assert> {
            return AssertApiFp(configuration).duplicateAssert(assertID, projectID, testID, describe, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint retrieves all assert info. Test must be previously created
         * @summary Get all existing asserts for test
         * @param {number} projectID 
         * @param {number} testID 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [describe] 
         * @param {string} [filterPath] 
         * @param {string} [filterOperator] 
         * @param {string} [filterExpected] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readAllAsserts(projectID: number, testID: number, limit?: number, offset?: number, describe?: string, filterPath?: string, filterOperator?: string, filterExpected?: string, options?: any): AxiosPromise<InlineResponse2005> {
            return AssertApiFp(configuration).readAllAsserts(projectID, testID, limit, offset, describe, filterPath, filterOperator, filterExpected, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint retrieves assert info. Test and assert must be previously created
         * @summary Read assert info
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readAssert(assertID: number, projectID: number, testID: number, describe?: string, options?: any): AxiosPromise<Assert> {
            return AssertApiFp(configuration).readAssert(assertID, projectID, testID, describe, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint updates assert with given properties. Test and assert must be previously created
         * @summary Update existing assert
         * @param {number} assertID 
         * @param {number} projectID 
         * @param {number} testID 
         * @param {Assert} [body] 
         * @param {string} [describe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAssert(assertID: number, projectID: number, testID: number, body?: Assert, describe?: string, options?: any): AxiosPromise<Assert> {
            return AssertApiFp(configuration).updateAssert(assertID, projectID, testID, body, describe, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AssertApi - object-oriented interface
 * @export
 * @class AssertApi
 * @extends {BaseAPI}
 */
export class AssertApi extends BaseAPI {
    /**
     * This endpoint creates new assert with given data.
     * @summary Create new assert
     * @param {number} projectID 
     * @param {number} testID 
     * @param {Assert} [body] 
     * @param {string} [describe] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssertApi
     */
    public createAssert(projectID: number, testID: number, body?: Assert, describe?: string, options?: any) {
        return AssertApiFp(this.configuration).createAssert(projectID, testID, body, describe, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint deletes assert. Test and assert must be previously created
     * @summary Delete existing assert
     * @param {number} assertID 
     * @param {number} projectID 
     * @param {number} testID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssertApi
     */
    public deleteAssert(assertID: number, projectID: number, testID: number, options?: any) {
        return AssertApiFp(this.configuration).deleteAssert(assertID, projectID, testID, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint duplicates given assert. Test and assert must be previously created.
     * @summary Duplicate existing assert
     * @param {number} assertID 
     * @param {number} projectID 
     * @param {number} testID 
     * @param {string} [describe] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssertApi
     */
    public duplicateAssert(assertID: number, projectID: number, testID: number, describe?: string, options?: any) {
        return AssertApiFp(this.configuration).duplicateAssert(assertID, projectID, testID, describe, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint retrieves all assert info. Test must be previously created
     * @summary Get all existing asserts for test
     * @param {number} projectID 
     * @param {number} testID 
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {string} [describe] 
     * @param {string} [filterPath] 
     * @param {string} [filterOperator] 
     * @param {string} [filterExpected] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssertApi
     */
    public readAllAsserts(projectID: number, testID: number, limit?: number, offset?: number, describe?: string, filterPath?: string, filterOperator?: string, filterExpected?: string, options?: any) {
        return AssertApiFp(this.configuration).readAllAsserts(projectID, testID, limit, offset, describe, filterPath, filterOperator, filterExpected, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint retrieves assert info. Test and assert must be previously created
     * @summary Read assert info
     * @param {number} assertID 
     * @param {number} projectID 
     * @param {number} testID 
     * @param {string} [describe] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssertApi
     */
    public readAssert(assertID: number, projectID: number, testID: number, describe?: string, options?: any) {
        return AssertApiFp(this.configuration).readAssert(assertID, projectID, testID, describe, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint updates assert with given properties. Test and assert must be previously created
     * @summary Update existing assert
     * @param {number} assertID 
     * @param {number} projectID 
     * @param {number} testID 
     * @param {Assert} [body] 
     * @param {string} [describe] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AssertApi
     */
    public updateAssert(assertID: number, projectID: number, testID: number, body?: Assert, describe?: string, options?: any) {
        return AssertApiFp(this.configuration).updateAssert(assertID, projectID, testID, body, describe, options).then((request) => request(this.axios, this.basePath));
    }
}
