const medicalProduct = require('../models/medicalProduct');
const quote = require('../models/quote');

class PASServices {


    static getQuotation(request) {
        //
        console.log(request);

        quote.result.totalPremium = 1000 * Math.floor( Math.random() * 11 );

        return quote;
    }

    static getProducts(id) {
        //Process the request and get the product
        //Place holder
        //
        if(id==='001') {
            return medicalProduct;
        } else {
            return null;
        }
    }
        

}

module.exports = PASServices;