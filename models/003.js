const medicalProduct = {
    
    product: {
        productCode: '003',
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
                womenOnly: false
            },

            {
                riskCode: 'r01',
                riskName: 'ガン',
                coverageCode: 'c002',
                coverageName: 'ガン入院療養一時金',
                limitOption: [
                    200000,
                    300000,
                    500000,
                    800000,
                    1000000,
                    
                ],
                womenOnly: false
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
                womenOnly: false
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
                riskName: '先進医療',
                coverageCode: 'c006',
                coverageName: '先進医療費用保険金',
                limitOption: [
                    20000000
                ],
                womenOnly: false
            },
            {
                riskCode: 'r06',
                riskName: '女性特有のガン',
                coverageCode: 'c007',
                coverageName: '女性特有のガン診断一時金',
                limitOption: [
                    100000
                ],
                womenOnly: true
            },
            {
                riskCode: 'r06',
                riskName: '女性特有のガン',
                coverageCode: 'c008',
                coverageName: '女性特有のガン入院療養一時金',
                limitOption: [
                    300000,
                    500000
                ],
                womenOnly: true
            },
            {
                riskCode: 'r07',
                riskName: '異常妊娠・異常分娩',
                coverageCode: 'c009',
                coverageName: '異常妊娠・異常分娩一時金',
                limitOption: [
                    100000
                ],
                womenOnly: true
            }

        ]
    }
}

module.exports = medicalProduct; 