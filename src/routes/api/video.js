/** *
* 	@description video 路由
* 	@author xujs
*/

const router = require('koa-router')() // 引入koa路由库
const { allVideoData, addVideo } = require('../../controller/video') // 引入video控制器

router.prefix('/api/private/v1')  // 路由前缀

// 得到全部影视资源
router.get('/video/alldata/:page/:number/:order', async (ctx, next) => {
	const { page, number, order } = ctx.request.body
	// 拿到token 验证身份
	const token = ctx.header.authorization
	// 返回
	ctx.body = await allVideoData({ page, number, order })
})

router.post('/video/add', async (ctx, next) => {
	// 拿到token
	const token  = ctx.header.authorization
	// 拿到提交的视频数据
	const getSubmitData = ctx.request.body
	// 返回
	ctx.body = await addVideo(getSubmitData)
})




// 向外暴露 video router
module.exports = router