/**
 * @description  环境变量
 * @author  Xujs
 */

//获取package.js 中的script
const ENV = process.env.NODE_ENV;

module.exports = {
    isDev:ENV === 'dev',
    noDev:ENV !== 'dev',
    isProd:ENV === 'production',
    noProd:ENV !== 'production',
    isTest:ENV === 'test',
    noTest:ENV !== 'test'
}