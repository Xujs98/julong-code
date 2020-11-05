/**
 * @description user services
 * @author  Xujs
 */

const { User, Menu, MenuChilderen } = require('../db/model/index') //数据模型
const { formatUser } = require('./_format')
/**
 * 查询
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

/**
 * 创建用户
 * @param {string} userName 用户名 
 * @param {string} password 密码 
 * @param {number} gender 性别 
 * @param {string} nickName 昵称 
 */
async function createUser({ userName, password, gender = 3, nickName  }){
  const result = await User.create({
    userName,
    password,
    gender: gender? gender : 3,
    nickName: nickName? nickName : userName
  })
  return result.dataValues
}

/**
 * 获取菜单
 * @param {string} userName 用户名
 */
async function getMenus(userName) {
  // 连表查询
  const result = await Menu.findAndCountAll({
    // order: [ ['id', 'desc'] ],
    // 包含连表
    include: [
      {
        model: MenuChilderen,
        attributes: ['authName', 'path'],
      }
    ],
    attributes: ['authName']
    
  })

  const res = result.rows.map(menus => {
    const menusVal = menus.dataValues
    return menusVal
  })

  return res
}


module.exports = {
  getUserInfo,
  createUser,
  getMenus
}