# LoaderoController.TestApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTest**](TestApi.md#createTest) | **POST** /projects/{projectID}/tests/ | Create new test
[**deleteTest**](TestApi.md#deleteTest) | **DELETE** /projects/{projectID}/tests/{testID}/ | Delete existing test
[**duplicateTest**](TestApi.md#duplicateTest) | **POST** /projects/{projectID}/tests/{testID}/copy/ | Duplicate existing test
[**readAllTests**](TestApi.md#readAllTests) | **GET** /projects/{projectID}/tests/ | Get all existing tests for project
[**readTest**](TestApi.md#readTest) | **GET** /projects/{projectID}/tests/{testID}/ | Read test info
[**updateTest**](TestApi.md#updateTest) | **PUT** /projects/{projectID}/tests/{testID}/ | Update existing test


<a name="createTest"></a>
# **createTest**
> Test createTest(name, startInterval, participantTimeout, mode, incrementStrategy, script, projectID, opts)

Create new test

This endpoint creates new test with given data.

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new LoaderoController.TestApi();

var name = "name_example"; // String | 

var startInterval = 789; // Number | 

var participantTimeout = 789; // Number | 

var mode = "mode_example"; // String | 

var incrementStrategy = "incrementStrategy_example"; // String | 

var script = "script_example"; // String | 

var projectID = 789; // Number | 

var opts = { 
  'describe': "describe_example", // String | 
  'id': 789, // Number | readonly: true
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | readonly: true
  'updated': new Date("2013-10-20T19:20:30+01:00"), // Date | readonly: true
  'projectId': 789, // Number | readonly: true
  'scriptFileId': 789, // Number | readonly: true
  'deleted': true, // Boolean | readonly: true
  'groupCount': 789, // Number | readonly: true
  'participantCount': 789 // Number | readonly: true
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTest(name, startInterval, participantTimeout, mode, incrementStrategy, script, projectID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **startInterval** | **Number**|  | 
 **participantTimeout** | **Number**|  | 
 **mode** | **String**|  | 
 **incrementStrategy** | **String**|  | 
 **script** | **String**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 
 **id** | **Number**| readonly: true | [optional] 
 **created** | **Date**| readonly: true | [optional] 
 **updated** | **Date**| readonly: true | [optional] 
 **projectId** | **Number**| readonly: true | [optional] 
 **scriptFileId** | **Number**| readonly: true | [optional] 
 **deleted** | **Boolean**| readonly: true | [optional] 
 **groupCount** | **Number**| readonly: true | [optional] 
 **participantCount** | **Number**| readonly: true | [optional] 

### Return type

[**Test**](Test.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTest"></a>
# **deleteTest**
> deleteTest(testID, projectID)

Delete existing test

This endpoint deletes test. Project and test must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new LoaderoController.TestApi();

var testID = 789; // Number | 

var projectID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTest(testID, projectID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="duplicateTest"></a>
# **duplicateTest**
> Test duplicateTest(testID, projectID, opts)

Duplicate existing test

This endpoint duplicates given test. If no copy name is provided an \"Copy of\" prefix will be applied to the test name. Project and test must be previously created.

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new LoaderoController.TestApi();

var testID = 789; // Number | 

var projectID = 789; // Number | 

var opts = { 
  'body': new LoaderoController.Body(), // Body | 
  'describe': "describe_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.duplicateTest(testID, projectID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **body** | [**Body**](.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**Test**](Test.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readAllTests"></a>
# **readAllTests**
> Object readAllTests(projectID, opts)

Get all existing tests for project

This endpoint retrieves all test info. Project must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new LoaderoController.TestApi();

var projectID = 789; // Number | 

var opts = { 
  'limit': 789, // Number | 
  'offset': 789, // Number | 
  'describe': "describe_example", // String | 
  'filterName': "filterName_example", // String | 
  'filterTestMode': "filterTestMode_example", // String | 
  'filterIncrementStrategy': "filterIncrementStrategy_example", // String | 
  'filterStartIntervalFrom': "filterStartIntervalFrom_example", // String | 
  'filterStartIntervalTo': "filterStartIntervalTo_example", // String | 
  'filterParticipantTimeoutFrom': "filterParticipantTimeoutFrom_example", // String | 
  'filterParticipantTimeoutTo': "filterParticipantTimeoutTo_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAllTests(projectID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectID** | **Number**|  | 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **describe** | **String**|  | [optional] 
 **filterName** | **String**|  | [optional] 
 **filterTestMode** | **String**|  | [optional] 
 **filterIncrementStrategy** | **String**|  | [optional] 
 **filterStartIntervalFrom** | **String**|  | [optional] 
 **filterStartIntervalTo** | **String**|  | [optional] 
 **filterParticipantTimeoutFrom** | **String**|  | [optional] 
 **filterParticipantTimeoutTo** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readTest"></a>
# **readTest**
> Test readTest(testID, projectID, opts)

Read test info

This endpoint retrieves test info. Project and test must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new LoaderoController.TestApi();

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
apiInstance.readTest(testID, projectID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**Test**](Test.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTest"></a>
# **updateTest**
> Test updateTest(name, startInterval, participantTimeout, mode, incrementStrategy, script, testID, projectID, opts)

Update existing test

This endpoint updates test with given properties. Project and test must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new LoaderoController.TestApi();

var name = "name_example"; // String | 

var startInterval = 789; // Number | 

var participantTimeout = 789; // Number | 

var mode = "mode_example"; // String | 

var incrementStrategy = "incrementStrategy_example"; // String | 

var script = "script_example"; // String | 

var testID = 789; // Number | 

var projectID = 789; // Number | 

var opts = { 
  'describe': "describe_example", // String | 
  'id': 789, // Number | readonly: true
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | readonly: true
  'updated': new Date("2013-10-20T19:20:30+01:00"), // Date | readonly: true
  'projectId': 789, // Number | readonly: true
  'scriptFileId': 789, // Number | readonly: true
  'deleted': true, // Boolean | readonly: true
  'groupCount': 789, // Number | readonly: true
  'participantCount': 789 // Number | readonly: true
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTest(name, startInterval, participantTimeout, mode, incrementStrategy, script, testID, projectID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **startInterval** | **Number**|  | 
 **participantTimeout** | **Number**|  | 
 **mode** | **String**|  | 
 **incrementStrategy** | **String**|  | 
 **script** | **String**|  | 
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 
 **id** | **Number**| readonly: true | [optional] 
 **created** | **Date**| readonly: true | [optional] 
 **updated** | **Date**| readonly: true | [optional] 
 **projectId** | **Number**| readonly: true | [optional] 
 **scriptFileId** | **Number**| readonly: true | [optional] 
 **deleted** | **Boolean**| readonly: true | [optional] 
 **groupCount** | **Number**| readonly: true | [optional] 
 **participantCount** | **Number**| readonly: true | [optional] 

### Return type

[**Test**](Test.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

