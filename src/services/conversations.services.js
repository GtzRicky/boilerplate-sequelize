const { extractExpectedAssertionsErrors } = require("expect");
const { conversations, users, participants, messages } = require("../models");

class ConversationService {
    static async getAll() {
        try {
            let results = await conversations.findAll();
            return results;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            let result = await conversations.findByPk(id);
            if(result){
                return result;
            }
            return {};
        } catch (error) {
            throw error;
        }
    }

    static async create(newConversation) {
        try {
            let result = await conversations.create(newConversation);
            await participants.create({ conversation_id: conversation.id, user_id: conversation.created_by});
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(updateConversation, id) {
        try {
            let result = await conversations.update(updateConversation, {where : {id}});
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            let result = await conversations.destroy({where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async joinUsers(id) {
        try {
            let result = await conversations.findOne({
                where: {id},
                include: [
                    {
                        model: users,
                        as: "created_by_user"
                    }
                ]
            });
            return result
        } catch (error) {
            throw error;
        }
    }

    static async joinParticipants(id) {
        try {
            let result = await conversations.findOne({
                where: {id},
                include: [
                    {
                        model: participants,
                        as: "participants",
                        include: [
                            {
                                model: users,
                                as: "user"
                            }
                        ]
                    }
                ]
            });
            return result
        } catch (error) {
            throw error;
        }
    }

    static async deleteParticipant(id) {
        try {
            let result = await conversations.destroy({
                where: {id},
                include: [
                    {
                        model: participants,
                        as: "participants",
                        include: [
                            {
                                model: users,
                                as: "user"
                            }
                        ]
                    }
                ]
            });
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async joinMessages(id) {
        try {
            let result = await conversations.findOne({
                where: {id},
                include: [
                    {
                        model: messages,
                        as: "messages"
                    }
                ]
            });
            return result
        } catch (error) {
            throw error;
        }
    }

    static async getConversationsFromUser(id) {
        try {
            const results = await conversations.findAll({include: [
                { model: participants, as:  "participants", where: { user_id: id } }
            ]});
            return results;
        }
        catch (error) {
            throw error;   
        }
    }
    
    static async sendMessage(sender_id, conversation_id, message) {
        const newMessage = {
            sender_id,
            conversation_id,
            message
        }

        try {
            let result = await messages.create(newMessage);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ConversationService;