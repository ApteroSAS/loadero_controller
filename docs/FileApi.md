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
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.FileApi();
let fileID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readFile(fileID, projectID, opts, (error, data, response) => {
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
 **fileID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

**File**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

