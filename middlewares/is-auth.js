const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) {
        
    }

    const token = req.headers.authorization?.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, "myverylongsecretprivatekey");
        console.log(decodedToken);
    } catch (error) {
        const err = new Error("Invalid token");
        err.status = 404;
        throw err;
    }

    if (!decodedToken) {
        const err = new Error("Invalid token");
        err.status = 401;
        throw err;
    }

    const user = await userService.getUserByEmail(decodedToken.email)
    req.email = user.email;
    req.userId = user.id;
    next();
}