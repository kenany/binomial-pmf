# binomial-pmf

[![Build Status][travis-svg]][travis]
[![Dependency Status][gemnasium-svg]][gemnasium]

Binomial probability mass function.

## Example

``` javascript
var pmf = require('binomial-pmf');

pmf(2, 3, 0.7);
// => 0.441
```

## Installation

``` bash
$ npm install binomial-pmf
```

## API

``` javascript
var pmf = require('binomial-pmf');
```

### `pmf(k, n, p)`

Returns the probability of getting exactly _Number_ `k` successes in _Number_
`n` trials given that the probability of a success is _Number_ `p`.


   [travis]: https://travis-ci.org/KenanY/binomial-pmf
   [travis-svg]: https://img.shields.io/travis/KenanY/binomial-pmf.svg
   [gemnasium]: https://gemnasium.com/KenanY/binomial-pmf
   [gemnasium-svg]: https://img.shields.io/gemnasium/KenanY/binomial-pmf.svg