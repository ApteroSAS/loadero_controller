# LoaderoController.ParticipantsApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createParticipant**](ParticipantsApi.md#createParticipant) | **POST** /projects/{projectID}/tests/{testID}/participants/ | Create new participant.
[**deleteParticipant**](ParticipantsApi.md#deleteParticipant) | **DELETE** /projects/{projectID}/tests/{testID}/participants/{participantID}/ | Delete existing participant.
[**duplicateParticipant**](ParticipantsApi.md#duplicateParticipant) | **POST** /projects/{projectID}/tests/{testID}/participants/{participantID}/copy/ | Duplicate existing participant
[**readAllParticipants**](ParticipantsApi.md#readAllParticipants) | **GET** /projects/{projectID}/tests/{testID}/participants/ | Get all existing participants for test.
[**readParticipant**](ParticipantsApi.md#readParticipant) | **GET** /projects/{projectID}/tests/{testID}/participants/{participantID}/ | Get existing participant.
[**updateParticipant**](ParticipantsApi.md#updateParticipant) | **PUT** /projects/{projectID}/tests/{testID}/participants/{participantID}/ | Update existing participant.

<a name="createParticipant"></a>
# **createParticipant**
> ParticipantBody createParticipant(projectID, testID, opts)

Create new participant.

This endpoint creates new participant with given properties.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ParticipantsApi();
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.ParticipantBody(), // ParticipantBody | 
  'describe': "describe_example" // String | 
};
apiInstance.createParticipant(projectID, testID, opts, (error, data, response) => {
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
 **body** | [**ParticipantBody**](ParticipantBody.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**ParticipantBody**](ParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteParticipant"></a>
# **deleteParticipant**
> deleteParticipant(participantID, projectID, testID)

Delete existing participant.

This endpoint deletes participant.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ParticipantsApi();
let participantID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 

apiInstance.deleteParticipant(participantID, projectID, testID, (error, data, response) => {
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
 **participantID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="duplicateParticipant"></a>
# **duplicateParticipant**
> ParticipantBody duplicateParticipant(participantID, projectID, testID, opts)

Duplicate existing participant

This endpoint duplicates given participant. If no copy name is provided an \&quot;Copy of\&quot; prefix will be applied to the participant name. Group and participant must be previously created.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ParticipantsApi();
let participantID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.ParticipantIDCopyBody(), // ParticipantIDCopyBody | 
  'describe': "describe_example" // String | 
};
apiInstance.duplicateParticipant(participantID, projectID, testID, opts, (error, data, response) => {
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
 **participantID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **body** | [**ParticipantIDCopyBody**](ParticipantIDCopyBody.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**ParticipantBody**](ParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readAllParticipants"></a>
# **readAllParticipants**
> InlineResponse2008 readAllParticipants(projectID, testID, opts)

Get all existing participants for test.

This endpoint retrieves all participant info.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ParticipantsApi();
let projectID = 789; // Number | 
let testID = 789; // Number | 
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
  'filterCountFrom': "filterCountFrom_example", // String | 
  'filterCountTo': "filterCountTo_example", // String | 
  'filterComputeUnit': "filterComputeUnit_example", // String | 
  'filterHasGroup': "filterHasGroup_example", // String | 
  'filterRecordAudio': "filterRecordAudio_example" // String | 
};
apiInstance.readAllParticipants(projectID, testID, opts, (error, data, response) => {
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
 **filterBrowser** | **String**|  | [optional] 
 **filterNetwork** | **String**|  | [optional] 
 **filterLocation** | **String**|  | [optional] 
 **filterMediaType** | **String**|  | [optional] 
 **filterVideoFeed** | **String**|  | [optional] 
 **filterAudioFeed** | **String**|  | [optional] 
 **filterName** | **String**|  | [optional] 
 **filterCountFrom** | **String**|  | [optional] 
 **filterCountTo** | **String**|  | [optional] 
 **filterComputeUnit** | **String**|  | [optional] 
 **filterHasGroup** | **String**|  | [optional] 
 **filterRecordAudio** | **String**|  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readParticipant"></a>
# **readParticipant**
> ParticipantBody readParticipant(participantID, projectID, testID, opts)

Get existing participant.

This endpoint retrieves participant info.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ParticipantsApi();
let participantID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readParticipant(participantID, projectID, testID, opts, (error, data, response) => {
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
 **participantID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**ParticipantBody**](ParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateParticipant"></a>
# **updateParticipant**
> ParticipantBody updateParticipant(participantID, projectID, testID, opts)

Update existing participant.

This endpoint updates participant with given properties.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.ParticipantsApi();
let participantID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.ParticipantBody(), // ParticipantBody | 
  'describe': "describe_example" // String | 
};
apiInstance.updateParticipant(participantID, projectID, testID, opts, (error, data, response) => {
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
 **participantID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **testID** | **Number**|  | 
 **body** | [**ParticipantBody**](ParticipantBody.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**ParticipantBody**](ParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

