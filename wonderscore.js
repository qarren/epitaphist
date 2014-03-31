/**
 * Aphorist Utils file.
 * This could be mereged with Underscore at some point.
 */

(function () {
  // Default setup taken from Backbone
  var root = this;

  var _;
  if (typeof exports !== 'undefined') {
    _ = exports;
  } else {
    _ = root._ = {};
  }

  var Underscore = root._;
  if (!Underscore && (typeof require !== 'undefined')) {
    Underscore = require('underscore');
  }

  Underscore.extend(_, Underscore);

  /**
   * defaultList
   * useful for allowing parameters to either be lists or single objects.
   * wraps and returns the param in a list if it is not a list itself.
   */
  _.defaultList = function (param) {
    param = param || [];
    return (_.isArray(param)) ? param : [param];
  };


  /**
   * keyBy
   * similar to groupBy, but assumes that the iterator return value is unique.
   * ex. var modelMap = _.keyBy(models, 'id');
   */
  _.keyBy = function (collection, iterator) {
    var ob = {},
        eachFunc;

    if (_.isString(iterator)) {
      eachFunc = function (item) {
        ob[item[iterator]] = item;
      };
    } else {
      eachFunc = function (item) {
        ob[iterator(item)] = item;
      };
    }

    _.each(collection, eachFunc);

    return ob;
  };

}).call(this);
