/**
 * @description user services
 * @author  Xujs
 */

const { User } = require('../db/model/index') //数据模型
const { formatUser } = require('./_format')

/**
 * 
 * @param {string} userName 用户
 * @param {string} password 密码
 */
async function getUserInfo(userName, password) {
  // 查询条件
  const whereOpt = {
    userName
  }
  if (password) {
    Object.assign(whereOpt, { password })
  }

  // 查询
  const result = await User.findOne({
    attributes: ['id', 'userName', 'password', 'nickName', 'picture'],
    where: whereOpt
  })
  if (result == null) {
    // 未查到
    return result
  }

  // 查到 格式化
  const formatRes = formatUser(result.dataValues)
  // 返回
  return formatRes

}


module.exports = {
  getUserInfo
}