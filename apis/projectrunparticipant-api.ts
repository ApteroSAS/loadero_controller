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
import { InlineResponse2001 } from '../models';
import { RunParticipantBody } from '../models';
/**
 * ProjectrunparticipantApi - axios parameter creator
 * @export
 */
export const ProjectrunparticipantApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint retrieves all project run participant info.
         * @summary Get all existing project run participants for run
         * @param {number} runID 
         * @param {number} projectID 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [describe] 
         * @param {string} [filterBrowser] 
         * @param {string} [filterNetwork] 
         * @param {string} [filterLocation] 
         * @param {string} [filterMediaType] 
         * @param {string} [filterVideoFeed] 
         * @param {string} [filterAudioFeed] 
         * @param {string} [filterName] 
         * @param {string} [filterNumFrom] 
         * @param {string} [filterNumTo] 
         * @param {string} [filterGroupName] 
         * @param {string} [filterGroupNumFrom] 
         * @param {string} [filterGroupNumTo] 
         * @param {string} [filterRecordAudio] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readAllProjectRunParticipants: async (runID: number, projectID: number, limit?: number, offset?: number, describe?: string, filterBrowser?: string, filterNetwork?: string, filterLocation?: string, filterMediaType?: string, filterVideoFeed?: string, filterAudioFeed?: string, filterName?: string, filterNumFrom?: string, filterNumTo?: string, filterGroupName?: string, filterGroupNumFrom?: string, filterGroupNumTo?: string, filterRecordAudio?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'runID' is not null or undefined
            if (runID === null || runID === undefined) {
                throw new RequiredError('runID','Required parameter runID was null or undefined when calling readAllProjectRunParticipants.');
            }
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling readAllProjectRunParticipants.');
            }
            const localVarPath = `/projects/{projectID}/runs/{runID}/participants/`
                .replace(`{${"runID"}}`, encodeURIComponent(String(runID)))
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

            if (filterBrowser !== undefined) {
                localVarQueryParameter['filter_browser'] = filterBrowser;
            }

            if (filterNetwork !== undefined) {
                localVarQueryParameter['filter_network'] = filterNetwork;
            }

            if (filterLocation !== undefined) {
                localVarQueryParameter['filter_location'] = filterLocation;
            }

            if (filterMediaType !== undefined) {
                localVarQueryParameter['filter_media_type'] = filterMediaType;
            }

            if (filterVideoFeed !== undefined) {
                localVarQueryParameter['filter_video_feed'] = filterVideoFeed;
            }

            if (filterAudioFeed !== undefined) {
                localVarQueryParameter['filter_audio_feed'] = filterAudioFeed;
            }

            if (filterName !== undefined) {
                localVarQueryParameter['filter_name'] = filterName;
            }

            if (filterNumFrom !== undefined) {
                localVarQueryParameter['filter_num_from'] = filterNumFrom;
            }

            if (filterNumTo !== undefined) {
                localVarQueryParameter['filter_num_to'] = filterNumTo;
            }

            if (filterGroupName !== undefined) {
                localVarQueryParameter['filter_group_name'] = filterGroupName;
            }

            if (filterGroupNumFrom !== undefined) {
                localVarQueryParameter['filter_group_num_from'] = filterGroupNumFrom;
            }

            if (filterGroupNumTo !== undefined) {
                localVarQueryParameter['filter_group_num_to'] = filterGroupNumTo;
            }

            if (filterRecordAudio !== undefined) {
                localVarQueryParameter['filter_record_audio'] = filterRecordAudio;
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
         * This endpoint retrieves project run participant info. Run, run participant must be previously created
         * @summary Get existing project run participant
         * @param {number} runParticipantID 
         * @param {number} runID 
         * @param {number} projectID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readProjectRunParticipant: async (runParticipantID: number, runID: number, projectID: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'runParticipantID' is not null or undefined
            if (runParticipantID === null || runParticipantID === undefined) {
                throw new RequiredError('runParticipantID','Required parameter runParticipantID was null or undefined when calling readProjectRunParticipant.');
            }
            // verify required parameter 'runID' is not null or undefined
            if (runID === null || runID === undefined) {
                throw new RequiredError('runID','Required parameter runID was null or undefined when calling readProjectRunParticipant.');
            }
            // verify required parameter 'projectID' is not null or undefined
            if (projectID === null || projectID === undefined) {
                throw new RequiredError('projectID','Required parameter projectID was null or undefined when calling readProjectRunParticipant.');
            }
            const localVarPath = `/projects/{projectID}/runs/{runID}/participants/{runParticipantID}/`
                .replace(`{${"runParticipantID"}}`, encodeURIComponent(String(runParticipantID)))
                .replace(`{${"runID"}}`, encodeURIComponent(String(runID)))
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
    }
};

/**
 * ProjectrunparticipantApi - functional programming interface
 * @export
 */
export const ProjectrunparticipantApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This endpoint retrieves all project run participant info.
         * @summary Get all existing project run participants for run
         * @param {number} runID 
         * @param {number} projectID 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [describe] 
         * @param {string} [filterBrowser] 
         * @param {string} [filterNetwork] 
         * @param {string} [filterLocation] 
         * @param {string} [filterMediaType] 
         * @param {string} [filterVideoFeed] 
         * @param {string} [filterAudioFeed] 
         * @param {string} [filterName] 
         * @param {string} [filterNumFrom] 
         * @param {string} [filterNumTo] 
         * @param {string} [filterGroupName] 
         * @param {string} [filterGroupNumFrom] 
         * @param {string} [filterGroupNumTo] 
         * @param {string} [filterRecordAudio] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readAllProjectRunParticipants(runID: number, projectID: number, limit?: number, offset?: number, describe?: string, filterBrowser?: string, filterNetwork?: string, filterLocation?: string, filterMediaType?: string, filterVideoFeed?: string, filterAudioFeed?: string, filterName?: string, filterNumFrom?: string, filterNumTo?: string, filterGroupName?: string, filterGroupNumFrom?: string, filterGroupNumTo?: string, filterRecordAudio?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await ProjectrunparticipantApiAxiosParamCreator(configuration).readAllProjectRunParticipants(runID, projectID, limit, offset, describe, filterBrowser, filterNetwork, filterLocation, filterMediaType, filterVideoFeed, filterAudioFeed, filterName, filterNumFrom, filterNumTo, filterGroupName, filterGroupNumFrom, filterGroupNumTo, filterRecordAudio, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint retrieves project run participant info. Run, run participant must be previously created
         * @summary Get existing project run participant
         * @param {number} runParticipantID 
         * @param {number} runID 
         * @param {number} projectID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readProjectRunParticipant(runParticipantID: number, runID: number, projectID: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunParticipantBody>> {
            const localVarAxiosArgs = await ProjectrunparticipantApiAxiosParamCreator(configuration).readProjectRunParticipant(runParticipantID, runID, projectID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProjectrunparticipantApi - factory interface
 * @export
 */
export const ProjectrunparticipantApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This endpoint retrieves all project run participant info.
         * @summary Get all existing project run participants for run
         * @param {number} runID 
         * @param {number} projectID 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [describe] 
         * @param {string} [filterBrowser] 
         * @param {string} [filterNetwork] 
         * @param {string} [filterLocation] 
         * @param {string} [filterMediaType] 
         * @param {string} [filterVideoFeed] 
         * @param {string} [filterAudioFeed] 
         * @param {string} [filterName] 
         * @param {string} [filterNumFrom] 
         * @param {string} [filterNumTo] 
         * @param {string} [filterGroupName] 
         * @param {string} [filterGroupNumFrom] 
         * @param {string} [filterGroupNumTo] 
         * @param {string} [filterRecordAudio] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readAllProjectRunParticipants(runID: number, projectID: number, limit?: number, offset?: number, describe?: string, filterBrowser?: string, filterNetwork?: string, filterLocation?: string, filterMediaType?: string, filterVideoFeed?: string, filterAudioFeed?: string, filterName?: string, filterNumFrom?: string, filterNumTo?: string, filterGroupName?: string, filterGroupNumFrom?: string, filterGroupNumTo?: string, filterRecordAudio?: string, options?: any): AxiosPromise<InlineResponse2001> {
            return ProjectrunparticipantApiFp(configuration).readAllProjectRunParticipants(runID, projectID, limit, offset, describe, filterBrowser, filterNetwork, filterLocation, filterMediaType, filterVideoFeed, filterAudioFeed, filterName, filterNumFrom, filterNumTo, filterGroupName, filterGroupNumFrom, filterGroupNumTo, filterRecordAudio, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint retrieves project run participant info. Run, run participant must be previously created
         * @summary Get existing project run participant
         * @param {number} runParticipantID 
         * @param {number} runID 
         * @param {number} projectID 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readProjectRunParticipant(runParticipantID: number, runID: number, projectID: number, options?: any): AxiosPromise<RunParticipantBody> {
            return ProjectrunparticipantApiFp(configuration).readProjectRunParticipant(runParticipantID, runID, projectID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProjectrunparticipantApi - object-oriented interface
 * @export
 * @class ProjectrunparticipantApi
 * @extends {BaseAPI}
 */
export class ProjectrunparticipantApi extends BaseAPI {
    /**
     * This endpoint retrieves all project run participant info.
     * @summary Get all existing project run participants for run
     * @param {number} runID 
     * @param {number} projectID 
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {string} [describe] 
     * @param {string} [filterBrowser] 
     * @param {string} [filterNetwork] 
     * @param {string} [filterLocation] 
     * @param {string} [filterMediaType] 
     * @param {string} [filterVideoFeed] 
     * @param {string} [filterAudioFeed] 
     * @param {string} [filterName] 
     * @param {string} [filterNumFrom] 
     * @param {string} [filterNumTo] 
     * @param {string} [filterGroupName] 
     * @param {string} [filterGroupNumFrom] 
     * @param {string} [filterGroupNumTo] 
     * @param {string} [filterRecordAudio] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectrunparticipantApi
     */
    public readAllProjectRunParticipants(runID: number, projectID: number, limit?: number, offset?: number, describe?: string, filterBrowser?: string, filterNetwork?: string, filterLocation?: string, filterMediaType?: string, filterVideoFeed?: string, filterAudioFeed?: string, filterName?: string, filterNumFrom?: string, filterNumTo?: string, filterGroupName?: string, filterGroupNumFrom?: string, filterGroupNumTo?: string, filterRecordAudio?: string, options?: any) {
        return ProjectrunparticipantApiFp(this.configuration).readAllProjectRunParticipants(runID, projectID, limit, offset, describe, filterBrowser, filterNetwork, filterLocation, filterMediaType, filterVideoFeed, filterAudioFeed, filterName, filterNumFrom, filterNumTo, filterGroupName, filterGroupNumFrom, filterGroupNumTo, filterRecordAudio, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This endpoint retrieves project run participant info. Run, run participant must be previously created
     * @summary Get existing project run participant
     * @param {number} runParticipantID 
     * @param {number} runID 
     * @param {number} projectID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectrunparticipantApi
     */
    public readProjectRunParticipant(runParticipantID: number, runID: number, projectID: number, options?: any) {
        return ProjectrunparticipantApiFp(this.configuration).readProjectRunParticipant(runParticipantID, runID, projectID, options).then((request) => request(this.axios, this.basePath));
    }
}