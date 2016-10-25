$(document).ready(function() {
    $(window).on("load", function() {
        imgLocation();
        var dataImg = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }, { "src": "6.jpg" }, { "src": "7.jpg" }, { "src": "8.jpg" }, { "src": "9.jpg" }, { "src": "10.jpg" }] };
        window.onscroll = function() {
            if (scrollLoading()) {
                $.each(dataImg.data, function(index, value) {
                    var box = $("<div>").addClass("box").appendTo($(".container"));
                    var img = $("<div>").addClass("img").appendTo(box);
                    $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(img);
                });
                imgLocation(); //每次增加图片重复计算排列
            }
        };
        $(window).resize(function() {
            imgLocation();
        });
    });
});

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width(); //盒子宽度
    var num = Math.floor($(window).width() / boxWidth); //每行图片排列数量
    var boxArray = []; //存储每个盒子高度
    box.each(function(index, value) { //位置，当前元素
        var boxHeight = box.eq(index).height(); //盒子高度
        if (index < num) {
            boxArray[index] = boxHeight;
        } else {
            var minBoxHeight = Math.min.apply(null, boxArray);
            var minboxIndex = $.inArray(minBoxHeight, boxArray);
            console.log(minboxIndex);
            $(value).css({
                "position": "absolute",
                "top": minBoxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArray[minboxIndex] += box.eq(index).height(); //重新计算其高度
        }
    });
};

function scrollLoading() {
    var box = $(".box");
    var lastboxHeigt = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeigt < scrollHeight + documentHeight) ? true : false;
};
