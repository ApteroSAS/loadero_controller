# LoaderoController.PreconditionApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPrecondition**](PreconditionApi.md#createPrecondition) | **POST** /projects/{projectID}/tests/{testID}/asserts/{assertID}/preconditions/ | Create new assert precondition
[**deletePrecondition**](PreconditionApi.md#deletePrecondition) | **DELETE** /projects/{projectID}/tests/{testID}/asserts/{assertID}/preconditions/{preconditionID}/ | Delete existing assert precondition
[**readAllPreconditions**](PreconditionApi.md#readAllPreconditions) | **GET** /projects/{projectID}/tests/{testID}/asserts/{assertID}/preconditions/ | Get all existing assert preconditions for assert
[**readPrecondition**](PreconditionApi.md#readPrecondition) | **GET** /projects/{projectID}/tests/{testID}/asserts/{assertID}/preconditions/{preconditionID}/ | Read assert precondition info
[**updatePrecondition**](PreconditionApi.md#updatePrecondition) | **PUT** /projects/{projectID}/tests/{testID}/asserts/{assertID}/preconditions/{preconditionID}/ | Update existing assert precondition


<a name="createPrecondition"></a>
# **createPrecondition**
> AssertPrecondition createPrecondition(projectID, testID, assertID, opts)

Create new assert precondition

This endpoint creates new assert precondition with given data.

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.PreconditionApi();

var projectID = 789; // Number | 

var testID = 789; // Number | 

var assertID = 789; // Number | 

var opts = { 
  'describe': "describe_example", // String | 
  'precondition': new LoaderoController.AssertPrecondition() // AssertPrecondition | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPrecondition(projectID, testID, assertID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **assertID** | **Number**|  | 
 **describe** | **String**|  | [optional] 
 **precondition** | [**AssertPrecondition**](AssertPrecondition.md)|  | [optional] 

### Return type

[**AssertPrecondition**](AssertPrecondition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePrecondition"></a>
# **deletePrecondition**
> deletePrecondition(preconditionID, projectID, testID, assertID)

Delete existing assert precondition

This endpoint deletes assert precondition. Assert and precondition must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.PreconditionApi();

var preconditionID = 789; // Number | 

var projectID = 789; // Number | 

var testID = 789; // Number | 

var assertID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePrecondition(preconditionID, projectID, testID, assertID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preconditionID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **assertID** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readAllPreconditions"></a>
# **readAllPreconditions**
> Object readAllPreconditions(projectID, testID, assertID, opts)

Get all existing assert preconditions for assert

This endpoint retrieves all assert precodndition info. Assert must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.PreconditionApi();

var projectID = 789; // Number | 

var testID = 789; // Number | 

var assertID = 789; // Number | 

var opts = { 
  'limit': 789, // Number | 
  'offset': 789, // Number | 
  'describe': "describe_example", // String | 
  'filterProperty': "filterProperty_example", // String | 
  'filterOperator': "filterOperator_example", // String | 
  'filterExpected': "filterExpected_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAllPreconditions(projectID, testID, assertID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **assertID** | **Number**|  | 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **describe** | **String**|  | [optional] 
 **filterProperty** | **String**|  | [optional] 
 **filterOperator** | **String**|  | [optional] 
 **filterExpected** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readPrecondition"></a>
# **readPrecondition**
> AssertPrecondition readPrecondition(preconditionID, projectID, testID, assertID, opts)

Read assert precondition info

This endpoint retrieves assert precondition info. Assert and precondition must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.PreconditionApi();

var preconditionID = 789; // Number | 

var projectID = 789; // Number | 

var testID = 789; // Number | 

var assertID = 789; // Number | 

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
apiInstance.readPrecondition(preconditionID, projectID, testID, assertID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preconditionID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **assertID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**AssertPrecondition**](AssertPrecondition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePrecondition"></a>
# **updatePrecondition**
> AssertPrecondition updatePrecondition(preconditionID, projectID, testID, assertID, opts)

Update existing assert precondition

This endpoint updates assert precondition with given properties. Assert and precondition must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.PreconditionApi();

var preconditionID = 789; // Number | 

var projectID = 789; // Number | 

var testID = 789; // Number | 

var assertID = 789; // Number | 

var opts = { 
  'describe': "describe_example", // String | 
  'precondition': new LoaderoController.AssertPrecondition() // AssertPrecondition | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePrecondition(preconditionID, projectID, testID, assertID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preconditionID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **assertID** | **Number**|  | 
 **describe** | **String**|  | [optional] 
 **precondition** | [**AssertPrecondition**](AssertPrecondition.md)|  | [optional] 

### Return type

[**AssertPrecondition**](AssertPrecondition.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

