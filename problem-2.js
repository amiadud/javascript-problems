function avg_mark(a, b, c) {
    var total = a + b + c;
    var average = total / 3;
    return average;
  }
  // var result = avg_mark(80, 90, 70);
  // console.log(result); // Output: 80
  var result = avg_mark(120, 90, 70);
  var floatResult = parseFloat(result.toFixed(2));
  console.log(floatResult); // Output: 80.00