/**
 * @description 存储配置
 * @author  Xujs
 */
const {isProd} = require('../utils/env')


let MYSQL_CONF = {
    host:'localhost',
    user:'root',
    password:'qq1371446705',
    port:3306,
    database:'julongkj_db'
}

let REDIS_CONF = {
    port:6379,
    host:'127.0.0.1'
}


//判断环境
if(isProd){
    //线上的 redis 配置
    REDIS_CONF = {
        port:6379,
        host:'127.0.0.1'
    }

    //线上 mysql 配置
    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'qq1371446705',
        port:3306,
        database:'julongkj_db'
    }

}


module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}