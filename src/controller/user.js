/**
 * @description user controller
 * @author  Xujs
 */

// 分发jwt
const util = require('util')
const jwt = require('jsonwebtoken')
const verify = util.promisify(jwt.verify)
const { SECRET } = require('../cache/secretKeys')
const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const md5 = require('md5')
const { registerSuccessInfo, loginSuccessInfo } = require('../model/SuccessInfo') //成功返回信息
const { 
  registerUserNameNotExistInfo, registerFailInfo, registerUserNameExistInfo, 
  loginFailInfo
} = require('../model/ErrorInfo') // 失败返回信息

/**
 * 用户名是否存在
 * @param {String} userName 用户名
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 已存在
    return new ErrorModel(registerUserNameExistInfo)
  }else {
    // 可用
    return new ErrorModel(registerUserNameNotExistInfo)
  }
}

/**
 * 注册
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function register({userName, password}){
  const userInfo = await getUserInfo(userName)
 
  if (userInfo) {
    return new ErrorModel(registerUserNameExistInfo)
  }

  try {
    await createUser({
      userName,
      password: md5(password)
    })
    registerSuccessInfo.data = {userName}
    return new SuccessModel(registerSuccessInfo)
  } catch(ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(registerFailInfo)
  }
  
}

/**
 * 登录
 * @param {Object} ctx koa2 ctx 
 * @param {string} userName 用户名 
 * @param {string} password 密码 
 */
async function login(ctx, userName, password){
  const userInfo = await getUserInfo(userName, md5(password))
  if (!userInfo) {
    // 登录失败
    loginFailInfo.data = { userName }
    return new ErrorModel(loginFailInfo)
  }

  //登录成功
  // 加密token
  const token = jwt.sign(userInfo, SECRET, {expiresIn: '1h'})
  delete userInfo.password
  loginSuccessInfo.data = { ...userInfo, token}
  return new SuccessModel(loginSuccessInfo)
}

module.exports = {
  isExist,
  register,
  login
}