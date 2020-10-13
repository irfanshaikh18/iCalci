let dp = $("#display");
let num1, num2, newStr;
let arr = [];
let optr = [];
let total;

//event for clearing everything
$("#clear").click(function () {
    dp.text("0");
    arr = [];
});

//click event for deleting one number from the display
$("#delete").click(function () {
    if (dp.text().length == 1) {
        dp.text("0");
    } else {
        newStr = dp.text().slice(0, -1);
        dp.text(newStr);
    }
});

//Event for selecting operator
$(".operator").click(function () {
    var len = dp.text().length - 1;

    if (dp.text()[len] == this.innerHTML || dp.text() == 0) dp.text() == dp.text();
    else {
        optr.push(this.innerHTML);
        num1 = parseFloat(dp.text());
        arr.push(num1);
        $(this).addClass("selected-optr");
    }
});

$("#percentage").click(function () {
    if (dp.text() == 0) dp.text() == dp.text();
    else {
        num1 = parseFloat(dp.text());
        calulatePercentage(num1);
    }
});

function calulatePercentage(num1) {
    num1 /= 100;
    num1 = num1.toPrecision(5);
    dp.text(num1);
    arr.push(num1);
}

$("#equals").click(function () {
    if (dp.text() == 0) dp.text("0");
    else {
        num2 = parseFloat(dp.text());
        arr.push(num2);
        solve();
    }
});

//Calculation 
function solve() {
    let ans, a;

    switch (optr[optr.length - 1]) {
        case "+":
            ans = arr[arr.length - 2] + arr[arr.length - 1];
            break;

        case "-":
            ans = arr[arr.length - 2] - arr[arr.length - 1];
            break;

        case "x":
            ans = arr[arr.length - 2] * arr[arr.length - 1];
            break;

        case "/":
            ans = arr[arr.length - 2] / arr[arr.length - 1];
            break;

        default: alert("Oops! Something went wrong.");
    }

    a = ans;
    if (a.toString().includes(".")) {
        ans = ans.toPrecision(5);
    } else if (a.toString().length > 12) {
        ans = ans.toPrecision(5);
    }
    
    dp.text(ans);
}

$("#decimal").click(function () {
    if (dp.text() == 0) dp.text(".");
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append(".");
    } else if (!dp.text().includes(".")) {
        dp.append(".");
    }
});

//Function for selecting numbers
$(".number").click(function() {
    if (dp.text() == 0) dp.text(this.innerHTML);
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append(this.innerHTML);
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else {
        dp.append(this.innerHTML);
    }
});