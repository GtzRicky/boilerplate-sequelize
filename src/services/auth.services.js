const { users } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthService {
    static async login(email, password) {
        try {
            let result = await users.findOne({ where: {email}});

            const error = new Error("Las credenciales son incorrectas");
            error.name = "InvalidCredentials";
            if(!result){
                throw  error;
            }

            const valid = bcrypt.compareSync(password, result.password);
            result = JSON.parse(JSON.stringify(result));
            if(!valid) {
                throw error
            }
            const token = this.genToken(result);
            return {
                token,
                user: result
            };
        } catch (error) {
            throw error;
        }
    }

    static genToken(user) {
        try {
            const token = jwt.sign(user, 'academlocat21', {
                expiresIn: "2h",
                algorithm: "HS256"
            });
            return token
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthService;