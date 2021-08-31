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
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.RunApi();

var testID = 789; // Number | 

var projectID = 789; // Number | 

var opts = { 
  'describe': "describe_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTestRun(testID, projectID, opts, callback);
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

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readAllTestRuns"></a>
# **readAllTestRuns**
> Object readAllTestRuns(testID, projectID, opts)

Get all existing test runs for test

This endpoint retrieves all test run info. Project and test must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.RunApi();

var testID = 789; // Number | 

var projectID = 789; // Number | 

var opts = { 
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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAllTestRuns(testID, projectID, opts, callback);
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

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readTestRun"></a>
# **readTestRun**
> RunBody readTestRun(runID, testID, projectID, opts)

Read test run info

This endpoint retrieves test run info. Project, test and run must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.RunApi();

var runID = 789; // Number | 

var testID = 789; // Number | 

var projectID = 789; // Number | 

var opts = { 
  'describe': "describe_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readTestRun(runID, testID, projectID, opts, callback);
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

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stopTestRun"></a>
# **stopTestRun**
> stopTestRun(runID, testID, projectID)

Stop test run

This endpoint stops test run. Project, test and run must be previously created. Test run needs to be in progress.

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.RunApi();

var runID = 789; // Number | 

var testID = 789; // Number | 

var projectID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.stopTestRun(runID, testID, projectID, callback);
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

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

