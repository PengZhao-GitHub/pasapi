const medicalProduct = {
    
    product: {
        productCode: '001',
        productName: '私にうれしい医療保険',
        terms: [
            120
        ],
        coverages: [
            {
                riskCode: 'r02',
                riskName: '入院',
                coverageCode: 'c003',
                coverageName: '入院保険金',
                limitOption: [
                    5000,
                    7000,
                    10000,
                ],
            },
            {
                riskCode: 'r04',
                riskName: '手術',
                coverageCode: 'c005',
                coverageName: '手術保険金',
                limitOption: [
                    50000,
                    100000,
                    200000
                ],
            },
            {
                riskCode: 'r05',
                riskName: '先進医療',
                coverageCode: 'c006',
                coverageName: '先進医療費用保険金',
                limitOption: [
                    20000000
                ],
                womenOnly: false
            },

            {
                riskCode: 'r03',
                riskName: '特定疾病',
                coverageCode: 'c004',
                coverageName: '特定疾病特約',
                limitOption: [
                    300000,
                    500000,
                    800000
                ],
            },
            {
                riskCode: 'r06',
                riskName: '通院',
                coverageCode: 'c007',
                coverageName: '通院特約',
                limitOption: [
                    100000
                ],
            },
        ]
    }
}

module.exports = medicalProduct; 