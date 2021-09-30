const { Router } = require("express");
const { deleteMessage } = require("../controllers/messages.controller");
const { validateToken, restrictedMiddleware } = require("../middlewares/auth.middleware");

const router = Router();

//DELETE -> borrar un mensaje
router.delete("/messages/:id", validateToken, restrictedMiddleware, deleteMessage);

module.exports = router;
