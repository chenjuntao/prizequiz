var mydb = require('../db');
var sqlMap = require('../sql');
var express = require('express');
var router = express.Router();

//连接据库
var dbpool = mydb;

var jsonWrite =  (res, ret)=> {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-1',
            msg: '操作失败'
        })
    } else {
        res.json(ret);
    }
};

var query = (res, sql, sqlParams)=>{
    dbpool.getConnection(function (err, conn) {
        if (err) {
            console.log(err);
            jsonWrite(res, result);
        } else {
            conn.query(sql, sqlParams, (qerr, result)=>{
                if (qerr) {
                    console.log(qerr);
                    jsonWrite(res, result);
                }
                if (result) {
                    jsonWrite(res, result);
                }
            });
        }
        dbpool.releaseConnection(conn);
    });
};

router.get('/getAllUsers', (req, res) => {
    let sql = sqlMap.userSql.getAllUsers;
    query(res, sql, [])
});

//获取用户列表
router.get('/getUserList/:role', (req, res) => {
    let sql = sqlMap.userSql.getNameListByRole;
    query(res, sql, [req.params.role])
});

//根据姓名获取用户电话号码
router.get('/getTelphone/:name', (req, res) => {
    var sql = sqlMap.userSql.getTelByName;
    query(res, sql, [req.params.name])
});

//获取指定数据库记录
router.post('/getLimitItem', (req, res) => {
    var sql = sqlMap.userSql.getLimitItem;
    query(res, sql, [params.startIndex, params.offsite])
});

//删除item
router.delete('/deleteItem', (req, res) => {
    var sql = sqlMap.userSql.deleteItem;
    query(res, sql, [req.query.id])
});

module.exports = router