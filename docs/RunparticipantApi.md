# LoaderoController.RunparticipantApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllTestRunParticipants**](RunparticipantApi.md#readAllTestRunParticipants) | **GET** /projects/{projectID}/tests/{testID}/runs/{runID}/participants/ | Get all existing test run participants for run
[**readTestRunParticipant**](RunparticipantApi.md#readTestRunParticipant) | **GET** /projects/{projectID}/tests/{testID}/runs/{runID}/participants/{runParticipantID}/ | Get existing test run participant

<a name="readAllTestRunParticipants"></a>
# **readAllTestRunParticipants**
> InlineResponse2001 readAllTestRunParticipants(runID, testID, projectID, opts)

Get all existing test run participants for run

This endpoint retrieves all test run participant info.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.RunparticipantApi();
let runID = 789; // Number | 
let testID = 789; // Number | 
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
apiInstance.readAllTestRunParticipants(runID, testID, projectID, opts, (error, data, response) => {
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
 **testID** | **Number**|  | 
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

<a name="readTestRunParticipant"></a>
# **readTestRunParticipant**
> RunParticipantBody readTestRunParticipant(runParticipantID, runID, testID, projectID, opts)

Get existing test run participant

This endpoint retrieves test run participant info. Run, run participant must be previously created

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.RunparticipantApi();
let runParticipantID = 789; // Number | 
let runID = 789; // Number | 
let testID = 789; // Number | 
let projectID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readTestRunParticipant(runParticipantID, runID, testID, projectID, opts, (error, data, response) => {
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
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**RunParticipantBody**](RunParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

