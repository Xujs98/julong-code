/**
 * @description 数据模型入口文件
 * @author  Xujs
 */

const User = require('./User')
const Menu = require('./Menu')
const MenuChilderen = require('./MenuChildren')


// 外键关联
// MenuChilderen.belongsTo(Menu, {
//   foreignKey: 'id'
// })
Menu.hasMany(MenuChilderen, {
  foreignKey: 'parent_id'
})
// Menu.belongsTo(MenuChilderen, { foreignKey: 'parent_id', targetKey: 'id' })

module.exports = {
  User,
  Menu,
  MenuChilderen
}

