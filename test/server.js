/**
 * @description jest server
 * @author  Xujs
 */

const request = require('supertest');
const server = require('../src/app').callback();


module.exports = request(server);
