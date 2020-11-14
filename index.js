//#5 - issue refactor code

let dp = $("#display");
let num1, num2, newStr;
let arr = [];
let optr = [];
let total;

///EVENT FOR CLEARING EVERYTHING
$("#clear").click(clearAll);

function clearAll() {

    ///empty the display_text_array and operator_array
    arr = [];
    optr = [];

    ///set display text back to zero and remove any existing selected operator
    dp.text("0");
    $(".col-4").removeClass("selected-optr");
}


///EVENT FOR DELETING ONE NUMBER FROM THE DISPLAY
$("#delete").click(deleteOneDigit);

function deleteOneDigit() {

    if (dp.text().length === 1) 
    {
        dp.text("0");
    } 
    //#4 - issue fix delete bug
    else 
    {
        newStr = dp.text().slice(0, -1);
        dp.text(newStr);
    }
}


///Event for selecting operator
$(".operator").click(selectOperator);

function selectOperator() {

    let getLastCharacter = dp.text().length - 1;

    ///Checking whether if the operator is already selected or display text is equal to zero
    let checkCondition = dp.text()[getLastCharacter] === this.innerHTML || 
    dp.text() == 0;
    // #2 issue - once an operator is selected another operator should not be showing selected

    if (checkCondition)
    {
        dp.text() = dp.text();
    } 
    else 
    {
        optr.push(this.innerHTML);
        num1 = parseFloat(dp.text());
        arr.push(num1);
        $(this).addClass("selected-optr");
    }
}


///EVENT WHEN PERCENTAGE IS SELECTED
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


///EVENT FOR EQUAL BUTTON
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


///CALCULATE SOLUTION 
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


///EVENT WHEN DECIMAL IS SELECTED
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


///EVENT FOR GETTING INPUT NUMBERS
$(".number").click(getInputNumber);

function getInputNumber() {

    // #3 issue - I should be able to select zero when I reload and should be able to perform calculations on it.

    if (dp.text() == 0)
    {
        dp.text(this.innerHTML);
    } 
    else if (dp.text() == arr[arr.length - 1]) 
    {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append(this.innerHTML);
    } 
    else if (dp.text().length == 13) 
    {
        dp.text() == dp.text();
    } 
    else 
    {
        dp.append(this.innerHTML);
    }
}