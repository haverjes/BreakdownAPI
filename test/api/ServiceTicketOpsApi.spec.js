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
    instance = new BreakDownApi.ServiceTicketOpsApi();
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

  describe('ServiceTicketOpsApi', function() {
    describe('addTicket', function() {
      it('should call addTicket successfully', function(done) {
        //uncomment below and update the code to test addTicket
        //instance.addTicket(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchTickets', function() {
      it('should call searchTickets successfully', function(done) {
        //uncomment below and update the code to test searchTickets
        //instance.searchTickets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTicket', function() {
      it('should call updateTicket successfully', function(done) {
        //uncomment below and update the code to test updateTicket
        //instance.updateTicket(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
