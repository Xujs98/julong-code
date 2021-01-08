
/**
 * @description video 数据格式校验
 * @author Xujs
 */
 
const validates = require('./_validate')

// 校验规则
const SCHEMA = {
	type: 'object',
	properties: {
		title: {
			type: 'string',
			maxLength: 30,
			minLength: 0
		},
		subhead: {
			type: 'string',
			maxLength: 30,
			minLength: 0
		},
		img: {
			type: 'string',
			maxLength: 500,
			minLength: 0
		},
		poster: {
			type: 'string',
			maxLength: 500,
			minLength: 0
		},
		director: {
			type: 'string',
			maxLength: 50,
			minLength: 0
		},
		protagonist: {
			type: 'string',
			maxLength: 60,
			minLength: 0
		},
		classifyparent: {
			type: 'string',
			maxLength: 10,
			minLength: 0
		},
		classifyschildren: {
			type: 'string',
			maxLength: 10,
			minLength: 0
		},
		score: {
			type: 'number',
			maxLength: 3,
			minLength: 0
		},
		language: {
			type: 'string',
			maxLength: 10,
			minLength: 0
		},
		region: {
			type: 'string',
			maxLength: 10,
			minLength: 0
		},
		issuedate: {
			type: 'string',
			maxLength: 20,
			minLength: 0
		},
		updatetime: {
			type: 'string',
			maxLength: 20,
			minLength: 0
		},
		filmintroduce: {
			type: 'string',
			maxLength: 300,
			minLength: 0
		},
		updatestatus: {
			type: 'string',
			maxLength: 20,
			minLength: 0
		},
		playurl: {
			type: 'string',
			maxLength: 255,
			minLength: 0
		},
		downloadurl: {
			type: 'string',
			maxLength: 255,
			minLength: 0
		}
	}
}