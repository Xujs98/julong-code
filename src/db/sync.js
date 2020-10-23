/**
 * @description sequelize 同步数据库
 * @author Xujs
 */

const seq = require('./seq');

require('./model/index')


// 测试连接
seq.authenticate().then(()=>{
    console.log('OK');
}).catch(()=>{
    console.log('err')
})

// 执行同步
seq.sync({force :true}).then(()=>{
    console.log('同步成功');
    process.exit();
}).catch(()=>{
    console.log('执行失败')
})