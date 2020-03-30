var sqlMap = {
    userSql: {
        // addnewProject: 'insert into project(id,WebName,Section,Source)values(?,?,?,?)',
 
        // updateItem: 'update project set WebName=?,Section=?,Source=? where id=?',
        // deleteItem: 'delete from project where id = ?',
 
        // getLimitItem: 'select * from project limit ?,?',
        // getCount: 'select count(*) from project',

        
        getAllUsers: 'select * from user',
        getNameListByRole: 'select name from user where role = ?',
        getTelByName: 'select tel from user where name = ?'
    }
}

module.exports = sqlMap;