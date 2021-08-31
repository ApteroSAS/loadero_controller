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
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.TestApi();
let name = "name_example"; // String | 
let startInterval = 789; // Number | 
let participantTimeout = 789; // Number | 
let mode = "mode_example"; // String | 
let incrementStrategy = "incrementStrategy_example"; // String | 
let script = "script_example"; // String | 
let projectID = 789; // Number | 
let opts = { 
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
apiInstance.createTest(name, startInterval, participantTimeout, mode, incrementStrategy, script, projectID, opts, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTest"></a>
# **deleteTest**
> deleteTest(testID, projectID)

Delete existing test

This endpoint deletes test. Project and test must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.TestApi();
let testID = 789; // Number | 
let projectID = 789; // Number | 

apiInstance.deleteTest(testID, projectID, (error, data, response) => {
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
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="duplicateTest"></a>
# **duplicateTest**
> Test duplicateTest(testID, projectID, opts)

Duplicate existing test

This endpoint duplicates given test. If no copy name is provided an \&quot;Copy of\&quot; prefix will be applied to the test name. Project and test must be previously created.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.TestApi();
let testID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.TestIDCopyBody(), // TestIDCopyBody | 
  'describe': "describe_example" // String | 
};
apiInstance.duplicateTest(testID, projectID, opts, (error, data, response) => {
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
 **body** | [**TestIDCopyBody**](TestIDCopyBody.md)|  | [optional] 
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
> InlineResponse2004 readAllTests(projectID, opts)

Get all existing tests for project

This endpoint retrieves all test info. Project must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.TestApi();
let projectID = 789; // Number | 
let opts = { 
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
apiInstance.readAllTests(projectID, opts, (error, data, response) => {
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
 **filterName** | **String**|  | [optional] 
 **filterTestMode** | **String**|  | [optional] 
 **filterIncrementStrategy** | **String**|  | [optional] 
 **filterStartIntervalFrom** | **String**|  | [optional] 
 **filterStartIntervalTo** | **String**|  | [optional] 
 **filterParticipantTimeoutFrom** | **String**|  | [optional] 
 **filterParticipantTimeoutTo** | **String**|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readTest"></a>
# **readTest**
> Test readTest(testID, projectID, opts)

Read test info

This endpoint retrieves test info. Project and test must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.TestApi();
let testID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readTest(testID, projectID, opts, (error, data, response) => {
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

[**Test**](Test.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTest"></a>
# **updateTest**
> Test updateTest(name, startInterval, participantTimeout, mode, incrementStrategy, script, testID, projectID, opts)

Update existing test

This endpoint updates test with given properties. Project and test must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.TestApi();
let name = "name_example"; // String | 
let startInterval = 789; // Number | 
let participantTimeout = 789; // Number | 
let mode = "mode_example"; // String | 
let incrementStrategy = "incrementStrategy_example"; // String | 
let script = "script_example"; // String | 
let testID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
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
apiInstance.updateTest(name, startInterval, participantTimeout, mode, incrementStrategy, script, testID, projectID, opts, (error, data, response) => {
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

