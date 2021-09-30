const middlewareError = (error, req, res, next) => {
    res.status(400).json({
        error: {
            name: error.name,
            message: error.message
        }
    });
};

module.exports = middlewareError;