# LoaderoController.ProjectrunApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllProjectRuns**](ProjectrunApi.md#readAllProjectRuns) | **GET** /projects/{projectID}/runs/ | Get all existing test runs for project
[**readProjectRun**](ProjectrunApi.md#readProjectRun) | **GET** /projects/{projectID}/runs/{runID}/ | Read project test run info


<a name="readAllProjectRuns"></a>
# **readAllProjectRuns**
> Object readAllProjectRuns(projectID, opts)

Get all existing test runs for project

This endpoint retrieves all test run info. Project must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.ProjectrunApi();

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
apiInstance.readAllProjectRuns(projectID, opts, callback);
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

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readProjectRun"></a>
# **readProjectRun**
> RunBody readProjectRun(projectID, runID)

Read project test run info

This endpoint retrieves project test run info. Project and run must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.ProjectrunApi();

var projectID = 789; // Number | 

var runID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readProjectRun(projectID, runID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectID** | **Number**|  | 
 **runID** | **Number**|  | 

### Return type

[**RunBody**](RunBody.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

