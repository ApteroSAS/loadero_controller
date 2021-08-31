# LoaderoController.GroupparticipantsApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroupParticipant**](GroupparticipantsApi.md#createGroupParticipant) | **POST** /projects/{projectID}/tests/{testID}/groups/{groupID}/participants/ | Create new group participant.
[**deleteGroupParticipant**](GroupparticipantsApi.md#deleteGroupParticipant) | **DELETE** /projects/{projectID}/tests/{testID}/groups/{groupID}/participants/{participantID}/ | Delete existing group participant.
[**duplicateGroupParticipant**](GroupparticipantsApi.md#duplicateGroupParticipant) | **POST** /projects/{projectID}/tests/{testID}/groups/{groupID}/participants/{participantID}/copy/ | Duplicate existing group participant.
[**readAllGroupParticipants**](GroupparticipantsApi.md#readAllGroupParticipants) | **GET** /projects/{projectID}/tests/{testID}/groups/{groupID}/participants/ | Get all existing group participants for group.
[**readGroupParticipant**](GroupparticipantsApi.md#readGroupParticipant) | **GET** /projects/{projectID}/tests/{testID}/groups/{groupID}/participants/{participantID}/ | Get existing group participant.
[**updateGroupParticipant**](GroupparticipantsApi.md#updateGroupParticipant) | **PUT** /projects/{projectID}/tests/{testID}/groups/{groupID}/participants/{participantID}/ | Update existing group participant.

<a name="createGroupParticipant"></a>
# **createGroupParticipant**
> GroupParticipantBody createGroupParticipant(projectID, testID, groupID, opts)

Create new group participant.

This endpoint creates new group participant with given properties.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupparticipantsApi();
let projectID = 789; // Number | 
let testID = 789; // Number | 
let groupID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.GroupParticipantBody(), // GroupParticipantBody | 
  'describe': "describe_example" // String | 
};
apiInstance.createGroupParticipant(projectID, testID, groupID, opts, (error, data, response) => {
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
 **groupID** | **Number**|  | 
 **body** | [**GroupParticipantBody**](GroupParticipantBody.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**GroupParticipantBody**](GroupParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroupParticipant"></a>
# **deleteGroupParticipant**
> deleteGroupParticipant(participantID, projectID, testID, groupID)

Delete existing group participant.

This endpoint deletes group participant.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupparticipantsApi();
let participantID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let groupID = 789; // Number | 

apiInstance.deleteGroupParticipant(participantID, projectID, testID, groupID, (error, data, response) => {
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
 **groupID** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="duplicateGroupParticipant"></a>
# **duplicateGroupParticipant**
> GroupParticipantBody duplicateGroupParticipant(participantID, projectID, testID, groupID, opts)

Duplicate existing group participant.

This endpoint duplicates given group participant. If no copy name is provided an \&quot;Copy of\&quot; prefix will be applied to the participant name.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupparticipantsApi();
let participantID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let groupID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.duplicateGroupParticipant(participantID, projectID, testID, groupID, opts, (error, data, response) => {
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
 **groupID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**GroupParticipantBody**](GroupParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAllGroupParticipants"></a>
# **readAllGroupParticipants**
> InlineResponse2008 readAllGroupParticipants(projectID, testID, groupID, opts)

Get all existing group participants for group.

This endpoint retrieves all group participant info.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupparticipantsApi();
let projectID = 789; // Number | 
let testID = 789; // Number | 
let groupID = 789; // Number | 
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
apiInstance.readAllGroupParticipants(projectID, testID, groupID, opts, (error, data, response) => {
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
 **groupID** | **Number**|  | 
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

<a name="readGroupParticipant"></a>
# **readGroupParticipant**
> GroupParticipantBody readGroupParticipant(participantID, projectID, testID, groupID, opts)

Get existing group participant.

This endpoint retrieves group participant info.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupparticipantsApi();
let participantID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let groupID = 789; // Number | 
let opts = { 
  'describe': "describe_example" // String | 
};
apiInstance.readGroupParticipant(participantID, projectID, testID, groupID, opts, (error, data, response) => {
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
 **groupID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**GroupParticipantBody**](GroupParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateGroupParticipant"></a>
# **updateGroupParticipant**
> GroupParticipantBody updateGroupParticipant(participantID, projectID, testID, groupID, opts)

Update existing group participant.

This endpoint updates group participant with given properties.

### Example
```javascript
import {LoaderoController} from 'loadero_controller';
let defaultClient = LoaderoController.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new LoaderoController.GroupparticipantsApi();
let participantID = 789; // Number | 
let projectID = 789; // Number | 
let testID = 789; // Number | 
let groupID = 789; // Number | 
let opts = { 
  'body': new LoaderoController.GroupParticipantBody(), // GroupParticipantBody | 
  'describe': "describe_example" // String | 
};
apiInstance.updateGroupParticipant(participantID, projectID, testID, groupID, opts, (error, data, response) => {
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
 **groupID** | **Number**|  | 
 **body** | [**GroupParticipantBody**](GroupParticipantBody.md)|  | [optional] 
 **describe** | **String**|  | [optional] 

### Return type

[**GroupParticipantBody**](GroupParticipantBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

