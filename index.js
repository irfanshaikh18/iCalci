let dp = $("#display");
let num1, num2;
let arr = [];
let operatorArray = [];
let total;


/* EVENT FOR CLEARING EVERYTHING */
$("#clear").click(clearAll);

function clearAll() {

    /// empty the number's array and operator's array
    arr = [];
    operatorArray = [];

    /// set display text back to zero and remove any existing selected operator
    dp.text("0");
    $(".col-4").removeClass("selected-operator");
}


/* EVENT FOR TOGGLING SIGN */
$("#change-sign").click(toggleSign);

function toggleSign() {

    /// converting display text which is string into a floating number and
    /// then multiplying it with -1 to change its sign.

    let toggleNumSign = parseFloat(dp.text());
    toggleNumSign *= -1;
    arr.push(toggleNumSign);


    /// setting number back to display text (i.e. into string data type) after toggling its sign. 
    dp.text("" + toggleNumSign);

    /// changing the toggleNumSign back to string because 'selectOperatorEvent' and 'equalBtnEvent' 
    /// changes display text to float. Although the above line of code works even if we don't change 
    /// it's sign.
}


/* EVENT FOR PERCENTAGE SELECTION */
$("#percentage").click(percentageEvent);

function percentageEvent() {
    if (dp.text() == 0)
    {
        dp.text("0");
    }
    else 
    {
        num1 = parseFloat(dp.text());
        calulatePercentage(num1);
    }
}

function calulatePercentage(num1) {

    num1 /= 100;
    num1 = num1.toPrecision(5);
    
    dp.text(num1);
    arr.push(num1);
}


/* EVENT FOR SELECTING OPERATOR */
$(".operator").click(selectOperatorEvent);

function selectOperatorEvent() {

    let lastCharPosition = dp.text().length - 1;

    /// checking whether if the operator is already selected or display text is equal to zero 
    // understand what below code does?
    let checkCondition = dp.text()[lastCharPosition] === this.innerHTML || dp.text() == 0;

    if (checkCondition)
    {
        dp.text("0");
    } 
    else 
    {
        operatorArray.push(this.innerHTML);
        num1 = parseFloat(dp.text());
        arr.push(num1);
        $(".operator").removeClass("selected-operator");
        $(this).addClass("selected-operator");
    }
}


/* EVENT FOR GETTING INPUT NUMBERS */
$(".number").click(getInputNumber);

function getInputNumber() {

    /// if display text is equal to zero and it doesn't include's the decimal then set it to selected number

    if (dp.text() == 0 && !dp.text().includes("."))
    {
        dp.text(this.innerHTML);
    } 

    /// checking if the last element of the array is equal to display text or not AND
    /// checking whether or not operator is selected, To prevent display text setting to 0 when sign is toggled

    else if (dp.text() == arr[arr.length - 1] && $(".col-4").hasClass("selected-operator")) 
    {
        dp.text("");
        $(".col-4").removeClass("selected-operator");
        dp.append(this.innerHTML);
    } 

    /// checking for the maximum number of digits in the display i.e 13
    else if (dp.text().length === 13) 
    {
        dp.text("0");
    } 
    else 
    {
        dp.append(this.innerHTML);
    }
}


/* EVENT FOR DECIMAL SELECTION */
$("#decimal").click(decimalEvent);

function decimalEvent() {

    if (dp.text() == 0)
    {
        dp.text(".");
    }
    else if (dp.text() == arr[arr.length - 1]) 
    {
        dp.text("");
        $(".col-4").removeClass("selected-operator");
        dp.append(".");
    } 
    else if (!dp.text().includes(".")) 
    {
        dp.append(".");
    }
}


/* EVENT FOR EQUAL BUTTON */
$("#equals").click(equalBtnEvent);

function equalBtnEvent() {

    /// this will allow to perform calculations such as 5 - 0 = 0, 5 + 0 = 0 etc.

    if (dp.text() == 0 && $(".col-4").hasClass("selected-operator"))
    {
        dp.text("0");
    } 
    else 
    {
        $(".col-4").removeClass("selected-operator");
        num2 = parseFloat(dp.text());
        arr.push(num2);
        solve();
    }
}


/* CALCULATE SOLUTION */
function solve() {

    let answer, a;

    switch (operatorArray[operatorArray.length - 1]) 
    {
        case "+":
            answer = arr[arr.length - 2] + arr[arr.length - 1];
            break;

        case "-":
            answer = arr[arr.length - 2] - arr[arr.length - 1];
            break;

        case "x":
            answer = arr[arr.length - 2] * arr[arr.length - 1];
            break;

        case "/":
            answer = arr[arr.length - 2] / arr[arr.length - 1];
            break;

        default: 
            console.log("Oops! You have not selected anything or Something went wrong.");
            answer = 0;
            
    }

    a = answer;

    if (a.toString().includes(".")) 
    {
        answer = answer.toPrecision(5);
    } 
    else if (a.toString().length > 12) 
    {
        answer = answer.toPrecision(5);
    }
    
    dp.text(answer);
}