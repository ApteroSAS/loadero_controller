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
    describe('ArtifactsInfo', function() {
      beforeEach(function() {
        instance = new LoaderoController.ArtifactsInfo();
      });

      it('should create an instance of ArtifactsInfo', function() {
        // TODO: update the code to test ArtifactsInfo
        expect(instance).to.be.a(LoaderoController.ArtifactsInfo);
      });

      it('should have the property audio (base name: "audio")', function() {
        // TODO: update the code to test the property audio
        expect(instance).to.have.property('audio');
        // expect(instance.audio).to.be(expectedValueLiteral);
      });

      it('should have the property downloads (base name: "downloads")', function() {
        // TODO: update the code to test the property downloads
        expect(instance).to.have.property('downloads');
        // expect(instance.downloads).to.be(expectedValueLiteral);
      });

      it('should have the property screenshots (base name: "screenshots")', function() {
        // TODO: update the code to test the property screenshots
        expect(instance).to.have.property('screenshots');
        // expect(instance.screenshots).to.be(expectedValueLiteral);
      });

      it('should have the property video (base name: "video")', function() {
        // TODO: update the code to test the property video
        expect(instance).to.have.property('video');
        // expect(instance.video).to.be(expectedValueLiteral);
      });

    });
  });

}));
