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
}

module.exports = ConversationService;