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

/**
* UserOps service.
* @module api/UserOpsApi
* @version 1.0.0
*/
export default class UserOpsApi {

    /**
    * Constructs a new UserOpsApi. 
    * @alias module:api/UserOpsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/UserOpsApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AppUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query Users
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip number of records to skip for pagination
     * @param {Number} opts.limit maximum number of records to return
     * @param {module:api/UserOpsApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AppUser>}
     */
    getUsers(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'skip': opts['skip'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AppUser];
      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
