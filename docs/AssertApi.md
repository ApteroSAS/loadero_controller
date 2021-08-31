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
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.AssertApi();
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.Assert(), // Assert | 
  'describe': "describe_example" // String | 
};
apiInstance.createAssert(projectID, testID, opts, (error, data, response) => {
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
 **testID** | **Number**|  | 
 **body** | [**Assert**](Assert.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**Assert**](Assert.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

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
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.AssertApi();
let assertID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 

apiInstance.deleteAssert(assertID, projectID, testID, (error, data, response) => {
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
 **assertID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="duplicateAssert"></a>
# **duplicateAssert**
> Assert duplicateAssert(assertID, projectID, testID, opts)

Duplicate existing assert

This endpoint duplicates given assert. Test and assert must be previously created.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.AssertApi();
let assertID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.duplicateAssert(assertID, projectID, testID, opts, (error, data, response) => {
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
 **assertID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**Assert**](Assert.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAllAsserts"></a>
# **readAllAsserts**
> InlineResponse2005 readAllAsserts(projectID, testID, opts)

Get all existing asserts for test

This endpoint retrieves all assert info. Test must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.AssertApi();
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'limit': 789, // Number | 
  'offset': 789, // Number | 
  'describe': "describe_example", // String | 
  'filterPath': "filterPath_example", // String | 
  'filterOperator': "filterOperator_example", // String | 
  'filterExpected': "filterExpected_example" // String | 
};
apiInstance.readAllAsserts(projectID, testID, opts, (error, data, response) => {
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
 **testID** | **Number**|  | 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **describe** | **String**|  | [optional] 
 **filterPath** | **String**|  | [optional] 
 **filterOperator** | **String**|  | [optional] 
 **filterExpected** | **String**|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAssert"></a>
# **readAssert**
> Assert readAssert(assertID, projectID, testID, opts)

Read assert info

This endpoint retrieves assert info. Test and assert must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.AssertApi();
let assertID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readAssert(assertID, projectID, testID, opts, (error, data, response) => {
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
 **assertID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**Assert**](Assert.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAssert"></a>
# **updateAssert**
> Assert updateAssert(assertID, projectID, testID, opts)

Update existing assert

This endpoint updates assert with given properties. Test and assert must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.AssertApi();
let assertID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.Assert(), // Assert | 
  'describe': "describe_example" // String | 
};
apiInstance.updateAssert(assertID, projectID, testID, opts, (error, data, response) => {
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
 **assertID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **body** | [**Assert**](Assert.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**Assert**](Assert.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

