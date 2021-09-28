const { Router } = require("express");
const { authenticate } = require("../controllers/auth.controller");

const router = Router();

router.post("/auth/login", authenticate);

module.exports = router;