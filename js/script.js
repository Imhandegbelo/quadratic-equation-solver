// event.preventDefault();
console.log("working well")

// Get input values from user
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const submit = document.querySelector('#submit');
const feedback = document.querySelector('#feedback');



function calculate() {
  let A = parseInt(a.value);
  let B = parseInt(b.value);
  let C = parseInt(c.value);
  let D = B * B - 4 * A * C;

  // If any of the inputs are of the type string, remind user to input numbers
  if (isNaN(A) || isNaN(B) || isNaN(C)) {
    feedback.innerHTML = "All inputs MUST be numbers"
    // return
  } 
  else {
    // if all inputs are not of type string, proceed to execute
    if (D == 0) {
      var x = -B / (2 * A);
      feedback.innerHTML = "Roots = " + x + " twice";
    } else if (D < 0) {
      //if D<0, negate it so we can work with it 
      D = -D;
      var x_1 = (-B / (2 * A)).toFixed(4);
      var x_2 = (Math.sqrt(D) / (2 * A)).toFixed(4);
      feedback.innerHTML = "Roots = " + x_1 + "+" + x_2 + "<b>i</b>" + " and " + x_1 + "-" + x_2 + "<b>i</b>";
    } else {
      var x1 = (-B + Math.sqrt(D)) / (2 * A).toFixed(4);
      var x2 = (-B - Math.sqrt(D)) / (2 * A).toFixed(4);
      feedback.innerHTML = "Roots = " + x1 + " and " + x2;
    }
  }
  return
}

function getValues() {
  // If 'a' is empty, terminate and warn user
  // else proceed with execution
  if(a.value ===""|| a.value == "0") {
    feedback.innerHTML = "'a' cannot be Zero or EMPTY"
  } else{
    calculate()
  }
  // console.log(`a = ${typeof (a.value)}, b = ${b.value} and c=${c.value}`)
  // console.log(`a = ${A}, b = ${B} and c=${C}`)
}

