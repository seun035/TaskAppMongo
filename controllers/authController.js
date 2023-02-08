const authService = require('../services/authService');

module.exports.register = async (req, res, next) => {
    res.status(200).json(await authService.registerUser({email: req.body.email, password: req.body.password}));
};

module.exports.signIn = async (req, res, next) => {
    res.status(200).json(await authService.signInUser({email: req.body.email, password: req.body.password}));
};