$(".change").click(function() { //修改数据
    var id = $(this).attr("data");

    $.ajax({
        url: "back/change",
        data: {
            id: id
        },
        method: "post",
        success: function(res) {
            num();
            $("#caption").val(res.newstitle);
            $("#content").val(res.newscontent);
            var select;

            function num() { //判断类别
                if (res.headlines == "推荐") select = 0;
                if (res.headlines == "百家") select = 1;
                if (res.headlines == "社会") select = 2;
            };
            $("select").get(0).selectedIndex = select;
            $("#creat").hide();
            $("#submit").show();
            $("#submit").attr("data", id);

            $("#caption,#content").val("");
        }
    });
});

$("#submit").click(function() { //提交数据
    var id = $(this).attr("data");
    var caption = $("#caption").val();
    var content = $("#content").val();
    var select = $("select option:selected").text();
    $.ajax({
        url: "back/submit",
        data: {
            id: id,
            caption: caption,
            content: content,
            select: select
        },
        method: "post",
        success: function(res) {
            $("#caption,#content").val("");
            $("[data-id= '" + id + "'] .Title").text("标题：" + res.newstitle);
            $("[data-id= '" + id + "'] .Content").text("内容" + res.newscontent);
            $("[data-id= '" + id + "'] .Head").text(res.headlines);
        }
    });
});

$(".dele").click(function() { //删除数据
    var id = $(this).attr("data");
    $.ajax({
        url:"/back/delete",
        method:"post",
        data:{
            id:id
        },
        success:function (res) {
        $("[data-id= '" + id + "']").hide();
        }
    });
});

$("#creat").click(function() { //创建数据
    var caption = $("#caption").val();
    var content = $("#content").val();
    var select = $("select option:selected").text();
    $.ajax({
        url:"/back/creat",
        method:"post",
        data:{
            caption: caption,
            content: content,
            select: select            
        },
        success:function (res) {
            $("table").prepend($("table tr:first-child").clone());
            $("table tr:first-child .Title").text("标题：" +caption);
            $("table tr:first-child .Content").text("内容" +content);
            $("table tr:first-child .select").text(select);
            $("#caption,#content").val("");
        }
    });
});

