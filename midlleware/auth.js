const jwt = require("jsonwebtoken");
// const config = require("config");

module.exports = function(req, res, next) {
  let tkn = req.headers.cookie.split('=');
  const token = tkn[1];
  
  

  if (!token) {
    return res.status(401).json({ msg: "No token , authorization denied" });
  }

  try {
    const decoded = jwt.verify(
      token,
      "my-own-ultra-secure-and-ultra-long-secret"
    );
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
