const User = require('../database/models/user');

module.exports.getUserById = async (userId) => {

    const user = await User.findByPk(userId);

    if (!user) {
        let error = new Error()
        error.statusCode = 404;
    
        throw error
    }

    return user;
}

module.exports.getUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
        let error = new Error()
        error.statusCode = 404;
    
        throw error
    }

    return user;
}