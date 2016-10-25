var amount = document.getElementById("amount");
var x = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];

function count(x) {
    var list = {};
    x.forEach(function(item) {
        if (!list[item]) {
            list[item] = 1;
        } else {
            list[item]++;
        }
    });


    var maxCount = 0,
        z;
    for (var y in list) {
        if (list[y] > maxCount) {
            maxCount = list[y];
            z = y;
        }
    }

    var order = [];
    while (x.indexOf(z) >= 0) {
        order.push(x.indexOf(z) + 1);
        x[x.indexOf(z)] = null;
    }

    amount.innerHTML = ("最多的字母是" + z + ",出现" + maxCount + "次，分别在第" + order.join("、") + "的位置");
}
count(x);
