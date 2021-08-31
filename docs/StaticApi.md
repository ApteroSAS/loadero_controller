# LoaderoController.StaticApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllStaticTypes**](StaticApi.md#readAllStaticTypes) | **GET** /statics/types/ | Read all static type info
[**readAllStatics**](StaticApi.md#readAllStatics) | **GET** /statics/ | Read all static resource info
[**readMetricPath**](StaticApi.md#readMetricPath) | **GET** /statics/metric_path/ | Read all metric path info
[**readStaticResource**](StaticApi.md#readStaticResource) | **GET** /statics/{resource}/ | Read all specified static resource info

<a name="readAllStaticTypes"></a>
# **readAllStaticTypes**
> [&#x27;String&#x27;] readAllStaticTypes()

Read all static type info

This endpoint retrieves all static type info

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.StaticApi();
apiInstance.readAllStaticTypes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#x27;String&#x27;]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAllStatics"></a>
# **readAllStatics**
> {&#x27;String&#x27;: [BaseClassificator]} readAllStatics()

Read all static resource info

This endpoint retrieves all static resource info

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.StaticApi();
apiInstance.readAllStatics((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{&#x27;String&#x27;: [BaseClassificator]}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readMetricPath"></a>
# **readMetricPath**
> [&#x27;String&#x27;] readMetricPath()

Read all metric path info

This endpoint retrieves all available metric paths

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.StaticApi();
apiInstance.readMetricPath((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#x27;String&#x27;]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readStaticResource"></a>
# **readStaticResource**
> [BaseClassificator] readStaticResource(resource)

Read all specified static resource info

This endpoint retrieves all specified static resource info

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.StaticApi();
let resource = "resource_example"; // String | 

apiInstance.readStaticResource(resource, (error, data, response) => {
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
 **resource** | **String**|  | 

### Return type

[**[BaseClassificator]**](BaseClassificator.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

