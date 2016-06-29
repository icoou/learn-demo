// start theme
$(document).ready(function() {

    $(document).click(function() { //点击换肤显示主题，点击主题以外地方隐藏主题
        if ($(event.srcElement).is(".theme,.theme *")) {
            $(".theme-setting").slideDown(400);
            $(".tnl-item-view").addClass("tnl-tnl-item"); //默认的主题
        } else if ($(event.srcElement).is(".tnl-up,.tnl-up *")) {
            $(".theme-setting").slideUp(400);
        } else if ($(event.srcElement).is(".theme-setting,.theme-setting *")) {} else {
            $(".theme-setting").slideUp(400);
        }
    });

    $(".t-nav-left li").click(function() {
        $(".tnl-item").removeClass("tnl-tnl-item"); //移除点击之后留下的样式
        $(this).addClass("tnl-tnl-item"); //改变点击后的样式
        if ($(this).hasClass("t-t-item")) { //更换照片类型
            $(".table-two").hide();
            $(".table-one").show();
        }
        if ($(this).hasClass("t-o-item")) {
            $(".table-one").hide();
            $(".table-two").show();
        }
    });

    $("table tr td img").mouseenter(function() { //鼠标滑过预览照片
        var src = $(this).attr('src');
        $("#preview").attr("src", src);
    });

    $("table tr td img").click(function() { //改变背景图片
        var src = $(this).attr('src');
        $("body").css({ "background": "url(" + src + ")" });
    });
});

// end theme

$(document).ready(function() { //鼠标滑过导航栏显示更多
    $(".user-setting,.setting-more").hover(function() {
        $(".setting-more").show();
    }, function() {
        $(".setting-more").hide();
    });

    $(".nav-more,.nav-mores").hover(function() {
        $(".nav-mores").show();
    }, function() {
        $(".nav-mores").hide();
    });
});

$(document).ready(function() {
    $("#t-menu").addClass("btn-menu");
    loadAnimate();

    function menuClick() { //标签导航内容切换函数
        $(".menu span").removeClass("btn-menu");
        $(".recommend,.nav-center").hide();
    };
    $(".t-menu").click(function() { //标签导航内容切换
        menuClick();
        $(this).addClass("btn-menu");
        $(".recommend").show();
    });
    $(".d-menu").click(function() { //标签导航内容切换
        menuClick();
        $(this).addClass("btn-menu");
        $(".nav-center").show();
    });

    function loadAnimate() { //加载按钮的上下移动动画
        $(".load-icon").animate({ margin: '15px auto' }, 700);
        $(".load-icon").animate({ margin: '4px auto' }, 700);
        setTimeout(loadAnimate, 10);
    };
    $(".load").click(function() { //隐藏加载按钮
        $(".hidde,.top-feed").show();
        $(this).hide();
    })
    $(".top-feed").mouseenter(function() { //鼠标滑过显示文字
        $(".feed-icon").hide();
        $(".top-feed p").show();
    });
    $(".top-feed").mouseleave(function() { //鼠标滑开显示图标
        $(".feed-icon").show();
        $(".top-feed p").hide();
    });
    $(".top-feed").click(function() {
        $("#wrapper,body").animate({ scrollTop: 0 }); //回到顶部
    });


});

$(document).ready(function() {
    $("#wrapper").scroll(function() {
        var st = $(this).scrollTop();

        if (st > 150) { //判断搜索框距离顶部距离
            searchTop();
            $(".load").hide();

        }
        if (st > 30) {
            $(".hidde").show();
            $(".top-feed").show();

        }
        if (st < 150 && st > 30) {
            searchTopDelete();
        }
    });

    function searchTop() { //页面滚动搜索框变化样式
        $(".from-wrap").css({ position: "fixed", top: "0", background: "#fff", boxShadow: "0 1px 5px #BDBDBD", "opacity": "0.9" });
        $(".form").css({ width: "895px", height: "60px" });
        $(".f-t-s").css({ boxShadow: "none", marginTop: "17px" });
        $(".form-search input").css({ border: "1px solid #ccc", height: "96%" });
        $(".form-submit input").css({ "background": "#3388FF", "color": "#fff" });
        $(".re-right").css({ "position": "fixed", "top": "90px", "left": "50%", "marginLeft": "150px" });
        $(".logo-top").show();
        $(".img-logo").hide();
    };

    function searchTopDelete() { //页面滚动搜索框变化样式
        $(".from-wrap").css({ position: "inherit", top: "0", background: "none", boxShadow: "none", "opacity": "1" });
        $(".form").css({ width: "641px", height: "293px" });
        $(".f-t-s").css({ boxShadow: "0 1px 5px #BDBDBD", marginTop: "0" });
        $(".form-search input").css({ border: "none", height: "100%" });
        $(".form-submit input").css({ "background": "#DCDCDC", "color": "#000" });
        $(".re-right").css({ "position": "absolute", "top": "0", "left": "50%", "marginLeft": "150px" });

        $(".logo-top").hide();
        $(".img-logo").show();
    };
});
