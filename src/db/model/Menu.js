/**
 * @description 菜单模型
 * @author Xujs
 */

const seq = require('../seq')
const { STRING, INTEGER, DECIMAL } = require('../types')

const Menu = seq.define('menu',{
  authName: {
    type: STRING,
    allowNull: false,
    comment: '菜单名称'
  },
  parend_path: {
    type:STRING,
    allowNull: true,
    defaultValue: null,
    comment: '父级path'
  },
  path: {
    type: STRING,
    allowNull: false,
    comment: '菜单路径'
  },
  menu: {
    type: DECIMAL,
    allowNull: false,
    comment: '菜单等级'
  },
  icon: {
    type: STRING,
    allowNull: true,
    defaultValue: null,
    comment: '图标'
  },
  order: {
    type: DECIMAL,
    allowNull: true,
    comment: '排序'
  }

})


module.exports = Menu