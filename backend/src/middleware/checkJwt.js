const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const authConfig = {
  domain: "dev-r0e7zuee.us.auth0.com",
  audience: "https://dev-r0e7zuee.us.auth0.com/api/v2/"
};

const jwtOptions = {
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
};

const checkJwt = jwt(jwtOptions);

module.exports = checkJwt;