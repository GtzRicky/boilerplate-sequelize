const { Router } = require("express");

const {
    getAllConversations,
    getConversationById,
    createConversation,
    updateConversation,
    deleteConversation,
    conversationUsers,
    conversationParticipants,
    conversationMessages
} = require("../controllers/conversations.controller.js");

const router = Router();

router.get("/conversations", getAllConversations);

router.get("/conversations/:id", getConversationById);

router.post("/conversations", createConversation);

router.put("/conversations/:id", updateConversation);

router.delete("/conversations/:id", deleteConversation);

// Relaciones con otros modelos

router.get("/conversations/:id/users", conversationUsers);

router.get("/conversations/:id/participants", conversationParticipants);

router.get("/conversations/:id/messages", conversationMessages);

module.exports = router;