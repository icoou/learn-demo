var orm = require('orm');

var sql = orm.connect("mysql://root:@localhost/bd");

var News = sql.define("news", {
    newsid: {
        type: 'serial',
        key: true
    },
    newstitle: String,
    newsimg: String,
    newscontent: String,
    headlines: String,
    addtime: String
});


var tui = [],
    bai = [],
    she = [],
    back=[];
var jian = News.find({ "headlines": "推荐" }, function(err, news) { //后台过滤数据
    tui.push(news);
});
var jia = News.find({ "headlines": "百家" }, function(err, news) {
    bai.push(news);
});
var hui = News.find({ "headlines": "社会" }, function(err, news) {
    she.push(news);
});
var Back = News.find({}, function(err, news) {
    back.push(news);
});



function Sql() {
    this.tuijian = tui;
    this.baijia = bai;
    this.shehui = she;
    this.back=back;
}

module.exports = Sql;
