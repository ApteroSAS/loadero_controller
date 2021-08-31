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
    instance = new LoaderoController.TestApi();
  });

  describe('(package)', function() {
    describe('TestApi', function() {
      describe('createTest', function() {
        it('should call createTest successfully', function(done) {
          // TODO: uncomment, update parameter values for createTest call and complete the assertions
          /*
          var name = "name_example";
          var startInterval = 789;
          var participantTimeout = 789;
          var mode = "mode_example";
          var incrementStrategy = "incrementStrategy_example";
          var script = "script_example";
          var projectID = 789;
          var opts = {};
          opts.describe = "describe_example";
          opts.id = 789;
          opts.created = new Date("2013-10-20T19:20:30+01:00");
          opts.updated = new Date("2013-10-20T19:20:30+01:00");
          opts.projectId = 789;
          opts.scriptFileId = 789;
          opts.deleted = true;
          opts.groupCount = 789;
          opts.participantCount = 789;

          instance.createTest(name, startInterval, participantTimeout, mode, incrementStrategy, script, projectID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.Test);
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.groupCount).to.be.a('number');
            expect(data.groupCount).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.incrementStrategy).to.be.a('string');
            expect(data.incrementStrategy).to.be("");
            expect(data.mode).to.be.a('string');
            expect(data.mode).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.participantCount).to.be.a('number');
            expect(data.participantCount).to.be("0");
            expect(data.participantTimeout).to.be.a('number');
            expect(data.participantTimeout).to.be("0");
            expect(data.projectId).to.be.a('number');
            expect(data.projectId).to.be("0");
            expect(data.scriptFileId).to.be.a('number');
            expect(data.scriptFileId).to.be("0");
            expect(data.startInterval).to.be.a('number');
            expect(data.startInterval).to.be("0");
            expect(data.updated).to.be.a(Date);
            expect(data.updated).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteTest', function() {
        it('should call deleteTest successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteTest call
          /*
          var testID = 789;
          var projectID = 789;

          instance.deleteTest(testID, projectID, function(error, data, response) {
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
      describe('duplicateTest', function() {
        it('should call duplicateTest successfully', function(done) {
          // TODO: uncomment, update parameter values for duplicateTest call and complete the assertions
          /*
          var testID = 789;
          var projectID = 789;
          var opts = {};
          opts.body = new LoaderoController.Body();
          opts.describe = "describe_example";

          instance.duplicateTest(testID, projectID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.Test);
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.groupCount).to.be.a('number');
            expect(data.groupCount).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.incrementStrategy).to.be.a('string');
            expect(data.incrementStrategy).to.be("");
            expect(data.mode).to.be.a('string');
            expect(data.mode).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.participantCount).to.be.a('number');
            expect(data.participantCount).to.be("0");
            expect(data.participantTimeout).to.be.a('number');
            expect(data.participantTimeout).to.be("0");
            expect(data.projectId).to.be.a('number');
            expect(data.projectId).to.be("0");
            expect(data.scriptFileId).to.be.a('number');
            expect(data.scriptFileId).to.be("0");
            expect(data.startInterval).to.be.a('number');
            expect(data.startInterval).to.be("0");
            expect(data.updated).to.be.a(Date);
            expect(data.updated).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('readAllTests', function() {
        it('should call readAllTests successfully', function(done) {
          // TODO: uncomment, update parameter values for readAllTests call and complete the assertions
          /*
          var projectID = 789;
          var opts = {};
          opts.limit = 789;
          opts.offset = 789;
          opts.describe = "describe_example";
          opts.filterName = "filterName_example";
          opts.filterTestMode = "filterTestMode_example";
          opts.filterIncrementStrategy = "filterIncrementStrategy_example";
          opts.filterStartIntervalFrom = "filterStartIntervalFrom_example";
          opts.filterStartIntervalTo = "filterStartIntervalTo_example";
          opts.filterParticipantTimeoutFrom = "filterParticipantTimeoutFrom_example";
          opts.filterParticipantTimeoutTo = "filterParticipantTimeoutTo_example";

          instance.readAllTests(projectID, opts, function(error, data, response) {
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
      describe('readTest', function() {
        it('should call readTest successfully', function(done) {
          // TODO: uncomment, update parameter values for readTest call and complete the assertions
          /*
          var testID = 789;
          var projectID = 789;
          var opts = {};
          opts.describe = "describe_example";

          instance.readTest(testID, projectID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.Test);
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.groupCount).to.be.a('number');
            expect(data.groupCount).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.incrementStrategy).to.be.a('string');
            expect(data.incrementStrategy).to.be("");
            expect(data.mode).to.be.a('string');
            expect(data.mode).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.participantCount).to.be.a('number');
            expect(data.participantCount).to.be("0");
            expect(data.participantTimeout).to.be.a('number');
            expect(data.participantTimeout).to.be("0");
            expect(data.projectId).to.be.a('number');
            expect(data.projectId).to.be("0");
            expect(data.scriptFileId).to.be.a('number');
            expect(data.scriptFileId).to.be("0");
            expect(data.startInterval).to.be.a('number');
            expect(data.startInterval).to.be("0");
            expect(data.updated).to.be.a(Date);
            expect(data.updated).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateTest', function() {
        it('should call updateTest successfully', function(done) {
          // TODO: uncomment, update parameter values for updateTest call and complete the assertions
          /*
          var name = "name_example";
          var startInterval = 789;
          var participantTimeout = 789;
          var mode = "mode_example";
          var incrementStrategy = "incrementStrategy_example";
          var script = "script_example";
          var testID = 789;
          var projectID = 789;
          var opts = {};
          opts.describe = "describe_example";
          opts.id = 789;
          opts.created = new Date("2013-10-20T19:20:30+01:00");
          opts.updated = new Date("2013-10-20T19:20:30+01:00");
          opts.projectId = 789;
          opts.scriptFileId = 789;
          opts.deleted = true;
          opts.groupCount = 789;
          opts.participantCount = 789;

          instance.updateTest(name, startInterval, participantTimeout, mode, incrementStrategy, script, testID, projectID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.Test);
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.groupCount).to.be.a('number');
            expect(data.groupCount).to.be("0");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.incrementStrategy).to.be.a('string');
            expect(data.incrementStrategy).to.be("");
            expect(data.mode).to.be.a('string');
            expect(data.mode).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.participantCount).to.be.a('number');
            expect(data.participantCount).to.be("0");
            expect(data.participantTimeout).to.be.a('number');
            expect(data.participantTimeout).to.be("0");
            expect(data.projectId).to.be.a('number');
            expect(data.projectId).to.be("0");
            expect(data.scriptFileId).to.be.a('number');
            expect(data.scriptFileId).to.be("0");
            expect(data.startInterval).to.be.a('number');
            expect(data.startInterval).to.be("0");
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