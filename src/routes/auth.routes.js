const { Router } = require("express");
const { authenticate } = require("../controllers/auth.controller");

const router = Router();

router.post("/auth/signin", authenticate);

module.exports = router;