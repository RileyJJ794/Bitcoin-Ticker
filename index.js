const express = require('express');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {
    const crypto = req.body.crypto;
    const fiat = req.body.fiat;
    console.log(crypto)
    console.log(fiat)
});


app.listen(3000, function() {
    console.log("server is running on port 3000");
});