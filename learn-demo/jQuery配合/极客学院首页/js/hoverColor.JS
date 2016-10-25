define(function(require, exports, module) {
    $(document).ready(function() { //鼠标滑过
        $(".navleft").hover(function() { //顶部导航栏显示
            $(".navpanel").show();
        }, function() {
            $(".navpanel").hide();
        });

        $(".navleft a").hover(function() {
            var index = $(this).index(); //获取当前列表位置
            $(".panel-item span").removeClass("panel-item-arrow"); //鼠标滑过隐藏小箭头
            $(".navpanel>li:nth-child(" + index + ") span").addClass("panel-item-arrow"); //鼠标滑过显示当前列表小箭头
            $(".navpanel>li:nth-child(" + index + ")").addClass("liColor").siblings().removeClass("liColor"); //改变当前列表背景颜色
        });
        $(".navpanel>li").hover(function() {
            var index = $(this).index() + 1; //获取当前列表位置
            $(".panel-item span").removeClass("panel-item-arrow"); //鼠标滑过隐藏小箭头
            $(".navpanel>li:nth-child(" + index + ") span").addClass("panel-item-arrow"); //鼠标滑过显示当前列表小箭头
            $(".navpanel>li:nth-child(" + index + ")").addClass("liColor").siblings().removeClass("liColor"); //改变当前列表背景颜色
        });

        $(".lesson-left-nav ul>li").hover(function() { //左侧导航栏
            var index = $(this).index() + 1;
            $(".lesson-list").hide();
            $(".lesson-left-nav ul li:nth-child(" + index + ") .lesson-list").show().css("color", "#000"); //左侧导航栏显示和改变css控制的文字颜色
        }, function() {
            $(".lesson-list").hide();
        });

        $(".hot-lesson-title ul li").hover(function() {
            $(this).siblings().css("border-bottom", "none"); //移除默认底部边框
            $(this).css("border-bottom", "2px solid #35b558");
        });

        $(".lesson-title-h,.lesson-title-f,.lesson-title-i").hover(function() { //滑动到不同的标签显示不同的内容
            $(".two-view-lesson").hide();
            $(".one-view-lesson").show();

        });
        $(".lesson-title-b,.lesson-title-x,.lesson-title-c").hover(function() {
            $(".one-view-lesson").hide();
            $(".two-view-lesson").show();
        });

        $(".one-lesson ul li").hover(function() { //开始课程推荐
            var index = $(this).index() + 1;
            $(".lesson-box i,.lessonplay").hide();
            $(".one-lesson ul li:nth-child(" + index + ") .lesson-box i,.one-lesson ul li:nth-child(" + index + ") div").show();
            $(".one-lesson ul li .lesson-info p").eq(index - 1).slideDown();

        }, function() {
            $(".lesson-box i,.lessonplay").hide();
            $(".lesson-info p").slideUp();

        });

        $(".learn-card a").hover(function() { //开始职业路径
            var index = $(this).index() + 1;
            $(".green-btn").css({ background: "#f3fff6", color: "#35b558" });
            $(".learn-card a:nth-child(" + index + ") .green-btn").css({ background: "#35b558", color: "#fff" });
        }, function() {
            $(".learn-card a .green-btn").css({ background: "#f3fff6", color: "#35b558" });
        });


    });

    $(document).scroll(function() { //返回顶部
        var st = $(this).scrollTop();
        if (st > 100) { //判断距离顶部距离
            $(".gotop a").show();
        }
        if (st < 100) {
            $(".gotop a").hide();
        }
    });
});
