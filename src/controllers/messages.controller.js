const MessageService = require("../services/messages.services");

const deleteMessage = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deleted = await MessageService.delete(id);
        if (deleted) {
            return res.json({ message: "Se ha eliminado el registro en el sistema "});
        }
        return res.json({ message: "No se ha podido eliminar el registro en el sistema" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    deleteMessage
};