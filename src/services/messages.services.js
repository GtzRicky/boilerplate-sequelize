const { messages } = require("../models");

class MessageService {
    static async delete(id) {
        try {
            let results = await messages.destroy({where: id});
            return results;
        } catch (error) {
            throw error;
        }
    }
}

module.exports= MessageService;