/**
 * @description user controller
 * @author  Xujs
 */

const { getUserInfo } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerUserNameNotExistInfo } = require('../model/ErrorInfo')

/**
 * 用户名是否存在
 * @param {String} userName 用户名
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 已存在
    //return new SuccessModel(userInfo)
    return {
      data: {userInfo},
      message: '不可以使用',
      status: 500
    
    }
  }else {
    return new ErrorModel(registerUserNameNotExistInfo)
    // 不存在
    // return {
    //     data: {},
    //     message: '可以使用',
    //     status: 200
      
    // }
  }
}


module.exports = {
  isExist
}