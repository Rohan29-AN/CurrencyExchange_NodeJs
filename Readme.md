# Currency Exchange Module - Free

This module provides functionality to retrieve exchange rates for specific currencies and calculate exchange rates between different currencies.

## Installation


To install the module, you can use npm:

```bash

npm  install  free_exchange_rate

```

  

## Usage

  

First, import the module in your Node.js application:

  

```javascript

const { getAllExchangeRatesForCurrency ,getExchangeRate} = require('./path/to/your/module');

```

### getAllExchangeRatesForCurrency(base)


Retrieves all exchange rates for a specific currency based on a given base currency.

  

```javascript

const allExchangeRates= await getAllExchangeRatesForCurrency('USD')
```
### getExchangeRate(fromCurrency, toCurrency)

Retrieves the exchange rate between two currencies.

```javascript
const exchangeRateUSDtoEUR=await getExchangeRate('USD', 'MGA')
```
## API Documentation

  

### getAllExchangeRatesForCurrency(base)

  

-  **base**: The base currency code for which exchange rates are requested.

-  **Returns**: A Promise that resolves to an object containing the base currency code, last update time (UTC), and exchange rates.

-  **Throws**: Error if an error occurs while fetching the exchange rates.

  

### getExchangeRate(fromCurrency, toCurrency)

  

-  **fromCurrency**: The currency code from which the exchange rate is calculated.

-  **toCurrency**: The currency code to which the exchange rate is calculated.

-  **Returns**: A Promise that resolves to an object containing the exchange rate details.

-  **Throws**: Error if an error occurs during the exchange rate retrieval or if the destination currency is not found.

  

## Error Handling

  

Both functions handle errors gracefully and throw appropriate error messages if any errors occur during the retrieval of exchange rates.

  

**Copyright**

© 2024 Rohan29. All rights reserved.