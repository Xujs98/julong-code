/**
 * @description user api 路由
 * @author  Xu.js
 */

const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)
const { SECRET } = require('../../cache/secretKeys')
const { isExist } = require('../../controller/user')


router.prefix('/api/private/v1')

// 注册
router.post('/register', async (ctx, next) => {

})

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  console.log(userName)
  ctx.body = await isExist(userName)


})

// 登录路由
router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body

  let userInfo
  if(userName == 'admin' && password == '123456'){
    userInfo = {
      userId: 1,
      userName,
      nickName: '小松',
      password: '123456'
    }
  }

  // 加密userInfo
  let token
  if (userInfo) {
    token = jwt.sign(userInfo, SECRET,{ expiresIn: '1h' })
  }
  if (userInfo == null) {
    ctx.body = {
      data: null,
      meta: {
        status: -200,
        msg: '登录失败'
      }
    }
    return
  }

  ctx.body = {
    data: {
      id: 500,
      rid: 0,
      userName,
      mobile: 123,
      email: '1371446705@qq.com',
      token
    },
    meta: {
      msg: '登录成功',
      status: 200,
      resolut: 106
    }
  }
})


module.exports = router