const UserService = require("../services/users.services");

const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserService.getAll();
        return res.json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await UserService.getById(id);
        return res.json(user);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password, profile_image, phone } = req.body;

        const newUser = {
            firstname,
            lastname,
            email,
            password,
            profile_image,
            phone
        };

        const user = await UserService.create(newUser);
        return res.json(user);
        
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, email, password, profile_image, phone } = req.body;

        const updatedUser = {
            firstname,
            lastname,
            email,
            password,
            profile_image,
            phone
        };

        const user = await UserService.update(updatedUser, id);
        if (user && user[0]) {
            return res.json({ message: "Se ha actualizado el registro en el sistema" });
        }
        return res.json({ message: "No se ha podido actualizar el registro en el sistema" });
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deleted = await UserService.delete(id);
        if (deleted) {
            return res.json({ message: "Se ha eliminado el registro en el sistema "});
        }
        return res.json({ message: "No se ha podido eliminar el registro en el sistema" });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}