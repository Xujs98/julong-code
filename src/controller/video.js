
/** *
* @description video cotroller
* @author xujs
*/

const { getAllVideoData, insertVideo } = require('../sevice/video') 
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { videoAllDataSuccessInfo } = require('../model/SuccessInfo') // 成功返回信息

/**
 * 获取全部视频数据
 * @param {@} @
 */
async function allVideoData({ page, number, order }) {
	const res = await getAllVideoData({ page, number, order })
	if(!res) return 
	videoAllDataSuccessInfo.data = {...res}
	return new SuccessModel(videoAllDataSuccessInfo)
}

/**
 * 插入视频数据
 * @param {Object} data 
 */
async function addVideo (data) {
	const res = await insertVideo(data)
}

module.exports = {
	allVideoData,
	addVideo
}