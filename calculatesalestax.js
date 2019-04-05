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

function addArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function calculateSalesTax(salesData, taxRates) {
  var result = {};
  // first, figure out how youre going to acess your variables - go through all the objects
  for (var i = 0 ; i < salesData.length ; i ++) {
    var salesDataName = salesData[i]["name"];
    var salesDataProvince = salesData[i]["province"];
    var salesDataSales = salesData[i]["sales"];
    // then start manipulating them to get what you need
    var totalSalesfori = addArray(salesDataSales);
    var taxRatesfori = taxRates[salesDataProvince];
    var totalTaxesfori = totalSalesfori * taxRatesfori;
    // check if the company already exists... if it does, you should add to the total, if it doesnt you should create it
    if (result[salesDataName] === undefined) {
      result[salesDataName] = {
        totalSales: totalSalesfori,
        totalTaxes: totalTaxesfori
      }
    } else {
      result[salesDataName]["totalSales"] += totalSalesfori;
      result[salesDataName]["totalTaxes"] += totalTaxesfori;
    }
  }
  return result;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

// console.log(results)

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
