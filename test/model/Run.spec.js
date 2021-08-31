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
    describe('Run', function() {
      beforeEach(function() {
        instance = new LoaderoController.Run();
      });

      it('should create an instance of Run', function() {
        // TODO: update the code to test Run
        expect(instance).to.be.a(LoaderoController.Run);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property executionFinished (base name: "execution_finished")', function() {
        // TODO: update the code to test the property executionFinished
        expect(instance).to.have.property('executionFinished');
        // expect(instance.executionFinished).to.be(expectedValueLiteral);
      });

      it('should have the property executionStarted (base name: "execution_started")', function() {
        // TODO: update the code to test the property executionStarted
        expect(instance).to.have.property('executionStarted');
        // expect(instance.executionStarted).to.be(expectedValueLiteral);
      });

      it('should have the property groupCount (base name: "group_count")', function() {
        // TODO: update the code to test the property groupCount
        expect(instance).to.have.property('groupCount');
        // expect(instance.groupCount).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property incrementStrategy (base name: "increment_strategy")', function() {
        // TODO: update the code to test the property incrementStrategy
        expect(instance).to.have.property('incrementStrategy');
        // expect(instance.incrementStrategy).to.be(expectedValueLiteral);
      });

      it('should have the property launchingAccountId (base name: "launching_account_id")', function() {
        // TODO: update the code to test the property launchingAccountId
        expect(instance).to.have.property('launchingAccountId');
        // expect(instance.launchingAccountId).to.be(expectedValueLiteral);
      });

      it('should have the property participantTimeout (base name: "participant_timeout")', function() {
        // TODO: update the code to test the property participantTimeout
        expect(instance).to.have.property('participantTimeout');
        // expect(instance.participantTimeout).to.be(expectedValueLiteral);
      });

      it('should have the property processingFinished (base name: "processing_finished")', function() {
        // TODO: update the code to test the property processingFinished
        expect(instance).to.have.property('processingFinished');
        // expect(instance.processingFinished).to.be(expectedValueLiteral);
      });

      it('should have the property processingStarted (base name: "processing_started")', function() {
        // TODO: update the code to test the property processingStarted
        expect(instance).to.have.property('processingStarted');
        // expect(instance.processingStarted).to.be(expectedValueLiteral);
      });

      it('should have the property scriptFileId (base name: "script_file_id")', function() {
        // TODO: update the code to test the property scriptFileId
        expect(instance).to.have.property('scriptFileId');
        // expect(instance.scriptFileId).to.be(expectedValueLiteral);
      });

      it('should have the property startInterval (base name: "start_interval")', function() {
        // TODO: update the code to test the property startInterval
        expect(instance).to.have.property('startInterval');
        // expect(instance.startInterval).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property successRate (base name: "success_rate")', function() {
        // TODO: update the code to test the property successRate
        expect(instance).to.have.property('successRate');
        // expect(instance.successRate).to.be(expectedValueLiteral);
      });

      it('should have the property testId (base name: "test_id")', function() {
        // TODO: update the code to test the property testId
        expect(instance).to.have.property('testId');
        // expect(instance.testId).to.be(expectedValueLiteral);
      });

      it('should have the property testMode (base name: "test_mode")', function() {
        // TODO: update the code to test the property testMode
        expect(instance).to.have.property('testMode');
        // expect(instance.testMode).to.be(expectedValueLiteral);
      });

      it('should have the property testName (base name: "test_name")', function() {
        // TODO: update the code to test the property testName
        expect(instance).to.have.property('testName');
        // expect(instance.testName).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

    });
  });

}));
