function count() {
    var z = "";
    var x = ["a","x","b","d","m","a","k","m","p","j","a"];
    var theSumOf = theAmount();
    var amount = document.getElementById("amount");

    function theAmount() {
        var map = {},
            total = 0;
        for (var i = 0; i < x.length; i++) {
            var degree = x[i],
                count = 0;
            for (var y = 0; y < x.length; i++) {
                var circulation = x[y];
                if (circulation == degree) count++;
                if (count > total) {
                    total = count;
                    map[degree] = count;
                }
            }
        }
        return map;
    }

    function arrangeOrder() {
        var arrange = 1,
            order = [];
        for (var degree in theSumOf) {
            for (var i = 0; i < x.length; i++) {
                if (degree == x[i]) {
                    order.push(arrange);
                    arrange++;
                }
            }
        }
        return order;
    }
    z = "最多的字母是" + theAmount() + "序号是" + arrangeOrder();
    return z
    amount.innerHTML = z;
}
