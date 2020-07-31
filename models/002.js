const medicalProduct = {
    
    product: {
        productCode: '002',
        productName: 'ザ・大人の医療保険',
        terms: [
            6,
            12
        ],
        coverages: [
            {
                riskCode: 'r02',
                riskName: '入院',
                coverageCode: 'c003',
                coverageName: '入院保険金',
                limitOption: [
                    50000,
                    100000
                ],
                womenOnly: false
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
                womenOnly: false
            },
            {
                riskCode: 'r05',
                riskName: '通院',
                coverageCode: 'c006',
                coverageName: '通院療養保険金',
                limitOption: [
                    20000
                ],
                womenOnly: false
            },
            {
                riskCode: 'r06',
                riskName: '入院',
                coverageCode: 'c007',
                coverageName: '退院療養一時金支払特約',
                limitOption: [
                    100000
                ],
                womenOnly: true
            },
            {
                riskCode: 'r06',
                riskName: '特約',
                coverageCode: 'c008',
                coverageName: '無事故戻し特約',
                limitOption: [
                    300000,
                    500000
                ],
                womenOnly: true
            },
            {
                riskCode: 'r07',
                riskName: '特約',
                coverageCode: 'c009',
                coverageName: '賠償責任危険担保特約',
                limitOption: [
                    100000
                ],
                womenOnly: true
            }

        ]
    }
}

module.exports = medicalProduct; 