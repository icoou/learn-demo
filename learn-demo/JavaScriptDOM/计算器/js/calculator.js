var total = document.querySelector("p").firstChild;
var totals = ""; //
var result; //记录第一个数
var operators; //记录运算符
var isEqualKey = false; //记录是否进行过计算

function theClick(argument) {
    if (total.textContent.indexOf(".") > -1 && argument == "." && totals.slice(length - 1) == ".") {
        return false; //存在小数点,则不允许再输入小数点
    } else if (total.textContent == 0 && argument == "." || total.textContent == "0." || argument == "." && result !== 0)
        total.appendData(argument); //0后边可以跟小数点
    else if (total.textContent == 0 || isEqualKey == true) { //替换初始值0，如果进行过计算就重新开始
        total.textContent = argument;
        isEqualKey = false;
    } else {
        total.appendData(argument);
    }
    totals = total.textContent;

}

function backDelete() { //退格
    total.deleteData(total.length - 1, 1);
    totals = total.textContent;
    if (totals.indexOf(operators) == -1)
        operators = ""; //如果删除的最后一位是运算符就更新operator
}

function clean() { //清除
    total.textContent = 0;
    totals = "";
    result = "";
    operators = "";
}

function operator(argument) { //保存运算符
    if (totals.slice(length - 1) == ".") return false; // 小数后不能跟运算符
    if (total.textContent.indexOf(argument) > -1 && argument == argument) return false; //存在运算符,则不允许再输入运算符
    else if (argument == "√") {
        result = total.textContent;
        // 结果是不是整数就保留两位小数
        total.textContent = Math.round(Math.sqrt(result) * 100) / 100;
        isEqualKey = true;

    } else if (argument == "sin") {
        result = total.textContent;
        total.textContent = Math.round(Math.sin(result) * 100) / 100;
        isEqualKey = true;

    } else if (argument == "cos") {
        result = total.textContent;
        total.textContent = Math.round(Math.cos(result) * 100) / 100;
        isEqualKey = true;

    } else if (argument.indexOf("argument")) {
        result = total.textContent;
        operators = argument; //如果输入运算符就将运算符保存到operators
        total.appendData(argument);
    }
}

function getResult() { //计算结果
    var z;
    var end = totals.slice(totals.indexOf(operators) + 1); //记录运算符后的数
    switch (operators) {
        case "+":
            // 调整浮点计算产生误差
            z = (parseFloat(result) * 10 + parseFloat(end) * 10) / 10;
            break;
        case "-":
            z = result - end;
            break;
        case "×":
            // 结果是不是整数就保留两位小数
            z = Math.round(parseFloat(result * end) * 100) / 100;
            break;
        case "÷":
            if (end == 0) z = "除数不能为零";
            else z = Math.round(result / end * 100) / 100;
            break;
        default:
            z = "输入有误";
            break;
    }
    total.textContent = z; //显示结果
    isEqualKey = true;
}
