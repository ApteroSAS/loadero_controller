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
    describe('FullAssert', function() {
      beforeEach(function() {
        instance = new LoaderoController.FullAssert();
      });

      it('should create an instance of FullAssert', function() {
        // TODO: update the code to test FullAssert
        expect(instance).to.be.a(LoaderoController.FullAssert);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property expected (base name: "expected")', function() {
        // TODO: update the code to test the property expected
        expect(instance).to.have.property('expected');
        // expect(instance.expected).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property operator (base name: "operator")', function() {
        // TODO: update the code to test the property operator
        expect(instance).to.have.property('operator');
        // expect(instance.operator).to.be(expectedValueLiteral);
      });

      it('should have the property path (base name: "path")', function() {
        // TODO: update the code to test the property path
        expect(instance).to.have.property('path');
        // expect(instance.path).to.be(expectedValueLiteral);
      });

      it('should have the property preconditions (base name: "preconditions")', function() {
        // TODO: update the code to test the property preconditions
        expect(instance).to.have.property('preconditions');
        // expect(instance.preconditions).to.be(expectedValueLiteral);
      });

      it('should have the property testId (base name: "test_id")', function() {
        // TODO: update the code to test the property testId
        expect(instance).to.have.property('testId');
        // expect(instance.testId).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

    });
  });

}));
