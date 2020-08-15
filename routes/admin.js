const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


const apilist = [
    {
        name: 'This is API admin function',
        description: 'provide token, and API list',
    }

];

router.get('/', (req, res) => {
    res.json(apilist);
});

router.post('/getToken', (req, res) => {

    client = req.body;
    console.log('client:', client);

    authStatus = true; //Placeholder -> integrate with authentication service

    if (authStatus) {
        //jwt.sign({ user: user }, 'secretkey', {expiresIn: '30s'}, (err, token) => {
        jwt.sign({ client: client }, 'secretkey', (err, token) => {
            res.json({
                token: token
            });
        });
    } else {
        res.sendStatus(403);
    }
});


module.exports = router;