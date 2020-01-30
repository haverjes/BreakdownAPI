# TestApi.DefaultApi

All URIs are relative to *http://localhost:5001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEntry**](DefaultApi.md#createEntry) | **POST** /dbtest | 
[**getTestData**](DefaultApi.md#getTestData) | **GET** /dbtest | Your GET endpoint
[**putDbtest**](DefaultApi.md#putDbtest) | **PUT** /dbtest | 



## createEntry

> createEntry(opts)



### Example

```javascript
import TestApi from 'test_api';

let apiInstance = new TestApi.DefaultApi();
let opts = {
  'testData': new TestApi.TestData() // TestData | 
};
apiInstance.createEntry(opts, (error, data, response) => {
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
 **testData** | [**TestData**](TestData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getTestData

> Array getTestData()

Your GET endpoint

### Example

```javascript
import TestApi from 'test_api';

let apiInstance = new TestApi.DefaultApi();
apiInstance.getTestData((error, data, response) => {
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

**Array**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putDbtest

> putDbtest(opts)



### Example

```javascript
import TestApi from 'test_api';

let apiInstance = new TestApi.DefaultApi();
let opts = {
  'testData': new TestApi.TestData() // TestData | 
};
apiInstance.putDbtest(opts, (error, data, response) => {
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
 **testData** | [**TestData**](TestData.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

