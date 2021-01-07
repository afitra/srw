// Question:

// Take an array containing integer values as an input.
// Return the ratios of positive numbers, negative numbers, zeros, even and odd to the length of the array.

// The numbers should be rounded to 3 decimal places.

// Example:

// NumberRatio([-4,3,-9,0,4,1,5]) = [0.571, 0.286, 0.143, 0.429, 0.571]

function NumberRatio(input) {
  let obj = {
    positif: 0,
    negatif: 0,
    nol: 0,
    genap: 0,
    ganjil: 0,
  }
  var result = []
  for (let a = 0; a < input.length; a++) {
    if (input[a] % 2 == 0) {
      obj.genap += 1
    } else {
      obj.ganjil += 1
    }

    if (input[a] < 0) {
      obj.negatif += 1
    } else if (input[a] == 0) {
      obj.nol += 1
    } else {
      obj.positif += 1
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    // console.log(`${key}: ${value}`);
    var temp = value / input.length

    result.push(temp.toFixed(3))
  }
  return result
}
console.log(NumberRatio([-4, 3, -9, 0, 4, 1, 5]))
