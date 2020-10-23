/**
 * @description 存储配置
 * @author  Xujs
 */
const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)
const { SECRET } = require('../../cache/secretKeys')

router.prefix('/api/private/v1')


router.get('/getuserInfo',async (ctx, next) => {
  // 拿到客户端的token
  const token = ctx.header.authorization


  try {
    const payload = await verify(token.split(' ')[1], SECRET)
    ctx.body = {
      data: null,
      meta: {
        msg: '解析成功',
        status: 100,
        userInfo: payload
      }
    }
  } catch (ex) {
    ctx.body = {
      data: null,
      meta: {
        msg: '解析失败',
        status: -1,
      }
    }
  }


})

router.post('/login',async (ctx,next) => {
  const { username, password } = ctx.request.body


  let userInfo
  if(username == 'admin' && password == '123456'){
    userInfo = {
      userId: 1,
      username,
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
      username,
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

