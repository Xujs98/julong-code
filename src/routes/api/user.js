/**
 * @description user api 路由
 * @author  Xu.js
 */

const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)
const { SECRET } = require('../../cache/secretKeys')

router.prefix('/api/private/v1')

// 登录路由
router.post('/login', async (ctx, next) => {
  const res = ctx.request.body
  
})


module.exports = router