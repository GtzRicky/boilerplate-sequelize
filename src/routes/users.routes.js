const { Router } = require("express");

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/users.controller");

const { conversationsFromUser } = require("../controllers/conversations.controller");

const { validateToken, restrictedMiddleware } = require("../middlewares/auth.middleware");

const router = Router();

router.get("/users", validateToken, getAllUsers);

router.get("/users/:id", validateToken, getUserById);

router.post("/users", createUser);

router.put("/users/:id", validateToken, restrictedMiddleware, updateUser);

router.delete("/users/:id", validateToken, restrictedMiddleware, deleteUser);

//Completar la siguiente ruta
router.get("/users/:id/conversations", validateToken, restrictedMiddleware, conversationsFromUser);

module.exports = router;