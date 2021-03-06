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
    describe('BillingInvoice', function() {
      beforeEach(function() {
        instance = new LoaderoController.BillingInvoice();
      });

      it('should create an instance of BillingInvoice', function() {
        // TODO: update the code to test BillingInvoice
        expect(instance).to.be.a(LoaderoController.BillingInvoice);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property computeUnits (base name: "compute_units")', function() {
        // TODO: update the code to test the property computeUnits
        expect(instance).to.have.property('computeUnits');
        // expect(instance.computeUnits).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property hostedInvoiceUrl (base name: "hosted_invoice_url")', function() {
        // TODO: update the code to test the property hostedInvoiceUrl
        expect(instance).to.have.property('hostedInvoiceUrl');
        // expect(instance.hostedInvoiceUrl).to.be(expectedValueLiteral);
      });

      it('should have the property paidAt (base name: "paid_at")', function() {
        // TODO: update the code to test the property paidAt
        expect(instance).to.have.property('paidAt');
        // expect(instance.paidAt).to.be(expectedValueLiteral);
      });

      it('should have the property pdf (base name: "pdf")', function() {
        // TODO: update the code to test the property pdf
        expect(instance).to.have.property('pdf');
        // expect(instance.pdf).to.be(expectedValueLiteral);
      });

      it('should have the property periodEnd (base name: "period_end")', function() {
        // TODO: update the code to test the property periodEnd
        expect(instance).to.have.property('periodEnd');
        // expect(instance.periodEnd).to.be(expectedValueLiteral);
      });

      it('should have the property periodStart (base name: "period_start")', function() {
        // TODO: update the code to test the property periodStart
        expect(instance).to.have.property('periodStart');
        // expect(instance.periodStart).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));
