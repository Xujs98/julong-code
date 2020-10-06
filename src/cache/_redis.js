/**
 * @description 连接redis方法 set get
 * @author Xujs
 */

const redis = require('redis');
const {REDIS_CONF} = require('../conf/db');

//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.host);

redisClient.on('error',err=>{
    console.error('redis error',err);
});


/**
 * redis set
 * @param {string} key  键 
 * @param {string} val  值
 * @param {number} timeout 过期时间
 */
function set(key,val,timeout=60*60){
    if(typeof val === 'object'){
        val = JSON.stringify(val);
    }
    redisClient.set(key,val);
    //设置过期时间
    redisClient.expire(key,tiemout);
}

/**
 * redis get
 * @param {string} key 键
 */
function get(key){
    const promise = new Promise((resolve,reject)=>{
        redisClient.get(key,(err,val)=>{
            if(err){
                reject(err);
                return;
            }
            if(val == null){
                resolve(null);
                return;
            }

            //查询的值存在则尝试变成json格式
            try{
                resolve(
                    JSON.parse(val)
                )
            }catch(ex){ //如果变不成json格式则原样返回
                resolve(val)
            }
        })
    })
    return promise;
}


module.exports = {
    set,
    get
}