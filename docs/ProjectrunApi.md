# LoaderoController.ProjectrunApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllProjectRuns**](ProjectrunApi.md#readAllProjectRuns) | **GET** /projects/{projectID}/runs/ | Get all existing test runs for project
[**readProjectRun**](ProjectrunApi.md#readProjectRun) | **GET** /projects/{projectID}/runs/{runID}/ | Read project test run info

<a name="readAllProjectRuns"></a>
# **readAllProjectRuns**
> InlineResponse200 readAllProjectRuns(projectID, opts)

Get all existing test runs for project

This endpoint retrieves all test run info. Project must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ProjectrunApi();
let projectID = 789; // Number | 
let opts = { 
  'limit': 789, // Number | 
  'offset': 789, // Number | 
  'describe': "describe_example", // String | 
  'filterTestName': "filterTestName_example", // String | 
  'filterStartedFrom': "filterStartedFrom_example", // String | 
  'filterStartedTo': "filterStartedTo_example", // String | 
  'filterFinishedFrom': "filterFinishedFrom_example", // String | 
  'filterFinishedTo': "filterFinishedTo_example", // String | 
  'filterExecutionStartedFrom': "filterExecutionStartedFrom_example", // String | 
  'filterExecutionStartedTo': "filterExecutionStartedTo_example", // String | 
  'filterExecutionFinishedFrom': "filterExecutionFinishedFrom_example", // String | 
  'filterExecutionFinishedTo': "filterExecutionFinishedTo_example", // String | 
  'filterIncrementStrategy': "filterIncrementStrategy_example", // String | 
  'filterStatus': "filterStatus_example", // String | 
  'filterTestMode': "filterTestMode_example", // String | 
  'filterStartIntervalFrom': "filterStartIntervalFrom_example", // String | 
  'filterStartIntervalTo': "filterStartIntervalTo_example", // String | 
  'filterParticipantTimeoutFrom': "filterParticipantTimeoutFrom_example", // String | 
  'filterParticipantTimeoutTo': "filterParticipantTimeoutTo_example", // String | 
  'filterActive': "filterActive_example" // String | 
};
apiInstance.readAllProjectRuns(projectID, opts, (error, data, response) => {
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
 **projectID** | **Number**|  | 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **describe** | **String**|  | [optional] 
 **filterTestName** | **String**|  | [optional] 
 **filterStartedFrom** | **String**|  | [optional] 
 **filterStartedTo** | **String**|  | [optional] 
 **filterFinishedFrom** | **String**|  | [optional] 
 **filterFinishedTo** | **String**|  | [optional] 
 **filterExecutionStartedFrom** | **String**|  | [optional] 
 **filterExecutionStartedTo** | **String**|  | [optional] 
 **filterExecutionFinishedFrom** | **String**|  | [optional] 
 **filterExecutionFinishedTo** | **String**|  | [optional] 
 **filterIncrementStrategy** | **String**|  | [optional] 
 **filterStatus** | **String**|  | [optional] 
 **filterTestMode** | **String**|  | [optional] 
 **filterStartIntervalFrom** | **String**|  | [optional] 
 **filterStartIntervalTo** | **String**|  | [optional] 
 **filterParticipantTimeoutFrom** | **String**|  | [optional] 
 **filterParticipantTimeoutTo** | **String**|  | [optional] 
 **filterActive** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readProjectRun"></a>
# **readProjectRun**
> RunBody readProjectRun(projectID, runID)

Read project test run info

This endpoint retrieves project test run info. Project and run must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ProjectrunApi();
let projectID = 789; // Number | 
let runID = 789; // Number | 

apiInstance.readProjectRun(projectID, runID, (error, data, response) => {
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
 **projectID** | **Number**|  | 
 **runID** | **Number**|  | 

### Return type

[**RunBody**](RunBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

