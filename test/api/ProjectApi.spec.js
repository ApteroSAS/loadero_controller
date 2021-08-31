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
    instance = new LoaderoController.ProjectApi();
  });

  describe('(package)', function() {
    describe('ProjectApi', function() {
      describe('readProject', function() {
        it('should call readProject successfully', function(done) {
          // TODO: uncomment, update parameter values for readProject call and complete the assertions
          /*
          var projectID = 789;
          var opts = {};
          opts.describe = "describe_example";

          instance.readProject(projectID, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(LoaderoController.FullProject);
            expect(data.accountRole).to.be.a('string');
            expect(data.accountRole).to.be("");
            expect(data.awsInfoId).to.be.a('number');
            expect(data.awsInfoId).to.be("0");
            expect(data.computeUnitUsage).to.be.a(LoaderoController.ComputeUnitUsage);
                  expect(data.computeUnitUsage.included).to.be.a('number');
              expect(data.computeUnitUsage.included).to.be("0");
              expect(data.computeUnitUsage.used).to.be.a('number');
              expect(data.computeUnitUsage.used).to.be("0");
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.language).to.be.a('string');
            expect(data.language).to.be("");
            expect(data.memberCount).to.be.a('number');
            expect(data.memberCount).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.subscription).to.be.a(LoaderoController.Subscription);
                  expect(data.subscription.activationDate).to.be.a(Date);
              expect(data.subscription.activationDate).to.be(new Date());
              expect(data.subscription.billingEmail).to.be.a('string');
              expect(data.subscription.billingEmail).to.be("");
              expect(data.subscription.created).to.be.a(Date);
              expect(data.subscription.created).to.be(new Date());
              expect(data.subscription.earlySubscriber).to.be.a('boolean');
              expect(data.subscription.earlySubscriber).to.be(false);
              expect(data.subscription.id).to.be.a('number');
              expect(data.subscription.id).to.be("0");
              expect(data.subscription.paymentPlan).to.be.a('string');
              expect(data.subscription.paymentPlan).to.be("");
              expect(data.subscription.paymentStatus).to.be.a('string');
              expect(data.subscription.paymentStatus).to.be("");
              expect(data.subscription.updated).to.be.a(Date);
              expect(data.subscription.updated).to.be(new Date());
            expect(data.subscriptionId).to.be.a('number');
            expect(data.subscriptionId).to.be("0");
            expect(data.trialExpired).to.be.a('boolean');
            expect(data.trialExpired).to.be(false);
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