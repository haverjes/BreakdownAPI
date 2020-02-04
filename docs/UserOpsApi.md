# BreakDownApi.UserOpsApi

All URIs are relative to *https://ourwebapp20200123033131.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsers**](UserOpsApi.md#getUsers) | **GET** /users | Query Users



## getUsers

> [AppUser] getUsers(opts)

Query Users

### Example

```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.UserOpsApi();
let opts = {
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};
apiInstance.getUsers(opts, (error, data, response) => {
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
 **skip** | **Number**| number of records to skip for pagination | [optional] 
 **limit** | **Number**| maximum number of records to return | [optional] 

### Return type

[**[AppUser]**](AppUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

