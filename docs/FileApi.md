# LoaderoController.FileApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readFile**](FileApi.md#readFile) | **GET** /projects/{projectID}/files/{fileID}/ | Read file info.


<a name="readFile"></a>
# **readFile**
> File readFile(fileID, projectID, opts)

Read file info.

This endpoint retrieves file info.

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new LoaderoController.FileApi();

var fileID = 789; // Number | 

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
apiInstance.readFile(fileID, projectID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

