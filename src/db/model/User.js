/**
 * @description 用户数据模型
 * @author  Xujs
 */

const seq = require('../seq')
const { STRING, DECIMAL } = require('../types')

const User = seq.define('user', {
  userName: {
    type: STRING, //数据类型(字符串)
    allowNull: false, // 是否为空(false)
    unique: true, // 是否唯一
    comment: '用户名，唯一' // 说明
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: '密码'
  },
  nickName: {
    type: STRING,
    allowNull: true,
    comment: '昵称'
  },
  gender: {
    type: DECIMAL,
    allowNull: true,
    defaultValue: 3,  // 默认值
    comment: '性别（1 男；2 女；3 保密）'
  },
  picture: {
    type: STRING,
    allowNull: true,
    comment: '头像'
  }
})


module.exports = User