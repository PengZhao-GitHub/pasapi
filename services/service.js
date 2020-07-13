const medicalProduct = require('../models/medicalProduct');
const quote = require('../models/quote');

class PASServices {


    static getQuotation(request) {
        //
        console.log(request);

        var coverages = quote.product.coverages;

        coverages = coverages.filter(t => {
            for (let i = 0; i < request.coverages.length; i++) {
                if (t.coverageCode === request.coverages[i].coverageCode) {
                    return true;
                };
            }
        } );

        console.log(coverages);

        quote.result.totalPremium = 0;
        
        coverages.forEach(c => {
            quote.result.totalPremium = quote.result.totalPremium + c.preimum;
        })

        return quote;
    }

    static getProducts(id) {
        //Process the request and get the product
        //Place holder
        //
        if (id === '001') {
            return medicalProduct;
        } else {
            return null;
        }
    }


}

module.exports = PASServices;