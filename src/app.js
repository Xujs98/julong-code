const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const { REDIS_SECRRT_KEY, SECRET } = require('./cache/secretKeys')
const {REDIS_CONF} = require('./conf/db')
const jwtkoa = require('koa-jwt')

//路由列表
const index = require('./routes/index')
const users = require('./routes/users')
const login = require('./routes/api/login')

// error handler
onerror(app)


// 配置jwt
app.use(jwtkoa({
  secret: SECRET
}).unless({
  path: [/^\/user\/login/,/\/api\/private\/v1\/login/]  // 自定义忽略jwt验证
}))


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

//session 配置
app.keys = [REDIS_SECRRT_KEY]
app.use(session({
  key:'julong.sid',     //cookie name
  prefix:'julong:sess', //前缀
  cookie:{
    path:'/',
    httpOnly:true,
    maxAge:24*60*60*1000  //过期时间
  },
  store:redisStore({
    all:'127.0.0.1:6379'
  })
}))



app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })



// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(login.routes(), login.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
