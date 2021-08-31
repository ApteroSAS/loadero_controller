# LoaderoController.ResultApi

All URIs are relative to *http://api.loadero.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllTestResults**](ResultApi.md#readAllTestResults) | **GET** /projects/{projectID}/tests/{testID}/runs/{runID}/results/ | Read all test run results
[**readTestResult**](ResultApi.md#readTestResult) | **GET** /projects/{projectID}/tests/{testID}/runs/{runID}/results/{resultID}/ | Read single test run result
[**readTestResultStatistics**](ResultApi.md#readTestResultStatistics) | **GET** /projects/{projectID}/tests/{testID}/runs/{runID}/results/statistics/ | Read all test result statistics


<a name="readAllTestResults"></a>
# **readAllTestResults**
> Object readAllTestResults(runID, testID, projectID, opts)

Read all test run results

This endpoint retrieves all test run results. Project, test, run must be previously created and run has to be finished in order to get results

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.ResultApi();

var runID = 789; // Number | 

var testID = 789; // Number | 

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
  'filterRecordAudio': "filterRecordAudio_example", // String | 
  'filterStartFrom': "filterStartFrom_example", // String | 
  'filterStartTo': "filterStartTo_example", // String | 
  'filterEndFrom': "filterEndFrom_example", // String | 
  'filterEndTo': "filterEndTo_example", // String | 
  'filterStatus': "filterStatus_example", // String | 
  'filterSeleniumResult': "filterSeleniumResult_example", // String | 
  'filterDone': "filterDone_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAllTestResults(runID, testID, projectID, opts, callback);
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
 **filterStartFrom** | **String**|  | [optional] 
 **filterStartTo** | **String**|  | [optional] 
 **filterEndFrom** | **String**|  | [optional] 
 **filterEndTo** | **String**|  | [optional] 
 **filterStatus** | **String**|  | [optional] 
 **filterSeleniumResult** | **String**|  | [optional] 
 **filterDone** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readTestResult"></a>
# **readTestResult**
> ExtendedResult readTestResult(resultID, runID, testID, projectID, opts)

Read single test run result

This endpoint retrieves single test run result info. Project, test, run and result must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.ResultApi();

var resultID = 789; // Number | 

var runID = 789; // Number | 

var testID = 789; // Number | 

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
apiInstance.readTestResult(resultID, runID, testID, projectID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resultID** | **Number**|  | 
 **runID** | **Number**|  | 
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

[**ExtendedResult**](ExtendedResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readTestResultStatistics"></a>
# **readTestResultStatistics**
> Object readTestResultStatistics(runID, testID, projectID, opts)

Read all test result statistics

This endpoint retrieves all test result statisctics. Project, test and run must be previously created

### Example
```javascript
var LoaderoController = require('loadero_controller');
var defaultClient = LoaderoController.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new LoaderoController.ResultApi();

var runID = 789; // Number | 

var testID = 789; // Number | 

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
apiInstance.readTestResultStatistics(runID, testID, projectID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runID** | **Number**|  | 
 **testID** | **Number**|  | 
 **projectID** | **Number**|  | 
 **describe** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

