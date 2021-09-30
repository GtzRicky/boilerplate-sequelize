const { Router } = require("express");

const {
    getAllConversations,
    getConversationById,
    createConversation,
    updateConversation,
    deleteConversation,
    conversationUsers,
    conversationParticipants,
    conversationMessages,
    postMessage
} = require("../controllers/conversations.controller");

const { validateToken } = require("../middlewares/auth.middleware");

const router = Router();

router.get("/conversations", validateToken, getAllConversations);

router.get("/conversations/:id", validateToken, etConversationById);

router.post("/conversations", validateToken, createConversation);

router.put("/conversations/:id", validateToken, updateConversation);

router.delete("/conversations/:id", validateToken, deleteConversation);

// Relaciones con otros modelos

router.get("/conversations/:id/users", validateToken, conversationUsers);

router.get("/conversations/:id/participants", validateToken, conversationParticipants);

router.delete("/conversations/:id/participants");

router.get("/conversations/:id/messages", validateToken, conversationMessages);

router.post("/conversations/:id/messages", validateToken, postMessage);

module.exports = router;