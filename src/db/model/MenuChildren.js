/**
 * @description 二级菜单数据模型
 * @author Xujs
 */

const seq = require('../seq')
const { STRING, INTEGER } = require('../types')

const MenuChilderen = seq.define('menuchideren',{
  authName:{
    type: STRING,
    allowNull: false,
    comment:'二级菜单名称'
  },
  path: {
    type: STRING,
    allowNull: false,
    comment: '二级菜单路径'
  },
  parent_id: {
    type: INTEGER,
    allowNull: false,
    comment: '二级菜单父级ID'
  }
})

module.exports = MenuChilderen