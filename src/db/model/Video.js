/** *
* @description video 数据模型
*/

const seq = require('../seq')
const { STRING, TEXT, DECIMAL } = require('../type')
const unkonwn = '未知'

const Video = seq.define('video', {
  title: {
		type: STRING,
		allowNull: false,
		comment: '标题'
	},
	subhead: {
		type: STRING,
		allowNull: true,
		defaultValue: unkonwn,
		comment: '副标题'
	},
	img: {
		type: STRING,
		allowNull: true,
		comment: '图片'
	},
	poster: {
		type: STRING,
		allowNull: true,
		comment: '海报'
	},
	director: {
		type: STRING,
		allowNull: true,
		defaultValue: unkonwn,
		comment: '导演'
	},
	protagonist: {
		type: STRING,
		allowNull: true,
		defaultValue: unkonwn,
		comment: '主演'
	},
	classifyparent: {
		type: STRING,
		allowNull: true,
		defaultValue: unkonwn,
		comment: '父级分类'
	},
	classifyschildren: {
		type: STRING,
		allowNull: true,
		defaultValue: unkonwn,
		comment: '子级分类'
	},
	score: {
		type: DECIMAL,
		allowNull: true,
		defaultValue: 0,
		comment: '评分'
	},
	language: {
		type: STRING,
		allowNull: true,
		defaultValue: unkonwn,
		comment: '语言'
	},
	region: {
		type: STRING,
		allowNull: true,
		defaultValue: unkonwn,
		comment: '地区'
	},
	issuedate: {
		type: STRING,
		allowNull: true,
		defaultValue: unkonwn,
		comment: '发行时间'
	},
	updatetime: {
		type: STRING,
		allowNull: true,
		defaultValue: unkonwn,
		comment: '更新时间'
	},
	filmintroduce: {
		type: TEXT,
		allowNull: true,
		defaultValue: '无介绍',
		comment: '影片介绍'
	},
	updatestatus: {
		type: STRING,
		allowNull: true,
		defaultValue: unkonwn,
		comment: '更新状态'
	},
	playurl: {
		type: STRING,
		allowNull: true,
		comment: '播放地址'
	},
	downloadurl: {
		type: STRING,
		allow: true,
		comment: '下载地址'
	}
})



module.exports = Video