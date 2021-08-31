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
    instance = new LoaderoController.PreconditionApi();
  });

  describe('(package)', function() {
    describe('PreconditionApi', function() {
      describe('createPrecondition', function() {
        it('should call createPrecondition successfully', function(done) {
          // TODO: uncomment, update parameter values for createPrecondition call and complete the assertions
          /*
          var projectID = 789;
          var testID = 789;
          var assertID = 789;
          var opts = {};
          opts.describe = "describe_example";
          opts.precondition = new LoaderoController.AssertPrecondition();
          opts.precondition.expected = "";
          opts.precondition.operator = "";
          opts.precondition.property = "";

          instance.createPrecondition(projectID, testID, assertID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.AssertPrecondition);
            expect(data.assertId).to.be.a('number');
            expect(data.assertId).to.be("0");
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.expected).to.be.a('string');
            expect(data.expected).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.operator).to.be.a('string');
            expect(data.operator).to.be("");
            expect(data.property).to.be.a('string');
            expect(data.property).to.be("");
            expect(data.updated).to.be.a(Date);
            expect(data.updated).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deletePrecondition', function() {
        it('should call deletePrecondition successfully', function(done) {
          // TODO: uncomment, update parameter values for deletePrecondition call
          /*
          var preconditionID = 789;
          var projectID = 789;
          var testID = 789;
          var assertID = 789;

          instance.deletePrecondition(preconditionID, projectID, testID, assertID, function(error, data, response) {
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
      describe('readAllPreconditions', function() {
        it('should call readAllPreconditions successfully', function(done) {
          // TODO: uncomment, update parameter values for readAllPreconditions call and complete the assertions
          /*
          var projectID = 789;
          var testID = 789;
          var assertID = 789;
          var opts = {};
          opts.limit = 789;
          opts.offset = 789;
          opts.describe = "describe_example";
          opts.filterProperty = "filterProperty_example";
          opts.filterOperator = "filterOperator_example";
          opts.filterExpected = "filterExpected_example";

          instance.readAllPreconditions(projectID, testID, assertID, opts, function(error, data, response) {
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
      describe('readPrecondition', function() {
        it('should call readPrecondition successfully', function(done) {
          // TODO: uncomment, update parameter values for readPrecondition call and complete the assertions
          /*
          var preconditionID = 789;
          var projectID = 789;
          var testID = 789;
          var assertID = 789;
          var opts = {};
          opts.describe = "describe_example";

          instance.readPrecondition(preconditionID, projectID, testID, assertID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.AssertPrecondition);
            expect(data.assertId).to.be.a('number');
            expect(data.assertId).to.be("0");
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.expected).to.be.a('string');
            expect(data.expected).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.operator).to.be.a('string');
            expect(data.operator).to.be("");
            expect(data.property).to.be.a('string');
            expect(data.property).to.be("");
            expect(data.updated).to.be.a(Date);
            expect(data.updated).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatePrecondition', function() {
        it('should call updatePrecondition successfully', function(done) {
          // TODO: uncomment, update parameter values for updatePrecondition call and complete the assertions
          /*
          var preconditionID = 789;
          var projectID = 789;
          var testID = 789;
          var assertID = 789;
          var opts = {};
          opts.describe = "describe_example";
          opts.precondition = new LoaderoController.AssertPrecondition();
          opts.precondition.expected = "";
          opts.precondition.operator = "";
          opts.precondition.property = "";

          instance.updatePrecondition(preconditionID, projectID, testID, assertID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.AssertPrecondition);
            expect(data.assertId).to.be.a('number');
            expect(data.assertId).to.be("0");
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.expected).to.be.a('string');
            expect(data.expected).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.operator).to.be.a('string');
            expect(data.operator).to.be("");
            expect(data.property).to.be.a('string');
            expect(data.property).to.be("");
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