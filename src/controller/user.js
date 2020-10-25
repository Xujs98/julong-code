/**
 * @description user controller
 * @author  Xujs
 */

const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerSuccessInfo } = require('../model/SuccessInfo')
const md5 = require('md5')
const { 
  registerUserNameNotExistInfo, registerFailInfo, registerUserNameExistInfo 
} = require('../model/ErrorInfo')

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
    return new SuccessModel(registerSuccessInfo)
  } catch(ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(registerFailInfo)
  }
  
}

/**
 * 登录
 * @param {string} userName 用户名 
 * @param {string} password 密码 
 */
async function login({ userName, password }){

}

module.exports = {
  isExist,
  register,
  login
}