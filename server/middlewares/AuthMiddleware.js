const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const accessToken = req.header('accessToken');

  if (!accessToken) {
    return res.json({ error: '사용자가 로그인 되지 않았습니다.' });
  } else {
    try {
      const validToken = verify(accessToken, 'importantsecret');
      req.user = validToken;
      if (validToken) {
        return next();
      }
    } catch (err) {
      return res.json({ error: err });
    }
  }
};

module.exports = { validateToken };
