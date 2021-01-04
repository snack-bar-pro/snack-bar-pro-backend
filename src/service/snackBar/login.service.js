const axios = require('axios')
const { sign } = require('../../util/jwt.util')

const request = axios.create({
  baseURL: 'https://api.weixin.qq.com'
})

const appId = 'wx5d8a4849a36d18ce'
const secretKey = '8adb66deb5a714e4c5181041a275cb63'

const login = async (code) => {
  const api = `/sns/jscode2session?appid=${appId}&secret=${secretKey}&js_code=${code}&grant_type=authorization_code`
  const result = await request.get(api)
  return sign(result.data.openid)
}

module.exports = {
  login
}
