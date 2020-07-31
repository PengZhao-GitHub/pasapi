const medicalProduct = {
    
    product: {
        productCode: '004',
        productName: 'スーパー医療保険',
        terms: [
            6,
            12
        ],
        coverages: [
            {
                riskCode: 'r01',
                riskName: 'ガン',
                coverageCode: 'c001',
                coverageName: 'ガン診断一時金',
                limitOption: [
                    200000
                ],

            },

            {
                riskCode: 'r01',
                riskName: 'ガン',
                coverageCode: 'c002',
                coverageName: 'ガン入院療養一時金',
                limitOption: [
                    300000,
                    500000,
                    800000
                ],

            },
            {
                riskCode: 'r02',
                riskName: '入院',
                coverageCode: 'c003',
                coverageName: '入院療養一時金',
                limitOption: [
                    50000,
                    100000
                ],

            },
            {
                riskCode: 'r03',
                riskName: '脳卒中・心筋梗塞',
                coverageCode: 'c004',
                coverageName: '特定疾病入院療養一時金',
                limitOption: [
                    300000,
                    500000,
                    800000
                ],

            },
            {
                riskCode: 'r04',
                riskName: '手術',
                coverageCode: 'c005',
                coverageName: '手術保険金',
                limitOption: [
                    50000,
                    100000
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
            },

        ]
    }
}

module.exports = medicalProduct; 