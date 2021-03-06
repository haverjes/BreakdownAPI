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

import ApiClient from '../ApiClient';

/**
 * The Vehicle model module.
 * @module model/Vehicle
 * @version 1.0.0
 */
class Vehicle {
    /**
     * Constructs a new <code>Vehicle</code>.
     * @alias module:model/Vehicle
     */
    constructor() { 
        
        Vehicle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Vehicle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vehicle} obj Optional instance to populate.
     * @return {module:model/Vehicle} The populated <code>Vehicle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vehicle();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Vehicle.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Vehicle.prototype['name'] = undefined;

/**
 * @member {String} type
 */
Vehicle.prototype['type'] = undefined;






export default Vehicle;

