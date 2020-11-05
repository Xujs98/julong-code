/**
 * @description 一级菜单数据模型
 * @author Xujs
 */

const seq = require('../seq')
const { STRING, INTEGER } = require('../types')

const Menu = seq.define('menu',{
  authName: {
    type: STRING,
    allowNull: false,
    comment: '菜单名称'
  },
  path: {
    type: STRING,
    allowNull: false,
    comment: '菜单路径'
  }
})


module.exports = Menu