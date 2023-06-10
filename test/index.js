'use strict';

const almostEqual = require('almost-equal');
const test = require('tape');
const isFunction = require('lodash.isfunction');

const pmf = require('../');

test('exports a function', (t) => {
  t.plan(1);
  t.ok(isFunction(pmf));
});

test('calculates binomial probability', (t) => {
  t.plan(2);
  t.equal(pmf(2, 3, 0.7), 0.441);
  t.ok(
    almostEqual(pmf(7, 10, 0.7), 0.266827932, 0.000000001),
    'pmf(7, 10, 0.7) ≈ 0.266827932'
  );
});
