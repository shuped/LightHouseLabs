var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumArray (array) {
  var sum = 0
  for (var elm of array) {
    sum += elm;
  }
  return sum;
}

function calculateSalesTax(salesData, taxRates) {
  var result = {};
  for (var company of salesData) {
    if (!result[company.name]) {
      var totalSales = sumArray(company.sales)
      result[company.name] = {
        totalSales: totalSales,
        totalTax: totalSales * taxRates[company.province]
      }
    } else {
      var totalSales = sumArray(company.sales)
      result[company.name].totalSales += totalSales
      result[company.name].totalTax += totalSales * taxRates[company.province]
      }
    } 
  return result
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/