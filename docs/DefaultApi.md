# BreakDownApi.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/Capstone-group-proje/BrokeDown/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](DefaultApi.md#createUser) | **POST** /users | 
[**getUserTickets**](DefaultApi.md#getUserTickets) | **GET** /users/{userID}/tickets | Get tickets for user
[**getUsers**](DefaultApi.md#getUsers) | **GET** /users | Query Users
[**getUsersUserID**](DefaultApi.md#getUsersUserID) | **GET** /users/{userID} | Get specific user
[**updateUser**](DefaultApi.md#updateUser) | **PUT** /users/{userID} | 

<a name="createUser"></a>
# **createUser**
> createUser()



Create a new user

### Example
```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.DefaultApi();

apiInstance.createUser(, (error, data, response) => {
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
 **body** | [**AppUser**](AppUser.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getUserTickets"></a>
# **getUserTickets**
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

<a name="getUsers"></a>
# **getUsers**
> [AppUser] getUsers()

Query Users

### Example
```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.DefaultApi();
apiInstance.getUsers((error, data, response) => {
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

[**[AppUser]**](AppUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsersUserID"></a>
# **getUsersUserID**
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

<a name="updateUser"></a>
# **updateUser**
> updateUser(userID)



Update part of a user&#x27;s records

### Example
```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.DefaultApi();
let userID = "userID_example"; // String | 

apiInstance.updateUser(userID, (error, data, response) => {
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
 **body** | [**AppUser**](AppUser.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

