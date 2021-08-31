# LoaderoController.ProjectrunparticipantApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllProjectRunParticipants**](ProjectrunparticipantApi.md#readAllProjectRunParticipants) | **GET** /projects/{projectID}/runs/{runID}/participants/ | Get all existing project run participants for run
[**readProjectRunParticipant**](ProjectrunparticipantApi.md#readProjectRunParticipant) | **GET** /projects/{projectID}/runs/{runID}/participants/{runParticipantID}/ | Get existing project run participant


<a name="readAllProjectRunParticipants"></a>
# **readAllProjectRunParticipants**
> Object readAllProjectRunParticipants(runID, projectID, opts)

Get all existing project run participants for run

This endpoint retrieves all project run participant info.

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new LoaderoController.ProjectrunparticipantApi();

var runID = 789; // Number | 

var projectID = 789; // Number | 

var opts = { 
  'limit': 789, // Number | 
  'offset': 789, // Number | 
  'describe': "describe_example", // String | 
  'filterBrowser': "filterBrowser_example", // String | 
  'filterNetwork': "filterNetwork_example", // String | 
  'filterLocation': "filterLocation_example", // String | 
  'filterMediaType': "filterMediaType_example", // String | 
  'filterVideoFeed': "filterVideoFeed_example", // String | 
  'filterAudioFeed': "filterAudioFeed_example", // String | 
  'filterName': "filterName_example", // String | 
  'filterNumFrom': "filterNumFrom_example", // String | 
  'filterNumTo': "filterNumTo_example", // String | 
  'filterGroupName': "filterGroupName_example", // String | 
  'filterGroupNumFrom': "filterGroupNumFrom_example", // String | 
  'filterGroupNumTo': "filterGroupNumTo_example", // String | 
  'filterRecordAudio': "filterRecordAudio_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAllProjectRunParticipants(runID, projectID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **describe** | **String**|  | [optional] 
 **filterBrowser** | **String**|  | [optional] 
 **filterNetwork** | **String**|  | [optional] 
 **filterLocation** | **String**|  | [optional] 
 **filterMediaType** | **String**|  | [optional] 
 **filterVideoFeed** | **String**|  | [optional] 
 **filterAudioFeed** | **String**|  | [optional] 
 **filterName** | **String**|  | [optional] 
 **filterNumFrom** | **String**|  | [optional] 
 **filterNumTo** | **String**|  | [optional] 
 **filterGroupName** | **String**|  | [optional] 
 **filterGroupNumFrom** | **String**|  | [optional] 
 **filterGroupNumTo** | **String**|  | [optional] 
 **filterRecordAudio** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readProjectRunParticipant"></a>
# **readProjectRunParticipant**
> RunParticipantBody readProjectRunParticipant(runParticipantID, runID, projectID)

Get existing project run participant

This endpoint retrieves project run participant info. Run, run participant must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new LoaderoController.ProjectrunparticipantApi();

var runParticipantID = 789; // Number | 

var runID = 789; // Number | 

var projectID = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readProjectRunParticipant(runParticipantID, runID, projectID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runParticipantID** | **Number**|  | 
 **runID** | **Number**|  | 
 **projectID** | **Number**|  | 

### Return type

[**RunParticipantBody**](RunParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

