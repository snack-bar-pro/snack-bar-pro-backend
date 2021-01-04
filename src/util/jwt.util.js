const jwt = require("jsonwebtoken");

const secretKey = "[&m(jVA)*%AGc*8qkge]}9`P.e:W*N";

const sign = (openid) => {
  return jwt.sign({ openid }, secretKey, { algorithm: "HS512" });
};

const decode = (token) => {
  return jwt.decode(token);
};

const verify = (token) => {
  if (!token) {
    return false;
  }
  try {
    return jwt.verify(token, secretKey, { algorithm: ["HS512"] });
  } catch (e) {
    return false;
  }
};

module.exports = {
  sign,
  decode,
  verify
};
