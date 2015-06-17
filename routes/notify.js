/**
 * Created by tommy on 15/6/16.
 */

var express = require('express');
var router = express.Router();

router.post('/notify', function(req, res, next) {
    var p = req.body;
    if(p.event == undefined || p == "") {
        res.send(400);
    }

    global.io.emit(p.event, p.params);

    res.send(p);
});

router.get('/', function(req, res, next) {
    res.send("EventService");
});

module.exports = router;