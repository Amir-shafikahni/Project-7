let $ = document;

////////////////////

let tempInput = $.querySelector(".tempInput");
let resultBox = $.querySelector(".resultBox");
let changeBtn = $.querySelector(".changeBtn");
let resetBtn = $.querySelector(".resetBtn");
let convertBtn = $.querySelector(".convertBtn");
let Unitstatus = "°C";
let tempAmount;

changeBtn.addEventListener("click", function () {
  // to change the Web Titles ////////////////
  if (Unitstatus === "°C") {
    $.title = "F to °C Converter";
    $.querySelector(".title").innerHTML = "F to °C Converter";
    tempInput.setAttribute("placeholder", "32F");
    Unitstatus = "F";
  } else {
    $.title = "°C to F Converter";
    $.querySelector(".title").innerHTML = "°C to F Converter";
    tempInput.setAttribute("placeholder", "0°C");
    Unitstatus = "°C";
  }
});

resetBtn.addEventListener("click", function () {
  // to reset input and result box /////////
  tempInput.value = "";
  resultBox.innerHTML = "";
});

convertBtn.addEventListener("click", function () {
  // to calculate the result /////////////
  tempAmount = tempInput.value;
  console.log(tempAmount);
  if (isNaN(tempAmount)) {
    resultBox.style.color = "rgb(177 12 81)";
    resultBox.innerHTML = "Wrong value!";
  } else if (tempAmount === "") {
    resultBox.style.color = "rgb(177 12 81)";
    resultBox.innerHTML = "Enter a value!";
  } else {
    resultBox.style.color = "#bdc3c7";
    if (Unitstatus === "°C") {
      resultBox.innerHTML =
        tempAmount + "°c is equal to " + ((tempAmount * 9) / 5 + 32) + " F";
    } else {
      resultBox.innerHTML =
        tempAmount + " F is equal to " + ((tempAmount - 32) * 5) / 9 + "°c";
    }
  }
});