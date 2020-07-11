const medicalProduct = require('../models/medicalProduct');
const quote = require('../models/quote');

class PASServices {


    static getQuotation(request) {
        //
        console.log(request);

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