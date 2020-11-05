/**
 * @description 创建二级菜单
 * @author Xujs
 */

const { MenuChilderen } = require('./index')

// 系统首页
const adminindex = MenuChilderen.create({
  authName: '后台首页',
  path: 'adminindex',
  parent_id: 1

})

// 日志管理
const loglist = MenuChilderen.create({
  authName: '日志列表',
  path: 'loglist',
  parent_id: 2

})


// 视频管理
const addvideo = MenuChilderen.create({
  authName: '添加视频',
  path: 'addvideo',
  parent_id: 3

})
const videolist = MenuChilderen.create({
  authName: '视频列表',
  path: 'videolist',
  parent_id: 3
})
const classify = MenuChilderen.create({
  authName: '分类管理',
  path: 'classify',
  parent_id: 3

})
const label = MenuChilderen.create({
  authName: '标签管理',
  path: 'label',
  parent_id: 3
})
const area = MenuChilderen.create({
  authName: '区域管理',
  path: 'area',
  parent_id: 3
})
const taskproject = MenuChilderen.create({
  authName: '人物专题',
  path: 'taskproject',
  parent_id: 3
})
const videocapture = MenuChilderen.create({
  authName: '视频采集',
  path: 'videocapture',
  parent_id: 3
})


// 脚本管理
const scriptlist = MenuChilderen.create({
  authName: '脚本列表',
  path: 'scriptlist',
  parent_id: 4
})


// 任务管理
const tasklist = MenuChilderen.create({
  authName: '任务列表',
  path: 'tasklist',
  parent_id: 5
})

// 用户管理
const userlist = MenuChilderen.create({
  authName: '用户列表',
  path: 'userlist',
  parent_id: 6
})
const userfootprint = MenuChilderen.create({
  authName: '用户足迹',
  path: 'userfootprint',
  parent_id: 6
})
const commentlist = MenuChilderen.create({
  authName: '评论列表',
  path: 'commentlist',
  parent_id: 6
})

// 权限管理
const rolelist = MenuChilderen.create({
  authName: '角色列表',
  path: 'rolelist',
  parent_id: 7
})
const rightlist = MenuChilderen.create({
  authName: '权限列表',
  path: 'rightlist',
  parent_id: 7
})

// 导航管理
const navlist = MenuChilderen.create({
  authName: '导航列表',
  path: 'navlist',
  parent_id: 8
})

// 消息管理
const newslist = MenuChilderen.create({
  authName: '消息列表',
  path: 'newslist',
  parent_id: 9
})

// 模板管理
const templatelist = MenuChilderen.create({
  authName: '模板列表',
  path: 'templatelist',
  parent_id: 10
})

// 数据库备份
const databackup = MenuChilderen.create({
  authName: '数据库备份',
  path: 'databackup',
  parent_id: 11
})

// app管理
const applist = MenuChilderen.create({
  authName: 'App列表',
  path: 'applist',
  parent_id: 12
})

// 系统管理
const systemset = MenuChilderen.create({
  authName: '系统设置',
  path: 'systemset',
  parent_id: 13
})
const videoset = MenuChilderen.create({
  authName: '视频设置',
  path: 'videoset',
  parent_id: 13
})
const seonotice = MenuChilderen.create({
  authName: '站内公告',
  path: 'seonotice',
  parent_id: 13
})
const databaseconfig = MenuChilderen.create({
  authName: '数据库配置',
  path: 'databaseconfig',
  parent_id: 13
})
