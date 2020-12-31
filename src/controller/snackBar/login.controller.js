const loginService = require('../../service/snackBar/login.service')

exports.login = async (req, res) => {
  const {code} = req.query
  try{
    const result = await loginService.login(code)
    return res.send(result)
  }catch (e) {
    return res.json({
      status: 500,
      message: e.message
    })
  }

}
