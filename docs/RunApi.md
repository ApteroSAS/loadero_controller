# LoaderoController.RunApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTestRun**](RunApi.md#createTestRun) | **POST** /projects/{projectID}/tests/{testID}/runs/ | Create and launch new test run
[**readAllTestRuns**](RunApi.md#readAllTestRuns) | **GET** /projects/{projectID}/tests/{testID}/runs/ | Get all existing test runs for test
[**readTestRun**](RunApi.md#readTestRun) | **GET** /projects/{projectID}/tests/{testID}/runs/{runID}/ | Read test run info
[**stopTestRun**](RunApi.md#stopTestRun) | **POST** /projects/{projectID}/tests/{testID}/runs/{runID}/stop/ | Stop test run

<a name="createTestRun"></a>
# **createTestRun**
> Run createTestRun(testID, projectID, opts)

Create and launch new test run

This endpoint starts test execution. Project and test must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.RunApi();
let testID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.createTestRun(testID, projectID, opts, (error, data, response) => {
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
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**Run**](Run.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAllTestRuns"></a>
# **readAllTestRuns**
> InlineResponse200 readAllTestRuns(testID, projectID, opts)

Get all existing test runs for test

This endpoint retrieves all test run info. Project and test must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.RunApi();
let testID = 789; // Number | 
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
apiInstance.readAllTestRuns(testID, projectID, opts, (error, data, response) => {
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
 **testID** | **Number**|  | 
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

<a name="readTestRun"></a>
# **readTestRun**
> RunBody readTestRun(runID, testID, projectID, opts)

Read test run info

This endpoint retrieves test run info. Project, test and run must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.RunApi();
let runID = 789; // Number | 
let testID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readTestRun(runID, testID, projectID, opts, (error, data, response) => {
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
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**RunBody**](RunBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="stopTestRun"></a>
# **stopTestRun**
> stopTestRun(runID, testID, projectID)

Stop test run

This endpoint stops test run. Project, test and run must be previously created. Test run needs to be in progress.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.RunApi();
let runID = 789; // Number | 
let testID = 789; // Number | 
let projectID = 789; // Number | 

apiInstance.stopTestRun(runID, testID, projectID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runID** | **Number**|  | 
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

