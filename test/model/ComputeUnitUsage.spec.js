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
 * Swagger Codegen version: 2.4.21
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
    describe('ComputeUnitUsage', function() {
      beforeEach(function() {
        instance = new LoaderoController.ComputeUnitUsage();
      });

      it('should create an instance of ComputeUnitUsage', function() {
        // TODO: update the code to test ComputeUnitUsage
        expect(instance).to.be.a(LoaderoController.ComputeUnitUsage);
      });

      it('should have the property included (base name: "included")', function() {
        // TODO: update the code to test the property included
        expect(instance).to.have.property('included');
        // expect(instance.included).to.be(expectedValueLiteral);
      });

      it('should have the property used (base name: "used")', function() {
        // TODO: update the code to test the property used
        expect(instance).to.have.property('used');
        // expect(instance.used).to.be(expectedValueLiteral);
      });

    });
  });

}));