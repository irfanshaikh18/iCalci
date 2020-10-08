var dp = $("#display");
var num1, num2, newStr;
var arr = [];
var optr = [];
var total;

$("#clear").click(function () {
    dp.text("0");
    arr = [];
});

$("#delete").click(function () {
    if (dp.text().length == 1) {
        dp.text("0");
    } else {
        newStr = dp.text().slice(0, -1);
        dp.text(newStr);
    }
});''

$("#add").click(function () {
    var len = dp.text().length - 1;

    if (dp.text()[len] == "+" || dp.text() == 0) dp.text() == dp.text();
    else {
        optr.push("+");
        num1 = parseFloat(dp.text());
        arr.push(num1);
        $("#add").addClass("selected-optr");
    }
});

$("#subtract").click(function () {
    var len = dp.text().length - 1;
    if (dp.text()[len] == "-" || dp.text() == 0) dp.text() == dp.text();
    else {
        optr.push("-");
        num1 = parseFloat(dp.text());
        arr.push(num1);
        $("#subtract").addClass("selected-optr");
    }
});

$("#multiply").click(function () {
    var len = dp.text().length - 1;
    if (dp.text()[len] == "x" || dp.text() == 0) dp.text() == dp.text();
    else {
        optr.push("x");
        num1 = parseFloat(dp.text());
        arr.push(num1);
        $("#multiply").addClass("selected-optr");
    }
});

$("#divide").click(function () {
    var len = dp.text().length - 1;
    if (dp.text()[len] == "/" || dp.text() == 0) dp.text() == dp.text();
    else {
        optr.push("/");
        num1 = parseFloat(dp.text());
        arr.push(num1);
        $("#divide").addClass("selected-optr");
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

function solve() {
    var ans, a;

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

$("#zero").click(function () {
    if (dp.text() == 0) dp.text("0");
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append("0");
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else {
        dp.append("0");
    }
});

$("#one").click(function () {
    if (dp.text() == 0) dp.text("1");
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append("1");
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else dp.append("1");
});

$("#two").click(function () {
    if (dp.text() == 0) dp.text("2");
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append("2");
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else dp.append("2");
});

$("#three").click(function () {
    if (dp.text() == 0) dp.text("3");
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append("3");
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else dp.append("3");
});

$("#four").click(function () {
    if (dp.text() == 0) dp.text("4");
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append("4");
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else dp.append("4");
});

$("#five").click(function () {
    if (dp.text() == 0) dp.text("5");
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append("5");
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else dp.append("5");
});

$("#six").click(function () {
    if (dp.text() == 0) dp.text("6");
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append("6");
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else dp.append("6");
});

$("#seven").click(function () {
    if (dp.text() == 0) dp.text("7");
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append("7");
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else dp.append("7");
});

$("#eight").click(function () {
    if (dp.text() == 0) dp.text("8");
    else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append("8");
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else dp.append("8");
});

$("#nine").click(function () {
    if (dp.text() == 0) {
        dp.text("9");
    } else if (dp.text().length == 13) {
        dp.text() == dp.text();
    } else if (dp.text() == arr[arr.length - 1]) {
        dp.text("");
        $(".col-4").removeClass("selected-optr");
        dp.append("9");
    } else dp.append("9");
});
