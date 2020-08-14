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
  
    user = req.body;

    console.log('client:', user);
    
    // Placeholder
    // 1. Use the oathToken to check if the customer is authenticated

    //jwt.sign({ user: user }, 'secretkey', {expiresIn: '30s'}, (err, token) => {
    jwt.sign({ user: user }, 'secretkey',  (err, token) => {
        /*
        res.set('Access-Control-Allow-Credentials', 'true')
        res.set('Access-Control-Allow-Origin', req.headers.origin)
        */
        res.json({
            token: token
        });
    });
});





module.exports = router;