var pmf = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(pmf));
});

test('calculates binomial probability', function(t) {
  t.plan(1);
  t.equal(pmf(2, 3, 0.7), 0.441);
});