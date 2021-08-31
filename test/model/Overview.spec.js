/*
 * Loadero Controller
 * This application serves main Loadero's endpoints that can be used to manipulate test data and other services
 *
 * OpenAPI spec version: v0.32.1
 * Contact: support@loadero.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.27
 *
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
    factory(root.expect, root.LoaderoController);
  }
}(this, function(expect, LoaderoController) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Overview', function() {
      beforeEach(function() {
        instance = new LoaderoController.Overview();
      });

      it('should create an instance of Overview', function() {
        // TODO: update the code to test Overview
        expect(instance).to.be.a(LoaderoController.Overview);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property end (base name: "end")', function() {
        // TODO: update the code to test the property end
        expect(instance).to.have.property('end');
        // expect(instance.end).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property participantDetails (base name: "participant_details")', function() {
        // TODO: update the code to test the property participantDetails
        expect(instance).to.have.property('participantDetails');
        // expect(instance.participantDetails).to.be(expectedValueLiteral);
      });

      it('should have the property profileParams (base name: "profile_params")', function() {
        // TODO: update the code to test the property profileParams
        expect(instance).to.have.property('profileParams');
        // expect(instance.profileParams).to.be(expectedValueLiteral);
      });

      it('should have the property runParticipantId (base name: "run_participant_id")', function() {
        // TODO: update the code to test the property runParticipantId
        expect(instance).to.have.property('runParticipantId');
        // expect(instance.runParticipantId).to.be(expectedValueLiteral);
      });

      it('should have the property seleniumResult (base name: "selenium_result")', function() {
        // TODO: update the code to test the property seleniumResult
        expect(instance).to.have.property('seleniumResult');
        // expect(instance.seleniumResult).to.be(expectedValueLiteral);
      });

      it('should have the property start (base name: "start")', function() {
        // TODO: update the code to test the property start
        expect(instance).to.have.property('start');
        // expect(instance.start).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

    });
  });

}));
