/**
*   使用了 单体模式
*   单体模式提供了一种将代码组织为一个逻辑单元的手段，而在其中的代码可以通过
*   单一的变量进行访问，通过确保单体对象只存在一个实例，这样可以确定自己的代码使用的
*   都是同样的全局资源。
*   
*   好处：单体模式把相关的方法和属性都组织在一个不会被多次实例化的单体中，使得代码提示和维护方便
*   
*   不利：单点访问，不利于单元测试。
**/
$(document).ready(function() {
    var index = {
        init: function() {
            var me = this;
            me.reader();
            me.bind();
        },
        reader: function() {
            var me = this;
            me.setting = $(".user-setting,.setting-more");
            me.navMore = $(".nav-more,.nav-mores");
            me.tMenu = $("#t-menu");
            me.menuSpan = $(".menu span");
            me.reNav = $(".recommend,.nav-center");
            me.Tmenu = $(".t-menu");
            me.Dmenu = $(".d-menu");
            me.recommend = $(".recommend");
            me.navCenter = $(".nav-center");
            me.loadIcon = $(".load-icon");
            me.load = $(".load");
            me.topFeed = $(".top-feed");
            me.wrapper = $("#wrapper");
            me.fromWrap =$(".from-wrap");
            me.form =$(".form");
            me.fts =$(".f-t-s");
            me.searchInput =$(".form-search input");
            me.submitInput =$(".form-submit input");
            me.right=$(".re-right");
            me.logoTop =$(".logo-top");
            me.logo =$(".img-logo");
        },
        bind: function() {
            var me = this;
            loadAnimate();

            me.setting.hover(function() { //鼠标滑过导航栏显示更多
                $(".setting-more").show();
            }, function() {
                $(".setting-more").hide();
            });
            me.navMore.hover(function() {
                $(".nav-mores").show();
            }, function() {
                $(".nav-mores").hide();
            });

            function menuClick() { //标签导航内容切换函数
                me.menuSpan.removeClass("btn-menu");
                me.reNav.hide();
            };

            me.tMenu.addClass("btn-menu");
            me.Tmenu.click(function() { //标签导航内容切换
                menuClick();
                $(this).addClass("btn-menu");
                me.recommend.show();
            });
            me.Dmenu.click(function() { //标签导航内容切换
                menuClick();
                $(this).addClass("btn-menu");
                me.navCenter.show();
            });

            function loadAnimate() { //加载按钮的上下移动动画
                me.loadIcon.animate({ margin: '15px auto' }, 700);
                me.loadIcon.animate({ margin: '4px auto' }, 700);
                setTimeout(loadAnimate, 10);
            };

            me.load.click(function() { //隐藏加载按钮
                $(".hidde,.top-feed").show();
                $(this).hide();
            })
            me.topFeed.mouseenter(function() { //鼠标滑过显示文字
                $(".feed-icon").hide();
                $(".top-feed p").show();
            });
            me.topFeed.mouseleave(function() { //鼠标滑开显示图标
                $(".feed-icon").show();
                $(".top-feed p").hide();
            });
            me.topFeed.click(function() {
                $("#wrapper,body").animate({ scrollTop: 0 }); //回到顶部
            });

            me.wrapper.scroll(function() {
                var st = $(this).scrollTop();

                if (st > 150) { //判断搜索框距离顶部距离
                    searchTop();
                    me.load.hide();

                }
                if (st > 30) {
                    $(".hidde").show();
                    me.topFeed.show();

                }
                if (st < 150 && st > 30) {
                    searchTopDelete();
                }
            });

            function searchTop() { //页面滚动搜索框变化样式
                me.fromWrap.css({ position: "fixed", top: "0", background: "#fff", boxShadow: "0 1px 5px #BDBDBD", "opacity": "0.9" });
                me.form.css({ width: "895px", height: "60px" });
                me.fts.css({ boxShadow: "none", marginTop: "17px" });
                me.searchInput.css({ border: "1px solid #ccc", height: "96%" });
                me.submitInput.css({ "background": "#3388FF", "color": "#fff" });
                me.right.css({ "position": "fixed", "top": "90px", "left": "50%", "marginLeft": "150px" });
                me.logoTop.show();
                me.logo.hide();
            };

            function searchTopDelete() { //页面滚动搜索框变化样式
                me.fromWrap.css({ position: "inherit", top: "0", background: "none", boxShadow: "none", "opacity": "1" });
                me.form.css({ width: "641px", height: "293px" });
                me.fts.css({ boxShadow: "0 1px 5px #BDBDBD", marginTop: "0" });
                me.searchInput.css({ border: "none", height: "100%" });
                me.submitInput.css({ "background": "#DCDCDC", "color": "#000" });
                me.right.css({ "position": "absolute", "top": "0", "left": "50%", "marginLeft": "150px" });
                me.logoTop.hide();
                me.logo.show();
            };
        }
    };
    index.init();
});
