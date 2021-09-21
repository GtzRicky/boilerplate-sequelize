const { Router } = require("express");

const {getAllUsers, getUserById, createUser, updateUser, deleteUser} = require("../controllers/users.controller.js");

const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;