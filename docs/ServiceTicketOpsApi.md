# BreakDownApi.ServiceTicketOpsApi

All URIs are relative to *https://ourwebapp20200123033131.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTicket**](ServiceTicketOpsApi.md#addTicket) | **POST** /tickets | adds an service Ticket
[**searchTickets**](ServiceTicketOpsApi.md#searchTickets) | **GET** /tickets | Fetch service tickets
[**updateTicket**](ServiceTicketOpsApi.md#updateTicket) | **PUT** /tickets | adds an service Ticket



## addTicket

> addTicket(opts)

adds an service Ticket

Adds an Ticket to the system

### Example

```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.ServiceTicketOpsApi();
let opts = {
  'serviceTicket': new BreakDownApi.ServiceTicket() // ServiceTicket | Ticket item to add
};
apiInstance.addTicket(opts, (error, data, response) => {
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
 **serviceTicket** | [**ServiceTicket**](ServiceTicket.md)| Ticket item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## searchTickets

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


## updateTicket

> updateTicket(opts)

adds an service Ticket

Updates an Ticket to the system

### Example

```javascript
import BreakDownApi from 'break_down_api';

let apiInstance = new BreakDownApi.ServiceTicketOpsApi();
let opts = {
  'serviceTicket': new BreakDownApi.ServiceTicket() // ServiceTicket | Ticket item to update
};
apiInstance.updateTicket(opts, (error, data, response) => {
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
 **serviceTicket** | [**ServiceTicket**](ServiceTicket.md)| Ticket item to update | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

