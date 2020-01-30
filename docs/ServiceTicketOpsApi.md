# BreakDownApi.ServiceTicketOpsApi

All URIs are relative to *https://virtserver.swaggerhub.com/Capstone-group-proje/BrokeDown/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTicket**](ServiceTicketOpsApi.md#addTicket) | **POST** /tickets | adds an service Ticket
[**searchTickets**](ServiceTicketOpsApi.md#searchTickets) | **GET** /tickets | Fetch service tickets
[**updateTicket**](ServiceTicketOpsApi.md#updateTicket) | **PUT** /tickets | adds an service Ticket

<a name="addTicket"></a>
# **addTicket**
> addTicket()

adds an service Ticket

Adds an Ticket to the system

### Example
```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.ServiceTicketOpsApi();

apiInstance.addTicket(, (error, data, response) => {
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
 **body** | [**ServiceTicket**](ServiceTicket.md)| Ticket item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchTickets"></a>
# **searchTickets**
> [ServiceTicket] searchTickets(opts)

Fetch service tickets

By passing in the appropriate options, you can search for available tickets in the system

### Example
```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.ServiceTicketOpsApi();
let opts = { 
  'skip': 56, // Number | number of records to skip for pagination
  'limit': 56 // Number | maximum number of records to return
};
apiInstance.searchTickets(opts, (error, data, response) => {
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

[**[ServiceTicket]**](ServiceTicket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTicket"></a>
# **updateTicket**
> updateTicket()

adds an service Ticket

Updates an Ticket to the system

### Example
```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.ServiceTicketOpsApi();

apiInstance.updateTicket(, (error, data, response) => {
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
 **body** | [**ServiceTicket**](ServiceTicket.md)| Ticket item to update | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

