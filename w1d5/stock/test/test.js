var assert = require("chai").assert;
var entryAndExit = require("../stockEntryandExit.js");

describe("entry", function() {
  it("should return 20", function() {
    var prices = [50,21,30,20,35,31,49,40];
    var result = stockEntryandExit(prices);
    assert.isTrue(result[0] === 20);
  });
})
describe("exit", function() {
  it("should return 49", function() {
    var prices = [24,21,30,20,35,31,49,40];
    var result = stockEntryandExit(prices);
    assert.isTrue(result[1] === 49);
  });
})
describe("entry", function() {
  it("should return 1", function() {
    var prices = [1,2];
    var result = stockEntryandExit(prices);
    assert.isTrue(result[0] === 1);
  });
})
describe("exit", function() {
  it("should return 49", function() {
    var prices = [1,2];
    var result = stockEntryandExit(prices);
    assert.isTrue(result[1] === 2);
  });
})
