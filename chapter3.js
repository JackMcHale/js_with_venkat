/* eslint-disable no-console */

const amountAfterTaxes = function(basePrice,...rates)
{
    let result = basePrice;
    for(const rate of rates)
    {
        result += (basePrice/100 * rate);        
    }
    return result.toFixed(2);
}
const amount = 25.12;

const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;
console.log(amountAfterTaxes(amount)); //25.12 ​  
console.log(amountAfterTaxes(amount, fedTax));
console.log(amountAfterTaxes(amount, fedTax, stateTax)); //28.13 ​  
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax)); //28.26

