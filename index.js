//#5 - issue refactor code

let dp = $("#display");
let num1, num2;
let arr = [];
let optr = [];
let total;

/* EVENT FOR CLEARING EVERYTHING */
$("#clear").click(clearAll);

function clearAll() {

    /// empty the number's array and operator's array
    arr = [];
    optr = [];

    /// set display text back to zero and remove any existing selected operator
    dp.text("0");
    $(".col-4").removeClass("selected-optr");
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


/* EVENT FOR SELECTING OPERATOR */
$(".operator").click(selectOperatorEvent);

function selectOperatorEvent() {

    let lastCharPosition = dp.text().length - 1;

    /// checking whether if the operator is already selected or display text is equal to zero 
    let checkCondition = dp.text()[lastCharPosition] === this.innerHTML || dp.text() == 0;

    if (checkCondition)
    {
        dp.text("0");
    } 
    else 
    {
        optr.push(this.innerHTML);
        num1 = parseFloat(dp.text());
        arr.push(num1);
        $(".operator").removeClass("selected-optr");
        $(this).addClass("selected-optr");
    }
}


/* EVENT FOR PERCENTAGE SELECTION */
$("#percentage").click(percentageEvent);

function percentageEvent() {
    if (dp.text() == 0)
    {
        dp.text() = dp.text();
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


/* EVENT FOR EQUAL BUTTON */
$("#equals").click(equalBtnEvent);

function equalBtnEvent() {

    // #1 issue - Equal btn should only work ones

    if (dp.text() == 0)
    {
        dp.text("0");
    } 
    else 
    {
        num2 = parseFloat(dp.text());
        arr.push(num2);
        solve();
    }
}


/* CALCULATE SOLUTION */
function solve() {

    let answer, a;

    switch (optr[optr.length - 1]) 
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

        default: alert("Oops! Something went wrong.");
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
        $(".col-4").removeClass("selected-optr");
        dp.append(".");
    } 
    else if (!dp.text().includes(".")) 
    {
        dp.append(".");
    }
}


/* EVENT FOR GETTING INPUT NUMBERS */
$(".number").click(getInputNumber);

function getInputNumber() {

    // #3 issue - I should be able to select zero when I reload and should be able to perform calculations on it.

    if (dp.text() == 0)
    {
        dp.text(this.innerHTML);
    } 

    /// checking if the last element of the array is equal to display text or not AND
    /// checking whether or not operator is selected. 
    /// To prevent display text setting to 0 when sign is toggled
    else if (dp.text() == arr[arr.length - 1] && $(".col-4").hasClass("selected-optr")) 
    {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append(this.innerHTML);
    } 
    else if (dp.text().length === 13) 
    {
        dp.text("0");
    } 
    else 
    {
        dp.append(this.innerHTML);
    }
}