# binomial-pmf

Binomial probability mass function.

## Example

``` javascript
const pmf = require('binomial-pmf');

pmf(2, 3, 0.7);
// => 0.441
```

## Installation

``` bash
$ npm install binomial-pmf
```

## API

``` javascript
const pmf = require('binomial-pmf');
```

### `pmf(k, n, p)`

Returns the probability of getting exactly _Number_ `k` successes in _Number_
`n` trials given that the probability of a success is _Number_ `p`.
