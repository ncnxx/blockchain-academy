export const calculateValue = (prices, currency, amountInCurrency) => {
  if (currency === 'THB') {
    return amountInCurrency;
  }
  console.log(currency, amountInCurrency, this.props);
  if (prices) {
    const priceObjectOfThisCurrency = prices[`THB-${currency}`];
    console.log('priceObjectOfThisCurrency', priceObjectOfThisCurrency);
    if (priceObjectOfThisCurrency) {
      return priceObjectOfThisCurrency.last_price * amountInCurrency;
    }
  }
  return 0.0;
};
