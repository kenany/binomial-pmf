var almostEqual = require('almost-equal');
var test = require('tape');
var isFunction = require('lodash.isfunction');

var pmf = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(pmf));
});

test('calculates binomial probability', function(t) {
  t.plan(2);
  t.equal(pmf(2, 3, 0.7), 0.441);
  t.ok(
    almostEqual(pmf(7, 10, 0.7), 0.266827932, 0.000000001),
    'pmf(7, 10, 0.7) ≈ 0.266827932'
  );
});
