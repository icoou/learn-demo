function count() {
    var z = "";
    // 将每个值用parseFloat()转化为数值型，避免错误
    var x = parseFloat(document.getElementById("x").value);
    var myNumber = document.getElementById("myNumber").value;
    var y = parseFloat(document.getElementById("y").value);
    var amount = document.getElementById("amount");
    // if (x == undefined || y == undefined) {
    //         z = "你需要填写一个数字哦！";
    //     } else {
    switch (myNumber) {
        case "+":
            // 调整浮点计算产生误差
            z = (x * 10 + y * 10) / 10;
            break;
        case "-":
            z = x - y;
            break;
        case "*":
            //  四舍五入为8位数的数字
            z = parseFloat((x * y).toFixed(8));
            break;
        case "/":
            if (y == 0) {
                z = "除数不能为零哦！";
            } else {
                z = x / y;
            }
            break;
        case "%":
            z = x % y;
            break;
    }
    // }
    amount.innerHTML = z;
}
