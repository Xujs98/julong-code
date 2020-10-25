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
    this.data = data
  }
}

/**
 * 成功的数据模型
 */
class SuccessModel extends BaseModel {
  constructor({data, meta}) {
    super({
      data,
      meta
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