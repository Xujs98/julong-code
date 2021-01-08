/**
 * @description 数据格式化
 * @author  Xujs
 */

const { DEFAULT_PICTURE, DEFAULT_NICKNAME, DEFAULT_GENDER } = require('../conf/controller')

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
    // 设置默认性别
    obj.gender = DEFAULT_GENDER
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

/**
 *  格式化菜单列表
 * @param {Object} menulist 菜单列表
 */
function formatMenus(menulist) {
  if (menulist === null) {
    return menulist
  }
  var result = {}
  var nav = []
  var menu = {}
  var menus = {}
  for (i in menulist) {
    // 处理导航条
    if (menulist[i].menu == 0) {
      nav.push(menulist[i])
    }

    // 处理一级菜单
    if (menulist[i].menu == 1) {
      menu[menulist[i].path] = {
        ...menulist[i],
        children: []
      }
    }

    // 处理二、三级菜单
    if (menulist[i].menu == 2) {
      // 处理三级菜单
      let idx = []
      let res = menulist.map((item, index) => {
        if (item.menu == 3 && menulist[i].path == item.parend_path) {
          idx.push(index)
          return item
        }
      })

      // 处理二级菜单
      menu[menulist[i].parend_path].children.push({
        ...menulist[i],
        children: idx.map((item) => {
          return res[item]
        })
      })
    }
  }

  // 格式化菜单
  for (k in menu) {
    if (!menus[menu[k].parend_path]) {
      menus[menu[k].parend_path] = []
    }
    menus[menu[k].parend_path].push({
      id: menu[k].id,
      authName: menu[k].authName,
      path: menu[k].path,
      icon: menu[k].icon,
      children: menu[k].children
    })
  }
  result = {nav, menus}
  return result
}

/**
 *  格式化视频列表
 * @param {Object} videoData 视频数据列表
 */
function formVideo (videoData) {
	let video_data_list = videoData.map((item => {
		let dataAll = item
		let classifyData = dataAll.classify.split('-')
		dataAll.classify = {parent: classifyData[0], son: classifyData[1]}
		if (classifyData.length > 2) {
			dataAll.classify.son = classifyData
			dataAll.classify.son.shift()
		}
		return dataAll
	}))
}

/**
 *  正则取中间文本
 * @param {String} str 原文本
 * @param {String} stars 左边
 * @param {String} end 右边
 * @return {Array} 返回数组
 */
function getCenterText (str, stars, end) {
	// create regexp
	let Regexp = new RegExp("{stars}(.*?)end", 'ig')
	// create void Array
	let strArr = []
	// iteration regexp result
	while ( result = Regexp.exec(str.toString()) ) {
		// insert result
		strArr.push(result)
	}
	// return result
	return strArr
}

module.exports = {
  formatUser,
  formatMenus,
  formVideo
}
