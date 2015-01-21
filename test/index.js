var pmf = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(pmf));
});

test('calculates binomial probability', function(t) {
  t.plan(2);
  t.equal(pmf(2, 3, 0.7), 0.441);
  t.equal(pmf(7, 10, 0.7), 0.26682793199999993);
});