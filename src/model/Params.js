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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LoaderoController) {
      root.LoaderoController = {};
    }
    root.LoaderoController.Params = factory(root.LoaderoController.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Params model module.
   * @module model/Params
   * @version v0.32.1
   */

  /**
   * Constructs a new <code>Params</code>.
   * @alias module:model/Params
   * @class
   * @param browser {String} 
   */
  var exports = function(browser) {
    this.browser = browser;
  };

  /**
   * Constructs a <code>Params</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Params} obj Optional instance to populate.
   * @return {module:model/Params} The populated <code>Params</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('audio_feed'))
        obj.audioFeed = ApiClient.convertToType(data['audio_feed'], 'String');
      if (data.hasOwnProperty('browser'))
        obj.browser = ApiClient.convertToType(data['browser'], 'String');
      if (data.hasOwnProperty('location'))
        obj.location = ApiClient.convertToType(data['location'], 'String');
      if (data.hasOwnProperty('media_type'))
        obj.mediaType = ApiClient.convertToType(data['media_type'], 'String');
      if (data.hasOwnProperty('network'))
        obj.network = ApiClient.convertToType(data['network'], 'String');
      if (data.hasOwnProperty('video_feed'))
        obj.videoFeed = ApiClient.convertToType(data['video_feed'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} audioFeed
   */
  exports.prototype.audioFeed = undefined;

  /**
   * @member {String} browser
   */
  exports.prototype.browser = undefined;

  /**
   * @member {String} location
   */
  exports.prototype.location = undefined;

  /**
   * @member {String} mediaType
   */
  exports.prototype.mediaType = undefined;

  /**
   * @member {String} network
   */
  exports.prototype.network = undefined;

  /**
   * @member {String} videoFeed
   */
  exports.prototype.videoFeed = undefined;


  return exports;

}));