/**
 * @description 菜单实例化
 * @author Xujs
 */

const { Menu } = require('./index')

const data = [
  // 导航条
  {authName: '首页', parend_path: null, path: 'index', menu: 0, icon:null, order: null},
  {authName: '系统', parend_path: null, path: 'system', menu: 0, icon:null, order: null},
  {authName: '视频', parend_path: null, path: 'video', menu: 0, icon:null, order: null},
  {authName: '会员', parend_path: null, path: 'member', menu: 0, icon:null, order: null},
  {authName: 'APP管理', parend_path: null, path: 'appmanage', menu: 0, icon:null, order: null},
  // 一级菜单-----------------------------------------------------------------------------------------------------
  // > 首页
  {authName: '快捷菜单', parend_path: 'index', path: 'shortcutmenu', menu: 1, icon:'el-icon-s-tools', order: null},
  // > 系统 
  {authName: '系统功能', parend_path: 'system', path: 'systemfunction', menu: 1, icon:'el-icon-s-tools', order: null},
  {authName: '广告设置', parend_path: 'system', path: 'advertisingset', menu: 1, icon:'el-icon-picture-outline', order: null},
  {authName: '后台权限', parend_path: 'system', path: 'adminpower', menu: 1, icon:'el-icon-s-check', order: null},
  {authName: '常用工具', parend_path: 'system', path: 'tools', menu: 1, icon:'el-icon-brush', order: null},
  // > 视频 
  {authName: '视频管理', parend_path: 'video', path: 'videoadmin', menu: 1, icon:'el-icon-video-play', order: null},
  // > 会员 
  {authName: '会员管理', parend_path: 'member', path: 'memberadmin', menu: 1, icon:'el-icon-s-custom', order: null},
  {authName: '充值管理', parend_path: 'member', path: 'topupdmin', menu: 1, icon:'el-icon-s-finance', order: null},
  {authName: '提现管理', parend_path: 'member', path: 'wdadmin', menu: 1, icon:'el-icon-s-cooperation', order: null},
  {authName: '评论管理', parend_path: 'member', path: 'commentdmin', menu: 1, icon:'el-icon-chat-dot-square', order: null},
  // > 首页
  {authName: 'APP管理', parend_path: 'appmanage', path: 'appCodeName', menu: 1, icon:'el-icon-mobile-phone', order: null},
  // ---------------------------------------------------------------------------------------------------------------


  // 二级菜单-----------------------------------------------------------------------------------------------------
  // > 首页
  {authName: '后台首页', parend_path: 'shortcutmenu', path: 'adminindex', menu: 2, icon:null, order: null},
  // > 系统 - 系统功能
  {authName: '系统设置', parend_path: 'systemfunction', path: 'systemset', menu: 2, icon:null, order: null},
  {authName: '站内公告', parend_path: 'systemfunction', path: 'systemnotice', menu: 2, icon:null, order: null},
  {authName: '支付方式', parend_path: 'systemfunction', path: 'systempay', menu: 2, icon:null, order: null},
  {authName: '数据库配置', parend_path: 'systemfunction', path: 'systemmysql', menu: 2, icon:null, order: null},
  // > 系统 - 广告设置 -
  {authName: '广告列表', parend_path: 'advertisingset', path: 'advertisinglist', menu: 2, icon:null, order: null},
  {authName: '广告位管理', parend_path: 'advertisingset', path: 'advertisingadmin', menu: 2, icon:null, order: null},
  // > 系统 - 后台权限 -
  {authName: '账号管理', parend_path: 'adminpower', path: 'idadmin', menu: 2, icon:null, order: null},
  {authName: '角色管理', parend_path: 'adminpower', path: 'roleadmin', menu: 2, icon:null, order: null},
  // > 系统 - 常用工具 -
  {authName: '基本工具', parend_path: 'tools', path: 'basictools', menu: 2, icon:null, order: null},
  // > 视频 - 视频管理 -
  {authName: '上传视频', parend_path: 'videoadmin', path: 'videoadd', menu: 2, icon:null, order: null},
  {authName: '视频列表', parend_path: 'videoadmin', path: 'videolist', menu: 2, icon:null, order: null},
  {authName: '视频审核', parend_path: 'videoadmin', path: 'videocheck', menu: 2, icon:null, order: null},
  {authName: '标签管理', parend_path: 'videoadmin', path: 'tag', menu: 2, icon:null, order: null},
  {authName: '区域管理', parend_path: 'videoadmin', path: 'area', menu: 2, icon:null, order: null},
  {authName: '视频采集', parend_path: 'videoadmin', path: 'collect', menu: 2, icon:null, order: null},
  // > 会员 - 会员管理 -
  {authName: '会员列表', parend_path: 'memberadmin', path: 'memberlist', menu: 2, icon:null, order: null},
  {authName: '消费记录', parend_path: 'memberadmin', path: 'consumelog', menu: 2, icon:null, order: null},
  {authName: '视频消费', parend_path: 'memberadmin', path: 'videoconsume', menu: 2, icon:null, order: null},
  // > 会员 - 充值管理 -
  {authName: '充值记录', parend_path: 'topupdmin', path: 'topuplog', menu: 2, icon:null, order: null},
  {authName: 'VIP套餐', parend_path: 'topupdmin', path: 'vipmeal', menu: 2, icon:null, order: null},
  {authName: '金币套餐', parend_path: 'topupdmin', path: 'goldmeal', menu: 2, icon:null, order: null},
  // > 会员 - 提现管理 -
  {authName: '提现列表', parend_path: 'wdadmin', path: 'wdlist', menu: 2, icon:null, order: null},
  {authName: '银行卡列表', parend_path: 'wdadmin', path: 'banklist', menu: 2, icon:null, order: null},
  // > 会员 - 评论管理 -
  {authName: '评论列表', parend_path: 'commentdmin', path: 'commentlist', menu: 2, icon:null, order: null},
  // ---------------------------------------------------------------------------------------------------------------
  
  // 三级菜单-----------------------------------------------------------------------------------------------------
  // > 首页 - 
  {authName: '后台首页', parend_path: 'adminindex', path: 'adminindex3', menu: 3, icon:null, order: null},

  // > 系统 - 系统功能 - 系统设置
  {authName: '基础设置', parend_path: 'systemset', path: 'basicsset', menu: 3, icon:null, order: null},
  {authName: '分享设置', parend_path: 'systemset', path: 'shareset', menu: 3, icon:null, order: null},
  {authName: '视频设置', parend_path: 'systemset', path: 'videoset', menu: 3, icon:null, order: null},
  {authName: '视频上传设置', parend_path: 'systemset', path: 'videouploadingset', menu: 3, icon:null, order: null},
  {authName: '短信设置', parend_path: 'systemset', path: 'noteset', menu: 3, icon:null, order: null},
  {authName: '视频自动录入', parend_path: 'systemset', path: 'videoautoentering ', menu: 3, icon:null, order: null},
  {authName: '服务协议', parend_path: 'systemset', path: 'serviceagreement', menu: 3, icon:null, order: null},


  // > 系统 - 系统功能 - 站内公告
  {authName: '站内公告', parend_path: 'systemnotice', path: 'notice', menu: 3, icon:null, order: null},

  // > 系统 - 系统功能 - 支付方式
  {authName: '支付方式', parend_path: 'systempay', path: 'pay', menu: 3, icon:null, order: null},

  // > 系统 - 系统功能 - 数据库配置
  {authName: '数据库配置', parend_path: 'systemmysql', path: 'mysql', menu: 3, icon:null, order: null},

  // > 系统 - 广告设置 - 广告列表
  {authName: '广告列表', parend_path: 'advertisinglist', path: 'adlist', menu: 3, icon:null, order: null},

  // > 系统 - 广告设置 - 广告位管理
  {authName: '广告位管理', parend_path: 'advertisingadmin', path: 'admanage', menu: 3, icon:null, order: null},

  // > 系统 - 后台权限 - 账号管理
  {authName: '账号管理', parend_path: 'idadmin', path: 'idmanage', menu: 3, icon:null, order: null},

  // > 系统 - 后台权限 - 角色管理
  {authName: '账号管理', parend_path: 'roleadmin', path: 'rolemanage', menu: 3, icon:null, order: null},

  // > 系统 - 常用工具 - 基本工具
  {authName: '基本工具', parend_path: 'basictools', path: 'tool', menu: 3, icon:null, order: null},

  // > 视频 - 视频管理 - 上传视频
  {authName: '上传视频', parend_path: 'videoadd', path: 'addvideo', menu: 3, icon:null, order: null},
  
  // > 视频 - 视频管理 - 视频列表
  {authName: '视频列表', parend_path: 'videolist', path: 'videolists', menu: 3, icon:null, order: null},
  
  // > 视频 - 视频管理 - 视频审核
  {authName: '视频审核', parend_path: 'videocheck', path: 'videochecks', menu: 3, icon:null, order: null},
  
  // > 视频 - 视频管理 - 标签管理
  {authName: '标签管理', parend_path: 'tag', path: 'tagmanage', menu: 3, icon:null, order: null},
  
  // > 视频 - 视频管理 - 区域管理
  {authName: '区域管理', parend_path: 'area', path: 'areamanage', menu: 3, icon:null, order: null},
  
  // > 视频 - 视频管理 - 视频采集
  {authName: '视频采集', parend_path: 'collect', path: 'videocollect', menu: 3, icon:null, order: null},
  // ---------------------------------------------------------------------------------------------------------------
]

data.forEach(async (item) => {
  await Menu.create(item)
})
