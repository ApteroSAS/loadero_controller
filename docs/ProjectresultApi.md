# LoaderoController.ProjectresultApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllProjectResults**](ProjectresultApi.md#readAllProjectResults) | **GET** /projects/{projectID}/runs/{runID}/results/ | Read all project run results
[**readProjectResult**](ProjectresultApi.md#readProjectResult) | **GET** /projects/{projectID}/runs/{runID}/results/{resultID}/ | Read single project run result
[**readProjectResultStatistics**](ProjectresultApi.md#readProjectResultStatistics) | **GET** /projects/{projectID}/runs/{runID}/results/statistics/ | Read all project result statistics

<a name="readAllProjectResults"></a>
# **readAllProjectResults**
> InlineResponse2002 readAllProjectResults(runID, projectID, opts)

Read all project run results

This endpoint retrieves all project run results. Project, run must be previously created and run has to be finished in order to get results

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ProjectresultApi();
let runID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
  'limit': 789, // Number | 
  'offset': 789, // Number | 
  'describe': "describe_example", // String | 
  'filterBrowser': "filterBrowser_example", // String | 
  'filterNetwork': "filterNetwork_example", // String | 
  'filterLocation': "filterLocation_example", // String | 
  'filterMediaType': "filterMediaType_example", // String | 
  'filterVideoFeed': "filterVideoFeed_example", // String | 
  'filterAudioFeed': "filterAudioFeed_example", // String | 
  'filterName': "filterName_example", // String | 
  'filterNumFrom': "filterNumFrom_example", // String | 
  'filterNumTo': "filterNumTo_example", // String | 
  'filterGroupName': "filterGroupName_example", // String | 
  'filterGroupNumFrom': "filterGroupNumFrom_example", // String | 
  'filterGroupNumTo': "filterGroupNumTo_example", // String | 
  'filterRecordAudio': "filterRecordAudio_example", // String | 
  'filterStartFrom': "filterStartFrom_example", // String | 
  'filterStartTo': "filterStartTo_example", // String | 
  'filterEndFrom': "filterEndFrom_example", // String | 
  'filterEndTo': "filterEndTo_example", // String | 
  'filterStatus': "filterStatus_example", // String | 
  'filterSeleniumResult': "filterSeleniumResult_example", // String | 
  'filterDone': "filterDone_example" // String | 
};
apiInstance.readAllProjectResults(runID, projectID, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **describe** | **String**|  | [optional] 
 **filterBrowser** | **String**|  | [optional] 
 **filterNetwork** | **String**|  | [optional] 
 **filterLocation** | **String**|  | [optional] 
 **filterMediaType** | **String**|  | [optional] 
 **filterVideoFeed** | **String**|  | [optional] 
 **filterAudioFeed** | **String**|  | [optional] 
 **filterName** | **String**|  | [optional] 
 **filterNumFrom** | **String**|  | [optional] 
 **filterNumTo** | **String**|  | [optional] 
 **filterGroupName** | **String**|  | [optional] 
 **filterGroupNumFrom** | **String**|  | [optional] 
 **filterGroupNumTo** | **String**|  | [optional] 
 **filterRecordAudio** | **String**|  | [optional] 
 **filterStartFrom** | **String**|  | [optional] 
 **filterStartTo** | **String**|  | [optional] 
 **filterEndFrom** | **String**|  | [optional] 
 **filterEndTo** | **String**|  | [optional] 
 **filterStatus** | **String**|  | [optional] 
 **filterSeleniumResult** | **String**|  | [optional] 
 **filterDone** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readProjectResult"></a>
# **readProjectResult**
> ExtendedResult readProjectResult(resultID, runID, projectID, opts)

Read single project run result

This endpoint retrieves single project run result info. Project, run and result must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ProjectresultApi();
let resultID = 789; // Number | 
let runID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readProjectResult(resultID, runID, projectID, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resultID** | **Number**|  | 
 **runID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**ExtendedResult**](ExtendedResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readProjectResultStatistics"></a>
# **readProjectResultStatistics**
> InlineResponse2003 readProjectResultStatistics(runID, projectID, opts)

Read all project result statistics

This endpoint retrieves all project result statisctics. Project and run must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ProjectresultApi();
let runID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readProjectResultStatistics(runID, projectID, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

