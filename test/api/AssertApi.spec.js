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

  beforeEach(function() {
    instance = new LoaderoController.AssertApi();
  });

  describe('(package)', function() {
    describe('AssertApi', function() {
      describe('createAssert', function() {
        it('should call createAssert successfully', function(done) {
          // TODO: uncomment, update parameter values for createAssert call and complete the assertions
          /*
          var projectID = 789;
          var testID = 789;
          var opts = {};
          opts.describe = "describe_example";
          opts.assert = new LoaderoController.Assert();
          opts.assert.expected = "";
          opts.assert.operator = "";
          opts.assert.path = "";

          instance.createAssert(projectID, testID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.Assert);
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.expected).to.be.a('string');
            expect(data.expected).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.operator).to.be.a('string');
            expect(data.operator).to.be("");
            expect(data.path).to.be.a('string');
            expect(data.path).to.be("");
            expect(data.testId).to.be.a('number');
            expect(data.testId).to.be("0");
            expect(data.updated).to.be.a(Date);
            expect(data.updated).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteAssert', function() {
        it('should call deleteAssert successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteAssert call
          /*
          var assertID = 789;
          var projectID = 789;
          var testID = 789;

          instance.deleteAssert(assertID, projectID, testID, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('duplicateAssert', function() {
        it('should call duplicateAssert successfully', function(done) {
          // TODO: uncomment, update parameter values for duplicateAssert call and complete the assertions
          /*
          var assertID = 789;
          var projectID = 789;
          var testID = 789;
          var opts = {};
          opts.describe = "describe_example";

          instance.duplicateAssert(assertID, projectID, testID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.Assert);
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.expected).to.be.a('string');
            expect(data.expected).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.operator).to.be.a('string');
            expect(data.operator).to.be("");
            expect(data.path).to.be.a('string');
            expect(data.path).to.be("");
            expect(data.testId).to.be.a('number');
            expect(data.testId).to.be("0");
            expect(data.updated).to.be.a(Date);
            expect(data.updated).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('readAllAsserts', function() {
        it('should call readAllAsserts successfully', function(done) {
          // TODO: uncomment, update parameter values for readAllAsserts call and complete the assertions
          /*
          var projectID = 789;
          var testID = 789;
          var opts = {};
          opts.limit = 789;
          opts.offset = 789;
          opts.describe = "describe_example";
          opts.filterPath = "filterPath_example";
          opts.filterOperator = "filterOperator_example";
          opts.filterExpected = "filterExpected_example";

          instance.readAllAsserts(projectID, testID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('readAssert', function() {
        it('should call readAssert successfully', function(done) {
          // TODO: uncomment, update parameter values for readAssert call and complete the assertions
          /*
          var assertID = 789;
          var projectID = 789;
          var testID = 789;
          var opts = {};
          opts.describe = "describe_example";

          instance.readAssert(assertID, projectID, testID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.Assert);
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.expected).to.be.a('string');
            expect(data.expected).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.operator).to.be.a('string');
            expect(data.operator).to.be("");
            expect(data.path).to.be.a('string');
            expect(data.path).to.be("");
            expect(data.testId).to.be.a('number');
            expect(data.testId).to.be("0");
            expect(data.updated).to.be.a(Date);
            expect(data.updated).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateAssert', function() {
        it('should call updateAssert successfully', function(done) {
          // TODO: uncomment, update parameter values for updateAssert call and complete the assertions
          /*
          var assertID = 789;
          var projectID = 789;
          var testID = 789;
          var opts = {};
          opts.describe = "describe_example";
          opts.assert = new LoaderoController.Assert();
          opts.assert.expected = "";
          opts.assert.operator = "";
          opts.assert.path = "";

          instance.updateAssert(assertID, projectID, testID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.Assert);
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.expected).to.be.a('string');
            expect(data.expected).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.operator).to.be.a('string');
            expect(data.operator).to.be("");
            expect(data.path).to.be.a('string');
            expect(data.path).to.be("");
            expect(data.testId).to.be.a('number');
            expect(data.testId).to.be("0");
            expect(data.updated).to.be.a(Date);
            expect(data.updated).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
