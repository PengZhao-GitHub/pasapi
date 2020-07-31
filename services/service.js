const medicalProduct001 = require('../models/001');
const medicalProduct002 = require('../models/002');
const medicalProduct003 = require('../models/003');
const medicalProduct004 = require('../models/004');

const quote = require('../models/quote');
const { product } = require('../models/002');

class PASServices {

    static getProducts(id) {

        let product = {};
        //Process the request and get the product
        //Place holder
        //
        /*
        if (id === '001' || id === '002' || id === '003') {
            return medicalProduct001;
        } else {
            return null;
        }
        */

        switch (id) {
            case '001':
                product = medicalProduct001;
                break;
            case '002':
                product = medicalProduct002;
                break;
            case '003':
                product = medicalProduct003;
                break;
            case '004':
                product = medicalProduct004;
        }

        return product; 
  

    }

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
        });

        console.log(coverages);

        quote.result.totalPremium = 0;

        coverages.forEach(c => {
            quote.result.totalPremium = quote.result.totalPremium + c.preimum;
        })

        return quote;
    }
}

module.exports = PASServices;