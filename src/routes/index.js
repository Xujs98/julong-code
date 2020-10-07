const router = require('koa-router')()
const formidable = require('formidable')


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    name:'小松',
    isMe:true
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  // const session = ctx.session;
  // if(session.viewNum == null){
  //   session.viewNum = 0;
  // }
  // session.viewNum++;

  ctx.body = {
    title: 'koa2 json',
    // sessionViewNum:session.viewNum
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
