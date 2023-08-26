export function currencyFormat(number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number);
  }
  
  export function percentFormat(number) {
    if (number <= 0) return '---';
  
    return Number(number).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 0,
    });
  }
  
 function sum(list) {
               //Implement the sum function so that it calculates the monthly income and expenditure  
      }

  
  export { sum };

 