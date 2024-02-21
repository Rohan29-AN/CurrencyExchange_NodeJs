const { default: axios } = require("axios")
const BASE_URL = "https://open.er-api.com/v6/latest/"
module.exports = {

    /**
 * Retrieves all exchange rates for a specific currency based on a given base currency.
 * @param {string} base The base currency code for which exchange rates are requested.
 * @returns {Promise<Object>} An object containing the base currency code, last update time (UTC), and exchange rates.
 * @throws {Error} If an error occurs while fetching the exchange rates.
 */
    async getAllExchangeRatesForCurrency(base) {
        try {
            const result = await axios.get(`${BASE_URL}${base}`)
            if (result.status == 200) {
                const value = {
                    "base_code": base,
                    "time_laste_update_utc": result.data.time_last_update_utc,
                    "rates": result.data.rates
                }
                return value
            }
        }
        catch (error) {
            throw error
        }
    },

    /**
 * Retrieves the exchange rate between two currencies.
 * @param {string} fromCurrency The currency code from which the exchange rate is calculated.
 * @param {string} toCurrency The currency code to which the exchange rate is calculated.
 * @returns {Promise<Object>} An object containing the exchange rate details.
 * @throws {Error} If an error occurs during the exchange rate retrieval or if the destination currency is not found.
 */
    async getExchangeRate(fromCurrency, toCurrency) {
        try {
            const exchangeRates = await module.exports.getAllExchangeRatesForCurrency(fromCurrency)
            // Check if the destination currency exists in the exchange rates list
            if (exchangeRates.rates.hasOwnProperty(toCurrency)) {
                const result = {
                    source: fromCurrency,
                    destination: toCurrency,
                    value: exchangeRates.rates[toCurrency]
                }
                return result
            }
            else {
                throw new Error(`${toCurrency} is not present in the exchange rates list.`)
            }
        }
        catch (error) {
            throw error
        }
    }

}