/**
 * BreakDownAPI
 * Backend API for the BreakDown app service.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AppUser from '../model/AppUser';
import ServiceTicket from '../model/ServiceTicket';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/DefaultApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new user
     * @param {Object} opts Optional parameters
     * @param {module:model/AppUser} opts.appUser 
     * @param {module:api/DefaultApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createUser(opts, callback) {
      opts = opts || {};
      let postBody = opts['appUser'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTickets operation.
     * @callback module:api/DefaultApi~getUserTicketsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ServiceTicket>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tickets for user
     * Return tickets related to a specific user.
     * @param {String} userID 
     * @param {module:api/DefaultApi~getUserTicketsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ServiceTicket>}
     */
    getUserTickets(userID, callback) {
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling getUserTickets");
      }

      let pathParams = {
        'userID': userID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ServiceTicket];
      return this.apiClient.callApi(
        '/users/{userID}/tickets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersUserID operation.
     * @callback module:api/DefaultApi~getUsersUserIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get specific user
     * @param {String} userID 
     * @param {module:api/DefaultApi~getUsersUserIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppUser}
     */
    getUsersUserID(userID, callback) {
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling getUsersUserID");
      }

      let pathParams = {
        'userID': userID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AppUser;
      return this.apiClient.callApi(
        '/users/{userID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/DefaultApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update part of a user's records
     * @param {String} userID 
     * @param {Object} opts Optional parameters
     * @param {module:model/AppUser} opts.appUser 
     * @param {module:api/DefaultApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateUser(userID, opts, callback) {
      opts = opts || {};
      let postBody = opts['appUser'];
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling updateUser");
      }

      let pathParams = {
        'userID': userID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/{userID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
