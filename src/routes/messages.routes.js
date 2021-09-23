const { Router } = require("express");

const router = Router();

//DELETE -> borrar un mensaje
router.delete("/messages/:id");

module.exports = router;
