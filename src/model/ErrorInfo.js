/**
 * @description 失败信息集合 包涵 data 和 meta
 * @author  Xujs
 */

module.exports = {
  // 用户名不存在
  registerUserNameNotExistInfo: {
    data: {},
    meta: {
      status: 205,
      message: '用户名可以使用'
    }
  },
  // 用户名已存在
  registerUserNameExistInfo: {
    data: {},
    meta: {
      status: 205,
      message: '用户名已存在'
    }
  },
  // 注册失败
  registerFailInfo: {
    data: {},
    meta: {
      message: '注册失败',
      status: 200
    }
  },
  // 数据格式校验错误
  jsonSchemaFileInfo: {
    data: {},
    meta: {
      message: '数据格式校验错误',
      status: 501
    }
  }
}