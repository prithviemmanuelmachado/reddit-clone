const jwt = require('jsonwebtoken');
const jwt_secret = 'assdgasetdfn32124n';

module.exports = function(userId)
{
    return jwt.sign({ userId: userId }, jwt_secret, { expiresIn : '2h'});
};