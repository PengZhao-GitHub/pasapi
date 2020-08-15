
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const PASServices = require('../../services/service');
const { JsonWebTokenError } = require('jsonwebtoken');


// Verify token funciton
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    //console.log(req.headers);
    //console.log(bearerHeader);

    //Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Format of token
        // Authorization: Bearer <access_token>
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // set the token
        req.token = bearerToken;
        // Next middleware
        next();

    } else {
        // Forbidden
        console.log('Token is not defined');
        res.sendStatus(403);

    }


}

//Get product
router.get('/', (req, res) => {
    res.send('PAS API List');
})

//Get product
router.get('/product/:id', (req, res) => {
    const result = PASServices.getProducts(req.params.id);
    res.json(result);
})


//Quotation API
router.get('/quote', (req, res) => {
    console.log("GET BODY", req.body);
    console.log("GET header", req.headers);
    console.log("end...");
    //res.send(JSON.stringify(req.body.identifier));
    const result = PASServices.getQuotation(req.body);
    res.json(result);
});

//Quotation API, it seems that GET cannot receive Body from Angular. Postman works
router.post('/quote', verifyToken, (req, res) => {
    console.log("GET BODY", req.body);
    console.log("GET header", req.headers.authorization);

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        } else {
            console.log(authData);
            //res.send(JSON.stringify(req.body.identifier));
            const result = PASServices.getQuotation(req.body);
            res.json(result);
        }
    })


});




module.exports = router;