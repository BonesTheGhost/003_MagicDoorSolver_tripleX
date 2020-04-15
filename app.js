console.log("[app.js]:: Connected!!")

//Code input areas.
const levelInputField = document.getElementById("levelInput");
const sumInputField = document.getElementById("sumInput");
const productInputField = document.getElementById("productInput");

//Button(s)
const calculateBtn = document.getElementById("btn-calculate");

//Initialize the input variables.
let doorLevel = 0;
let sumInput = 0;
let productInput = 0;

function retrieveInputs() {
  doorLevel = parseInt(levelInputField.value);
  sumInput = parseInt(sumInputField.value);
  productInput = parseInt(productInputField.value);
}

function generatePossibleFactors() {
  let factorsArray = [];
  let upperBound = (doorLevel + doorLevel) - 1;

  console.log("[doorLevel]:: PASSED IN :: " + doorLevel);
  console.log("[factorsArray]:: " + factorsArray);
  console.log("[upperBound]:: " + upperBound);

  for (i=doorLevel; i <= upperBound; i++){
    factorsArray.push(i);
  }

  console.log("[factorsArray]:: " + factorsArray);
  return factorsArray;
}

function generateCodes(factors) {
  
  let foundValue = false;

  let firstFactor = factors;
  let secondFactor = factors;
  let thirdFactor = factors;

  let factorSum = 0;

  while(foundValue == false) {

    for( a = 0; a < firstFactor.length - 1 ; a++){

      for( b = 0; b < secondFactor.length - 1 ; b++){
      
        for( c = 0; c < thirdFactor.length - 1 ; c++){
          
          factorSum = firstFactor[a]+secondFactor[b]+thirdFactor[c];
          console.log(`[ADDING]:: ${firstFactor[a]} + ${secondFactor[b]} + ${thirdFactor[c]}`)

          factorProduct = firstFactor[a]*secondFactor[b]*thirdFactor[c];
          console.log(`[ADDING]:: ${firstFactor[a]} + ${secondFactor[b]} + ${thirdFactor[c]}`)
          if (factorSum == sumInput && factorProduct == productInput){
            firstFactor = factors[a];
            secondFactor = factors[b];
            thirdFactor = factors [c];
            console.log("[Sum Success]: " + firstFactor + " :: " + secondFactor + " :: " + thirdFactor);
            console.log("[Product Success]: " + firstFactor + " :: " + secondFactor + " :: " + thirdFactor);

            FoundValue = true;
          }

        }

      }

    }

  }
}

function getCodes() {
  retrieveInputs();
  let factors = generatePossibleFactors();
  generateCodes(factors);

}

calculateBtn.addEventListener("click", getCodes);