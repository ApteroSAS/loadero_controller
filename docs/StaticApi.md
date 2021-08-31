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
> ['String'] readAllStaticTypes()

Read all static type info

This endpoint retrieves all static type info

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.StaticApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAllStaticTypes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**['String']**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readAllStatics"></a>
# **readAllStatics**
> {'String': [BaseClassificator]} readAllStatics()

Read all static resource info

This endpoint retrieves all static resource info

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.StaticApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAllStatics(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{'String': [BaseClassificator]}**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readMetricPath"></a>
# **readMetricPath**
> ['String'] readMetricPath()

Read all metric path info

This endpoint retrieves all available metric paths

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.StaticApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readMetricPath(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**['String']**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readStaticResource"></a>
# **readStaticResource**
> [BaseClassificator] readStaticResource(resource)

Read all specified static resource info

This endpoint retrieves all specified static resource info

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.StaticApi();

var resource = "resource_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readStaticResource(resource, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **String**|  | 

### Return type

[**[BaseClassificator]**](BaseClassificator.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

