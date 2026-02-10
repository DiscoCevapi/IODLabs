// math.js functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

// Tests using if statements
function runTests() {
  if (add(2,3) !== 5) console.error("Add test failed");
  else console.log("Add test passed");

  if (subtract(10,5) !== 5) console.error("Subtract test failed");
  else console.log("Subtract test passed");

  if (multiply(3,4) !== 12) console.error("Multiply test failed");
  else console.log("Multiply test passed");

  try {
    divide(10,0);
    console.error("Divide by zero test failed");
  } catch(e) {
    console.log("Divide by zero test passed");
  }

  if (divide(10,2) !== 5) console.error("Divide test failed");
  else console.log("Divide test passed");
}

runTests();
