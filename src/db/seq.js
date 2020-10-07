/**
 * @description sequelize   实例
 * @author  Xujs
 */
const Sequelize = require("sequelize")
const {MYSQL_CONF} = require('../conf/db')
const {isProd,isTest} = require('../utils/env')

const {host,user,password,port,database} = MYSQL_CONF


const conf = {
    host:host,
    dialect:"mysql"
}

//判断测试环境
if(isTest){
    //我期望测试环境下不打印sql语句
    conf.loggin = ()=>{}
}


//线上环境使用连接池
if(isProd){
    conf.pool = {
        max:5,  //连接池运行最大连接数
        min:0,  //最小
        idle:10000  //如果一个连接池10s内没有被使用则释放
    }
}


const seq = new Sequelize(database,user,password,conf)

// sql.authenticate().then(()=>{
//     console.log("ok")
// }).catch(()=>{
//     console.log("err")
// })

// seq.authenticate().then(()=>{console.log("OK")}).catch(()=>{console.log("NO")})

module.exports = seq;
