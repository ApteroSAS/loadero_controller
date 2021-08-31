# LoaderoController.GroupApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](GroupApi.md#createGroup) | **POST** /projects/{projectID}/tests/{testID}/groups/ | Create new group
[**deleteGroup**](GroupApi.md#deleteGroup) | **DELETE** /projects/{projectID}/tests/{testID}/groups/{groupID}/ | Delete existing group
[**duplicateGroup**](GroupApi.md#duplicateGroup) | **POST** /projects/{projectID}/tests/{testID}/groups/{groupID}/copy/ | Duplicate existing group
[**readAllGroups**](GroupApi.md#readAllGroups) | **GET** /projects/{projectID}/tests/{testID}/groups/ | Get all existing groups for test
[**readGroup**](GroupApi.md#readGroup) | **GET** /projects/{projectID}/tests/{testID}/groups/{groupID}/ | Read group info
[**updateGroup**](GroupApi.md#updateGroup) | **PUT** /projects/{projectID}/tests/{testID}/groups/{groupID}/ | Update existing group

<a name="createGroup"></a>
# **createGroup**
> Group createGroup(projectID, testID, opts)

Create new group

This endpoint creates new group with given data.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupApi();
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.Group(), // Group | 
  'describe': "describe_example" // String | 
};
apiInstance.createGroup(projectID, testID, opts, (error, data, response) => {
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
 **body** | [**Group**](Group.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(groupID, projectID, testID)

Delete existing group

This endpoint deletes group. Test and group must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupApi();
let groupID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 

apiInstance.deleteGroup(groupID, projectID, testID, (error, data, response) => {
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
 **groupID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="duplicateGroup"></a>
# **duplicateGroup**
> Group duplicateGroup(groupID, projectID, testID, opts)

Duplicate existing group

This endpoint duplicates given group. If no copy name is provided an \&quot;Copy of\&quot; prefix will be applied to the group name. Test and group must be previously created.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupApi();
let groupID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.GroupIDCopyBody(), // GroupIDCopyBody | 
  'describe': "describe_example" // String | 
};
apiInstance.duplicateGroup(groupID, projectID, testID, opts, (error, data, response) => {
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
 **groupID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **body** | [**GroupIDCopyBody**](GroupIDCopyBody.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readAllGroups"></a>
# **readAllGroups**
> InlineResponse2007 readAllGroups(projectID, testID, opts)

Get all existing groups for test

This endpoint retrieves all group info. Test must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupApi();
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'limit': 789, // Number | 
  'offset': 789, // Number | 
  'describe': "describe_example", // String | 
  'filterName': "filterName_example", // String | 
  'filterCountFrom': "filterCountFrom_example", // String | 
  'filterCountTo': "filterCountTo_example" // String | 
};
apiInstance.readAllGroups(projectID, testID, opts, (error, data, response) => {
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
 **filterName** | **String**|  | [optional] 
 **filterCountFrom** | **String**|  | [optional] 
 **filterCountTo** | **String**|  | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readGroup"></a>
# **readGroup**
> Group readGroup(groupID, projectID, testID, opts)

Read group info

This endpoint retrieves group info. Test and group must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupApi();
let groupID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readGroup(groupID, projectID, testID, opts, (error, data, response) => {
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
 **groupID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateGroup"></a>
# **updateGroup**
> Group updateGroup(groupID, projectID, testID, opts)

Update existing group

This endpoint updates group with given properties. Test and group must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupApi();
let groupID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.Group(), // Group | 
  'describe': "describe_example" // String | 
};
apiInstance.updateGroup(groupID, projectID, testID, opts, (error, data, response) => {
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
 **groupID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **body** | [**Group**](Group.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

