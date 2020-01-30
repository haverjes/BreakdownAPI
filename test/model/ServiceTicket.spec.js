/**
 * BreakDownAPI
 * Backend API for the BreakDown app service.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BreakDownApi);
  }
}(this, function(expect, BreakDownApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BreakDownApi.ServiceTicket();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ServiceTicket', function() {
    it('should create an instance of ServiceTicket', function() {
      // uncomment below and update the code to test ServiceTicket
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be.a(BreakDownApi.ServiceTicket);
    });

    it('should have the property ticketID (base name: "ticketID")', function() {
      // uncomment below and update the code to test the property ticketID
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "dateCreated")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be();
    });

    it('should have the property driver (base name: "driver")', function() {
      // uncomment below and update the code to test the property driver
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be();
    });

    it('should have the property serviceLocation (base name: "serviceLocation")', function() {
      // uncomment below and update the code to test the property serviceLocation
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be();
    });

    it('should have the property serviceDistance (base name: "serviceDistance")', function() {
      // uncomment below and update the code to test the property serviceDistance
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be();
    });

    it('should have the property serviceType (base name: "serviceType")', function() {
      // uncomment below and update the code to test the property serviceType
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be();
    });

    it('should have the property custVehicle (base name: "custVehicle")', function() {
      // uncomment below and update the code to test the property custVehicle
      //var instane = new BreakDownApi.ServiceTicket();
      //expect(instance).to.be();
    });

  });

}));