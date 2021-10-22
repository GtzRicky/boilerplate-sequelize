const AuthService = require("../services/auth.services");

const authenticate = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await AuthService.login(email, password);
        return res.json({
            accessToken: token,
            user: {
                ...user,
                roles: [
                    "ROLE_ADMIN"
                ]
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    authenticate
};