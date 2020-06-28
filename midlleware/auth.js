const jwt = require("jsonwebtoken");
// const config = require("config");

function parseCookies(request) {
  var list = {},
    rc = request.headers.cookie;

  rc && rc.split(';').forEach(function (cookie) {
    var parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  return list;
}




module.exports = function(req, res, next) {
  let token ; 

  let cookie =parseCookies(req) ;

  token = cookie.jwt ;



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
