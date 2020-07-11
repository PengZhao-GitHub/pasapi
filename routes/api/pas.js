
const express = require('express');
const router = express.Router();

const PASServices = require('../../services/service');



const apilist = [
    {
        name: 'quotation',
        description: 'Get quotes',
        url: '/quote',
        version: '1.0',
        status: 'active'
    }

];

router.get('/', (req, res) => {
    res.json(apilist);
});


//Get product
router.get('/product/:id', (req, res) => {
    const result = PASServices.getProducts(req.params.id);
    res.json(result);
})


//Quotation API
router.get('/quote', (req, res) =>{
    console.log("GET BODY", req.body);
    //res.send(JSON.stringify(req.body.identifier));
    const result = PASServices.getQuotation(req.body);
    res.json(result);
});



module.exports = router;