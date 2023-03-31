const name_input = document.getElementById("name_input");
const number = document.getElementById("number_input");
const month = document.getElementById("mm_input");
const year = document.getElementById("yy_input");
const cv = document.getElementById("cv");
const button = document.getElementById("button");
const continue_button = document.getElementById("button1");
const container = document.getElementById("container");
const targetDiv = document.getElementById("container2");
let valid_number = null;
let valid_cv = null;
let valid_month = null;
let valid_year = null;
let valid_name_input = null;

const wrong_number = document.getElementById("wrong-number");
const wrong_month = document.getElementById("wrong-month");
const wrong_cv = document.getElementById("wrong-cv");
const wrong_year = document.getElementById("wrong-year");
const card_number = document.getElementById("card_number");
const card_name =document.getElementById("card_name");
const card_month = document.getElementById("card_month");
const card_year = document.getElementById("card_year");
const card_cv = document.getElementById("card_cv");

button.addEventListener("click", (event) => {
    event.preventDefault();
    toggleDivDisplay();   
  });

name_input.addEventListener("input", () =>{
    var name_inputValue = name_input.value;
    var regex = /\d/; // regular expression to block special characters
  
    if (regex.test(name_inputValue)) {
      name_input.value = name_inputValue.replace(regex, ''); // remove special characters from input
    };

    // var name_inputNumber = Text(name_inputValue);
    if(isNaN(name_inputValue)){
        name_input.style.borderColor = "rgba(223, 222, 224, 1)";
        card_name.textContent = name_inputValue;
        valid_name_input = true;
        return true;
      }
      else{
        name_input.style.borderColor = "red";
        card_name.textContent = "JANE APPLESSED";
        valid_name_input = false;
        return false;
      }

 
});
//wlis inputi
year.addEventListener("input", () =>{
    var yearValue = year.value;
    var yearNumber = Number(yearValue);
    if(!isNaN(yearNumber) && yearValue.length === 4 && yearNumber >= 2023 && yearNumber <= 2028){
        var formattedYear = yearValue.padStart(4);
        wrong_year.style.display = "none";
        year.style.borderColor = "rgba(223, 222, 224, 1)";
        year.value = formattedYear;
        card_year.textContent = yearNumber;
        valid_year = true;
        return true;
      }
      else{
        year.style.borderColor = "red";
        wrong_year.style.display = "flex";
        card_year.textContent = "00";
        valid_year = false;
        return false;
      }
  });

//tvis shemowmeba
month.addEventListener("input", (event) => {
    event.preventDefault();
    var monthValue = month.value;
    var monthNumber = Number(monthValue);

   
    if(!isNaN(monthNumber) && monthValue.length === 2 || monthValue.length === 1 && monthNumber >= 1 && monthNumber <= 12){
        wrong_year.style.display = "none";
        month.style.borderColor = "rgba(223, 222, 224, 1)";
        
        var formattedMonth = monthValue.padStart(2, '0');
        card_month.textContent = monthNumber + "/" ;
        month.value = formattedMonth;
        
        // if(monthValue.length === 2){
        //     month.value = monthValue;
        //   }else if(monthValue.length === 1){
        //         month.textContent = "0" + monthValue;
        //   }

        valid_month = true;
        return true;

      }
      else{
        month.style.borderColor = "red";
        wrong_year.style.display = "flex";
        card_month.textContent = "00 /";
        valid_month = false;
        return false;

      }; 
      
});

//cvc shemowmeba
cv.addEventListener("input", (event) => {
    event.preventDefault();
    var cvValue = cv.value;
    var cvNumber = Number(cvValue);



    if(!isNaN(cvNumber) && cvValue.length === 3){
        var formattedCv = cvValue.padStart(3);
        wrong_cv.style.display = "none";
        cv.style.borderColor = "rgba(223, 222, 224, 1)";
        cv.value = formattedCv;
        card_cv.textContent = cvNumber;
        valid_cv = true;
        return true;
      }
      else{
        cv.style.borderColor = "red";
        wrong_cv.style.display = "flex";
        card_cv.textContent = "000";
        valid_cv = false;
        return false;
      }
});

number.addEventListener("input", (event) =>  {
    number.value = formatNumber(number.value.replaceAll(" ", ""))
   
    event.preventDefault();
    var numberValue = number.value;
    var space = number.value.replaceAll(" ", "");

    var numberNumber = Number(space);
    card_number.textContent = numberNumber.toString().padEnd(16, "0");
    //t
    let result = card_number.textContent.replace(/(.{4})/g, "$1 ");
    card_number.textContent = result;

    if(!isNaN(numberNumber) && space.length === 16 ){
        wrong_number.style.display = "none";
        number.style.borderColor = "rgba(223, 222, 224, 1)";
        //  card_number.textContent = formatNumber(card_number.value.replaceAll(" ", ""))
        // var numberNumber = Number(space);

        valid_number = true;
        return true;
      }
      else{
        number.style.borderColor = "red";
        wrong_number.style.display = "flex";
        // card_number.textContent = "0000 0000 0000 0000";
        valid_number = false;
        return false;
      }
});

const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += " ";
  return seed + next;
}, "");

function toggleDivDisplay() {
    if (valid_number == true && valid_cv == true && valid_month==true && valid_year==true) { 
        targetDiv.style.display = "flex";
        container.style.display = "none"; 
      }
  }

  continue_button.addEventListener("click", (event) => {
    event.preventDefault();
    container.style.display = "flex";
    targetDiv.style.display = "none";
    cv.value = "";
    
  });














