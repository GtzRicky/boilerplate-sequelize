const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    //Validar que el token sea válido
    const bearerToken = req.headers.authorization;
    if(bearerToken) {
        const token = bearerToken.split("Bearer ")[1];
        try {
            const decoded = jwt.verify(token, "academlocat21");
            req.user = decoded;
            return next();
        } catch (error) {
            return next(error); 
        }
    };

    const tokenError = new Error("No se proporcionó el token");
    tokenError.name = "JsonWebTokenError";
    return next(tokenError);
};

const restrictedMiddleware = (req, res, next) => {
    const { id: userId } = req.user; //EL id del usuario que está loggeado
    const { id: paramId } = req.params; //Id que ha enviado el usuario en la petición

    if(userId !== Number(paramId)){
        const error = new Error("No tienes el permiso para realizar esta operación");
        error.name = "insufficientPermissions";
        return next(error)
    }
    return next();
};

module.exports = {
    validateToken,
    restrictedMiddleware
};