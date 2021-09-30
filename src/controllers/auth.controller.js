const AuthService = require("../services/auth.services");

const authenticate = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        const token = await AuthService.login(email, password);
        return res.json({
            message: "Has iniciado sesión",
            token
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    authenticate
};