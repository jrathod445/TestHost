var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname })
});

// const router = express.Router();
module.exports = router;