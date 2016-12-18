var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send([{ title: "title2", label: "A simple applicatiion", content: "We designed a simple application to focus on demonstrating how these technologies can be used together" }, { title: "title3", label: "A simple applicatiion", content: "We designed a simple application to focus on demonstrating how these technologies can be used together" }, { title: "title4", label: "A simple applicatiion", content: "We designed a simple application to focus on demonstrating how these technologies can be used together" }, { title: "title5", label: "A simple applicatiion", content: "We designed a simple application to focus on demonstrating how these technologies can be used together" }, { title: "title6", label: "A simple applicatiion", content: "We designed a simple application to focus on demonstrating how these technologies can be used together" }]);
});

module.exports = router;