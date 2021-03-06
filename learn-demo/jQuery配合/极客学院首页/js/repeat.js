define(function(require, exports, module) {
    $(document).ready(function() { //上面大图轮播
        var i = 0;
        var size = $(".swiper-wrapper a").size(); //获取图片数量

        $("#banner-left").click(function() { //左箭头点击切换图片
            i++;
            move();
        });
        $("#banner-right").click(function() { //右箭头点击切换图片
            i--;
            move();
        });

        var time = setInterval(function() { //自动轮播
            i++;
            move();
        }, 3000);

        $(".swiper-pagination").click(function() {
            var index = $(this).index();
            i = index; //将当前标签位置传给i
            move();
        });

        $(".swiper-container").hover(function() { //鼠标滑过停止自动轮播
            $("#banner-left,#banner-right").show();
            clearInterval(time);
        }, function() {
            $("#banner-left,#banner-right").hide(); //鼠标离开继续自动轮播
            time = setInterval(function() {
                i++;
                move();
            }, 3000);
        });

        function move() {
            if (i == size) { //到达最后一张图片时移动到第一张图片的位置
                $(".swiper-wrapper").css("left", 0);
                i = 1;
            }
            if (i == -1) { //图片位置为-1时移动的倒数第二张图片
                $(".swiper-wrapper").css("left", -(size - 1) * 560);
                i = size - 2;
            }
            if (i == size - 1) { //图片位置为最后一张图片时标签样式切换到第一个
                $(".swiper-pagination").first().addClass("sp-color").siblings().removeClass("sp-color");
            } else {
                $(".swiper-pagination").eq(i).addClass("sp-color").siblings().removeClass("sp-color");
            };

            $(".swiper-wrapper").animate({ left: -i * 560 }, 800); //移动图片
        };

    });


    $(document).ready(function() { //下面小图标轮播
        var i = 0;
        var size = $(".s-work-list li").size(); //获取图片数量

        $("#work-arrow-left").click(function() { //左箭头点击切换图片
            i++;
            move();
            // alert('j')
        });
        $("#work-arrow-right").click(function() { //右箭头点击切换图片
            i--;
            move();
        });

        $("#s-work-list,#work-arrow-left,#work-arrow-right").hover(function() {
            $("#work-arrow-left,#work-arrow-right").show();
        }, function() {
            $("#work-arrow-left,#work-arrow-right").hide();

        });

        function move() {
            if (i == size - 2) { //到达最后一张图片时移动到第一张图片的位置
                $(".s-work-list").css("left", 0);
                i = 1;
            }
            if (i == -1) { //图片位置为-1时移动的倒数第二张图片
                $(".s-work-list").css("left", -(size - 3) * 186.5);
                i = size - 4;
            }
            $(".s-work-list").animate({ left: -i * 186.5 }, 300); //移动图片
        };

    });
});
