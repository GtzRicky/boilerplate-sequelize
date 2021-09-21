const { Router } = require("express");


const router = Router();

router.get("/conversations", getAllUsers);

router.get("/conversations/:id", getUserById);

router.post("/conversations", createUser);

router.put("/conversations/:id", updateUser);

router.delete("/conversations/:id", deleteUser);

// Relaciones con otros modelos

router.get("/conversations/:id/users", );

router.get("/conversations/:id/participants", );

router.get("/conversations/:id/messages", );

module.exports = router;