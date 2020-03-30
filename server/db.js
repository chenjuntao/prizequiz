var mysql = require('mysql');

//需要连接的mysql的配置语句
mysql_config = {
  host: '139.159.149.161',
  user: 'root',
  password: '123',
  database: 'prizequiz',
  port: '3306'
};

function handleError(err) {
  if (err) {
    // 如果是连接断开，自动重新连接
    if (err.code === 'PROTOCOL_CONNECTION_LOST' 
    || err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR' 
    || err.code === 'ETIMEDOUT') {
      connect();
    } else {
      console.error(err.stack || err);
    }
  }
}

// 连接数据库
function connect() {
  connPool = mysql.createPool(mysql_config);
  // conn.connect(handleError);
  connPool.on('error', handleError);
}

var connPool;
connect();

module.exports = connPool;