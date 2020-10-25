/**
 * @description res 的数据模型
 * @author  Xujs
 */

/**
 * 基础模块
 */
class BaseModel {
  constructor({meta, data}) {
    this.meta = meta
    if (data) {
      this.data = data
    }
  }
}

/**
 * 成功的数据模型
 */
class SuccessModel extends BaseModel {
  constructor(data = {}, message, status) {
    super({
      data,
      meta: {
        message: '可以使用这个账号',
        status: 200,
      }
    })
  }
}

/**
 * 失败的数据模型
 */
class ErrorModel extends BaseModel {
  constructor({data,meta}) {
    super({
      data,
      meta
    })
  }
}


module.exports = {
  SuccessModel,
  ErrorModel
}