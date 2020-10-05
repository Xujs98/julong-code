const router = require('koa-router')()
const formidable = require('formidable')


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
 
  ctx.body = {
    title: 'koa2 json',
    
  }
})

router.get('/pro/:userName',async (ctx,next)=>{
  const {userName} = ctx.params;
  ctx.body = {
    text:'123',
    userName
  }
})



router.post('/login',async (ctx,next)=>{
  const {userName,password} = ctx.request.body
  console.log(userName,password)
  ctx.body = {
    method:'post',
    userName,
    password
  }

  
})

module.exports = router
