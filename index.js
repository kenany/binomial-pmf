const binomial = require('choose');

/**
 * @param {number} k
 * @param {number} n
 * @param {number} p
 * @returns {number}
 */
function pmf(k, n, p) {
  return binomial(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

module.exports = pmf;
