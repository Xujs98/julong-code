/**
 * @description 数据格式化
 * @author  Xujs
 */

const { DEFAULT_PICTURE, DEFAULT_NICKNAME } = require('../conf/controller')

/**
 * 用户默认头像
 * @param {Object} obj 用户对象
 */
function _formatUserPicture(obj) {
  if (obj.picture == null){
    // 设置用户默认头像
    obj.picture = DEFAULT_PICTURE
    // 设置默认昵称
    obj.nickName = DEFAULT_NICKNAME
  }
  return obj
}

/**
 * 格式化用户信息
 * @param {Array|Object} list 用户列表或者单个用户
 */
function formatUser(list) {
  if (list == null) { //防错处理
    return list
  }

  if (list instanceof Array) {
    // 数组 用户列表
    return list.map(_formatUserPicture)
  }

  // 单个对象
  return _formatUserPicture(list)
}



module.exports = {
  formatUser
}