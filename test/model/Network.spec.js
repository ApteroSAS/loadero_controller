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
    describe('Network', function() {
      beforeEach(function() {
        instance = new LoaderoController.Network();
      });

      it('should create an instance of Network', function() {
        // TODO: update the code to test Network
        expect(instance).to.be.a(LoaderoController.Network);
      });

      it('should have the property classificator (base name: "classificator")', function() {
        // TODO: update the code to test the property classificator
        expect(instance).to.have.property('classificator');
        // expect(instance.classificator).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property disabled (base name: "disabled")', function() {
        // TODO: update the code to test the property disabled
        expect(instance).to.have.property('disabled');
        // expect(instance.disabled).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));
