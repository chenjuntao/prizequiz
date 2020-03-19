var models = require('../db');
var $sql = require('../sql');
var express = require('express');
var mysql = require('mysql');
var router = express.Router();

//连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();

var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        })
    } else {
        res.json(ret);
    }
}

//获取用户列表
router.get('/getUserList/:role', (req, res) => {
    var sql = $sql.projectSql.getNameListByRole;
    conn.query(sql, [req.params.role], function (err, result) {
        if (err) {
            console.log(err);
            jsonWrite(res, result);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//根据姓名获取用户电话号码
router.get('/getTelphone/:name', (req, res) => {
    var sql = $sql.projectSql.getTelByName;
    conn.query(sql, [req.params.name], function (err, result) {
        if (err) {
            console.log(err);
            jsonWrite(res, result);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//获取指定数据库记录
router.post('/getLimitItem', (req, res) => {
    var params = req.body;
    var sql = $sql.projectSql.getLimitItem;
    console.log(params.startIndex, params.offsite);
    conn.query(sql, [params.startIndex, params.offsite], function (err, result) {
        if (err) {
            console.log(err);
            jsonWrite(res, result);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//删除item
router.delete('/deleteItem', (req, res) => {
    console.log('enter delete');
    console.log(req.query);
    var sql = $sql.projectSql.deleteItem;
    var params = req.query;
    conn.query(sql, [params.id], function (err, result) {
        if (err) {
            console.log(err);
            jsonWrite(res, result);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

module.exports = router