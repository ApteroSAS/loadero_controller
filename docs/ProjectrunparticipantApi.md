# LoaderoController.ProjectrunparticipantApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllProjectRunParticipants**](ProjectrunparticipantApi.md#readAllProjectRunParticipants) | **GET** /projects/{projectID}/runs/{runID}/participants/ | Get all existing project run participants for run
[**readProjectRunParticipant**](ProjectrunparticipantApi.md#readProjectRunParticipant) | **GET** /projects/{projectID}/runs/{runID}/participants/{runParticipantID}/ | Get existing project run participant

<a name="readAllProjectRunParticipants"></a>
# **readAllProjectRunParticipants**
> InlineResponse2001 readAllProjectRunParticipants(runID, projectID, opts)

Get all existing project run participants for run

This endpoint retrieves all project run participant info.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ProjectrunparticipantApi();
let runID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
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
apiInstance.readAllProjectRunParticipants(runID, projectID, opts, (error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readProjectRunParticipant"></a>
# **readProjectRunParticipant**
> RunParticipantBody readProjectRunParticipant(runParticipantID, runID, projectID)

Get existing project run participant

This endpoint retrieves project run participant info. Run, run participant must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ProjectrunparticipantApi();
let runParticipantID = 789; // Number | 
let runID = 789; // Number | 
let projectID = 789; // Number | 

apiInstance.readProjectRunParticipant(runParticipantID, runID, projectID, (error, data, response) => {
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
 **runParticipantID** | **Number**|  | 
 **runID** | **Number**|  | 
 **projectID** | **Number**|  | 

### Return type

[**RunParticipantBody**](RunParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

