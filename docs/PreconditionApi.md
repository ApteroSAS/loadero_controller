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
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.PreconditionApi();
let projectID = 789; // Number | 
let testID = 789; // Number | 
let assertID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.AssertPrecondition(), // AssertPrecondition | 
  'describe': "describe_example" // String | 
};
apiInstance.createPrecondition(projectID, testID, assertID, opts, (error, data, response) => {
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
 **assertID** | **Number**|  | 
 **body** | [**AssertPrecondition**](AssertPrecondition.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**AssertPrecondition**](AssertPrecondition.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

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
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.PreconditionApi();
let preconditionID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let assertID = 789; // Number | 

apiInstance.deletePrecondition(preconditionID, projectID, testID, assertID, (error, data, response) => {
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
 **preconditionID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **assertID** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAllPreconditions"></a>
# **readAllPreconditions**
> InlineResponse2006 readAllPreconditions(projectID, testID, assertID, opts)

Get all existing assert preconditions for assert

This endpoint retrieves all assert precodndition info. Assert must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.PreconditionApi();
let projectID = 789; // Number | 
let testID = 789; // Number | 
let assertID = 789; // Number | 
let opts = { 
  'limit': 789, // Number | 
  'offset': 789, // Number | 
  'describe': "describe_example", // String | 
  'filterProperty': "filterProperty_example", // String | 
  'filterOperator': "filterOperator_example", // String | 
  'filterExpected': "filterExpected_example" // String | 
};
apiInstance.readAllPreconditions(projectID, testID, assertID, opts, (error, data, response) => {
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
 **assertID** | **Number**|  | 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **describe** | **String**|  | [optional] 
 **filterProperty** | **String**|  | [optional] 
 **filterOperator** | **String**|  | [optional] 
 **filterExpected** | **String**|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readPrecondition"></a>
# **readPrecondition**
> AssertPrecondition readPrecondition(preconditionID, projectID, testID, assertID, opts)

Read assert precondition info

This endpoint retrieves assert precondition info. Assert and precondition must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.PreconditionApi();
let preconditionID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let assertID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readPrecondition(preconditionID, projectID, testID, assertID, opts, (error, data, response) => {
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
 **preconditionID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **assertID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**AssertPrecondition**](AssertPrecondition.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePrecondition"></a>
# **updatePrecondition**
> AssertPrecondition updatePrecondition(preconditionID, projectID, testID, assertID, opts)

Update existing assert precondition

This endpoint updates assert precondition with given properties. Assert and precondition must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.PreconditionApi();
let preconditionID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let assertID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.AssertPrecondition(), // AssertPrecondition | 
  'describe': "describe_example" // String | 
};
apiInstance.updatePrecondition(preconditionID, projectID, testID, assertID, opts, (error, data, response) => {
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
 **preconditionID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **assertID** | **Number**|  | 
 **body** | [**AssertPrecondition**](AssertPrecondition.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**AssertPrecondition**](AssertPrecondition.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

