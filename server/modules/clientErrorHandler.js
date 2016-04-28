var clientErrorHandler = function(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'We apologize, but something went wrong.' });
    } else {
        next(err);
    }
};

module.exports = clientErrorHandler;
