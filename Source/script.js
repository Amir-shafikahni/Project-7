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
    $.title = "Converter °F to °C";
    $.querySelector(".title").innerHTML = "Converter °F to °C";
    tempInput.setAttribute("placeholder", "32°F");
    Unitstatus = "F";
  } else {
    $.title = "Converter °C to °F";
    $.querySelector(".title").innerHTML = "Converter °C to °F";
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
        tempAmount + "°c is equal to " + ((tempAmount * 9) / 5 + 32).toFixed(2) + "°F";
    } else {
      resultBox.innerHTML =
        tempAmount + "°F is equal to " + ((tempAmount - 32) * 5/9).toFixed(2) + "°c";
    }
  }
});