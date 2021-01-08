
/** *
* @description video service
* @author xujs
*/

const { video } = require('../db/model/index') // 引入数据模型
const { formVideo } = require('./_format')

async function getAllVideoData (whereItmeData) {
	// 数据库查找全部视频数据
	const result = await video.findAndCountALL({
		where: {
			...whereItmeData // 解构对象
		},
		attributes: [
		'id', 'title', 'subhead', 'img', 'poster', 'director', 'protagonist',
		'score', 'language', 'region', 'issuedate', 'updatetime', 'filmintroduce', 'updatestatus', 'playurl', 'downloadurl'
		],
		limit: number, // 限制本次查询条目
		offset: number * page, //跳过多少条目
		order: [
			['id', order? 'desc' : 'ascend'] //默认倒序
		]
	})
	
	// 拿到查询结果
	const res = result.rows.map( videoData => {
		const video_data_list = videoData.dataValues
		return video_data_list
	})
	
	// 数据格式化
	return formVideo(res)
}

async function insertVideo (data) {
	const result = await video.create({
		...data
	})
	return result.dataValues
}

// 向外暴露
module.exports = {
	getAllVideoData,
	insertVideo
}