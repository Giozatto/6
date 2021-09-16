
"use strict"; 

function solveEquation(a, b, c) {
  let D = b ** 2 - (4 * a * c);
  if(D < 0) {
    return [];
  }
 
  if(D == 0) {
    let x = -b / (2 * a);
    return [x];
  }
  
  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return[x1, x2];
  }
  
  }




function calculateTotalMortgage(percent, contribution, amount, date) {

    if((typeof percent) == 'string')
        percent = Number(percent);
    if((typeof contribution) == 'string')
        contribution = Number(contribution);
    if((typeof amount) == 'string')
        amount = Number(amount);

    if( percent < 0 )
        return `Параметр percent содержит неправильное значение ${percent}.`
    if(contribution < 0)
         return `Параметр contribution содержит неправильное значение ${contribution}.`
    if(amount < 0)
         return `Параметр amount содержит неправильное значение ${amount}.`
    if(date < new Date())
         return `Параметр date содержит неправильное значение ${date}.`

    let S = amount - contribution;
    let today = new Date();
    let yearDiff = date.getFullYear() - new Date.getFullYear();
    let monthDiff = date.getMonth() - new Date.getMonth();
    let months = (year_diff * 12) + month_diff;
    let P = (percent / 12) / 100;
    let monthAmount = S * (P + P / (((1 + P) ** months) - 1));
    let totalAmount = months * monthAmount;

    console.log(totalAmount.toFixed(2));
    
    return Number(totalAmount.toFixed(2));
}
