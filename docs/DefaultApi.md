# BreakDownApi.DefaultApi

All URIs are relative to *https://ourwebapp20200123033131.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](DefaultApi.md#createUser) | **POST** /users | 
[**getUserTickets**](DefaultApi.md#getUserTickets) | **GET** /users/{userID}/tickets | Get tickets for user
[**getUsersUserID**](DefaultApi.md#getUsersUserID) | **GET** /users/{userID} | Get specific user
[**updateUser**](DefaultApi.md#updateUser) | **PUT** /users/{userID} | 



## createUser

> createUser(opts)



Create a new user

### Example

```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.DefaultApi();
let opts = {
  'appUser': new BreakDownApi.AppUser() // AppUser | 
};
apiInstance.createUser(opts, (error, data, response) => {
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
 **appUser** | [**AppUser**](AppUser.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getUserTickets

> [ServiceTicket] getUserTickets(userID)

Get tickets for user

Return tickets related to a specific user.

### Example

```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.DefaultApi();
let userID = "userID_example"; // String | 
apiInstance.getUserTickets(userID, (error, data, response) => {
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
 **userID** | **String**|  | 

### Return type

[**[ServiceTicket]**](ServiceTicket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersUserID

> AppUser getUsersUserID(userID)

Get specific user

### Example

```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.DefaultApi();
let userID = "userID_example"; // String | 
apiInstance.getUsersUserID(userID, (error, data, response) => {
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
 **userID** | **String**|  | 

### Return type

[**AppUser**](AppUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> updateUser(userID, opts)



Update part of a user&#39;s records

### Example

```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.DefaultApi();
let userID = "userID_example"; // String | 
let opts = {
  'appUser': new BreakDownApi.AppUser() // AppUser | 
};
apiInstance.updateUser(userID, opts, (error, data, response) => {
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
 **userID** | **String**|  | 
 **appUser** | [**AppUser**](AppUser.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

