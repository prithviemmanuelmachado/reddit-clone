const jwt = require('jsonwebtoken');

module.exports = function(userId, jwt_secret)
{
    return jwt.sign({ userId: userId }, jwt_secret, { expiresIn : '2h'});
};