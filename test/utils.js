/* jshint node:true */
/* global describe, it */
"use strict";

var jsc = require("../lib/jsverify.js");
var _ = require("underscore");
var expect = require("chai").expect;

describe("jsc.utils", function () {
  describe("merge", function () {
    it("≡ _.extend({}, ...", function () {
      jsc.assert(jsc.forall("dict", "dict", function (x, y) {
        var a = jsc.utils.merge(x, y);
        var b = _.extend({}, x, y);
        return _.isEqual(a, b);
      }));
    });
  });

  describe("ilog2", function () {
    it("returns integers, examples", function () {
      expect(jsc.utils.ilog2(0)).to.equal(0);
      expect(jsc.utils.ilog2(1)).to.equal(0);
      expect(jsc.utils.ilog2(2)).to.equal(1);
      expect(jsc.utils.ilog2(3)).to.equal(1);
      expect(jsc.utils.ilog2(4)).to.equal(2);
    });
  });
});
