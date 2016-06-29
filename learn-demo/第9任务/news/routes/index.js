var express = require('express');
var router = express.Router();
var Sql = require('../sql');
var sql = new Sql();
/* GET home page. */

var orm = require('orm');

var mysql = orm.connect("mysql://root:@localhost/bd");

var News = mysql.define("news", {
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



router.get('/', function(req, res) {
    res.render('index', { title: sql.tuijian[0] });
});

router.get('/bai', function(req, res) {
    res.render('index', { title: sql.baijia[0] });
});

router.get('/she', function(req, res) {
    res.render('index', { title: sql.shehui[0] });
});
router.get('/back', function(req, res) {
    res.render('back', { title: sql.back[0] });
});

router.post('/back/change', function(req, res) {
    var id = req.body.id;
    News.find({ "newsid": id }, function(err, news) {
        res.send(news[0]);
    });


});

router.post('/back/submit', function(req, res) {
    var id = req.body.id;
    var caption = req.body.caption;
    var content = req.body.content;
    var select = req.body.select;

    News.find({ "newsid": id }, function(err, news) { //修改数据
        news[0].newstitle = caption;
        news[0].newscontent = content;
        news[0].headlines = select;
        news[0].save();
        res.send(news[0]);
    });
});

router.post('/back/delete', function(req, res) { //删除数据
    var id = req.body.id;
    News.find({ "newsid": id }, function(err, news) {
        news[0].remove();
        res.send(news[0]);
    });
});

router.post('/back/creat', function(req, res) {
    // var id = req.body.id;
    var caption = req.body.caption;
    var content = req.body.content;
    var select = req.body.select;
    News.create({ newstitle: caption, newsimg: "img/fu.jpg", newscontent: content, headlines: select, addtime: "2016-06-04" }, function(err) {
        if (err) throw err;
        res.send("add over!");
    });

});

module.exports = router;
