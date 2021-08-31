# LoaderoController.AssertApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAssert**](AssertApi.md#createAssert) | **POST** /projects/{projectID}/tests/{testID}/asserts/ | Create new assert
[**deleteAssert**](AssertApi.md#deleteAssert) | **DELETE** /projects/{projectID}/tests/{testID}/asserts/{assertID}/ | Delete existing assert
[**duplicateAssert**](AssertApi.md#duplicateAssert) | **POST** /projects/{projectID}/tests/{testID}/asserts/{assertID}/copy/ | Duplicate existing assert
[**readAllAsserts**](AssertApi.md#readAllAsserts) | **GET** /projects/{projectID}/tests/{testID}/asserts/ | Get all existing asserts for test
[**readAssert**](AssertApi.md#readAssert) | **GET** /projects/{projectID}/tests/{testID}/asserts/{assertID}/ | Read assert info
[**updateAssert**](AssertApi.md#updateAssert) | **PUT** /projects/{projectID}/tests/{testID}/asserts/{assertID}/ | Update existing assert


<a name="createAssert"></a>
# **createAssert**
> Assert createAssert(projectID, testID, opts)

Create new assert

This endpoint creates new assert with given data.

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.AssertApi();

var projectID = 789; // Number | 

var testID = 789; // Number | 

var opts = { 
  'describe': "describe_example", // String | 
  'assert': new LoaderoController.Assert() // Assert | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAssert(projectID, testID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **describe** | **String**|  | [optional] 
 **assert** | [**Assert**](Assert.md)|  | [optional] 

### Return type

[**Assert**](Assert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssert"></a>
# **deleteAssert**
> deleteAssert(assertID, projectID, testID)

Delete existing assert

This endpoint deletes assert. Test and assert must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.AssertApi();

var assertID = 789; // Number | 

var projectID = 789; // Number | 

var testID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAssert(assertID, projectID, testID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="duplicateAssert"></a>
# **duplicateAssert**
> Assert duplicateAssert(assertID, projectID, testID, opts)

Duplicate existing assert

This endpoint duplicates given assert. Test and assert must be previously created.

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.AssertApi();

var assertID = 789; // Number | 

var projectID = 789; // Number | 

var testID = 789; // Number | 

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
apiInstance.duplicateAssert(assertID, projectID, testID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**Assert**](Assert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readAllAsserts"></a>
# **readAllAsserts**
> Object readAllAsserts(projectID, testID, opts)

Get all existing asserts for test

This endpoint retrieves all assert info. Test must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.AssertApi();

var projectID = 789; // Number | 

var testID = 789; // Number | 

var opts = { 
  'limit': 789, // Number | 
  'offset': 789, // Number | 
  'describe': "describe_example", // String | 
  'filterPath': "filterPath_example", // String | 
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
apiInstance.readAllAsserts(projectID, testID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **describe** | **String**|  | [optional] 
 **filterPath** | **String**|  | [optional] 
 **filterOperator** | **String**|  | [optional] 
 **filterExpected** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readAssert"></a>
# **readAssert**
> Assert readAssert(assertID, projectID, testID, opts)

Read assert info

This endpoint retrieves assert info. Test and assert must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.AssertApi();

var assertID = 789; // Number | 

var projectID = 789; // Number | 

var testID = 789; // Number | 

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
apiInstance.readAssert(assertID, projectID, testID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**Assert**](Assert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAssert"></a>
# **updateAssert**
> Assert updateAssert(assertID, projectID, testID, opts)

Update existing assert

This endpoint updates assert with given properties. Test and assert must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.AssertApi();

var assertID = 789; // Number | 

var projectID = 789; // Number | 

var testID = 789; // Number | 

var opts = { 
  'describe': "describe_example", // String | 
  'assert': new LoaderoController.Assert() // Assert | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAssert(assertID, projectID, testID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **describe** | **String**|  | [optional] 
 **assert** | [**Assert**](Assert.md)|  | [optional] 

### Return type

[**Assert**](Assert.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

