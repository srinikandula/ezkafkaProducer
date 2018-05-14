var express = require('express');
var AuthRouter = express.Router();
var OpenRouter = express.Router();

var kafka=require('../kafka/kafkaProducer');


OpenRouter.get('/AddDevicePositions', function (req, res) {
    kafka.sendRecord(req.query, function (result) {
        res.send(result);
    });
});

module.exports = {
    AuthRouter: AuthRouter,
    OpenRouter: OpenRouter
};