const express = require('express');

const bodyParser = require('body-parser');

const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {
    const crypto = req.body.crypto;
    const fiat = req.body.fiat;
    const ammount = req.body.ammount;
    console.log(crypto)
    console.log(fiat)
    console.log(ammount)

    options = {
        url: 'https://apiv2.bitcoinaverage.com/convert/global',
        method: 'GET',
        qs: {
            from: crypto,
            to: fiat,
            amount: ammount
        }
    };

    request(options, function(error, response, body){
        console.log('error', error);
        console.log('statusCode', response && response.statusCode);
        console.log('body', body);

        const data = JSON.parse(body);

        res.send("The Price of " + ammount + " " + crypto + " is " + data['price'] + " USD.");
        
    })
    
});


app.listen(3000, function() {
    console.log("server is running on port 3000");
});