/**
 * @description 创建菜单
 * @author Xujs
 */

const { Menu } = require('./index')

const systemindex = Menu.create({
  authName: '系统首页',
  path: 'systemindex',

})

const logadmin = Menu.create({
  authName: '日志管理',
  path: 'logadmin',

})

const videoadmin = Menu.create({
  authName: '视频管理',
  path: 'videoadmin',

})

const scriptadmin = Menu.create({
  authName: '脚本管理',
  path: 'scriptadmin',
})
const taskadmin = Menu.create({
  authName: '任务管理',
  path: 'taskadmin',
})
const usersadmin = Menu.create({
  authName: '用户管理',
  path: 'usersadmin',
})
const rightadmin = Menu.create({
  authName: '权限管理',
  path: 'rightadmin',
})
const navadmin = Menu.create({
  authName: '导航管理',
  path: 'navadmin',
})
const newsadmin = Menu.create({
  authName: '消息管理',
  path: 'newsadmin',
})
const templateadmin = Menu.create({
  authName: '模板管理',
  path: 'templateadmin',
})
const databackup = Menu.create({
  authName: '数据备份',
  path: 'databackup',
})
const appadmin = Menu.create({
  authName: 'APP管理',
  path: 'appadmin',
})

const systemconfig = Menu.create({
  authName: '系统管理',
  path: 'systemconfig',
})

