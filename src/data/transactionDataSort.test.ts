import { sortByDate, filterExpendature, sortByLowestExpendature } from "./transactionDataSort"

const mockTransactions = [
    {
        "id": "13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28",
        "date": "2018-06-30",
        "description": "Tesco",
        "category_title": "Groceries",
        "amount": {
            "value": -57.21,
            "currency_iso": "GBP"
        }
    },
    {
        "id": "dbad80ded0d2d3419749a8dd391a61bc1b5970bdfffc27f254568ec86e5c0fa06bcc",
        "date": "2018-06-22",
        "description": "Max Mustermann",
        "category_title": "Income",
        "amount": {
            "value": 510.55,
            "currency_iso": "GBP"
        }
    },
    {
        "id": "b11de7abd717eae696d2eedca9c24e5df7652b59a7ad200d43aa88321d908694342d",
        "date": "2018-07-03",
        "description": "Amazon",
        "category_title": "Shopping",
        "amount": {
            "value": -99.95,
            "currency_iso": "GBP"
        }
    },
    {
        "id": "a483bdde46390271ff377949455817a71d3cdf11a3492b2c921477b751265ee9aba4",
        "date": "2018-07-05",
        "description": "Transport for London",
        "category_title": "Transport",
        "amount": {
            "value": -2.85,
            "currency_iso": "GBP"
        }
    },
]

test("filters transactions leaving only expendature", () => {
    expect(filterExpendature(mockTransactions)).toEqual(
        [
            {
                "id": "13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28",
                "date": "2018-06-30",
                "description": "Tesco",
                "category_title": "Groceries",
                "amount": {
                    "value": -57.21,
                    "currency_iso": "GBP"
                }
            },
            {
                "id": "b11de7abd717eae696d2eedca9c24e5df7652b59a7ad200d43aa88321d908694342d",
                "date": "2018-07-03",
                "description": "Amazon",
                "category_title": "Shopping",
                "amount": {
                    "value": -99.95,
                    "currency_iso": "GBP"
                }
            },
            {
                "id": "a483bdde46390271ff377949455817a71d3cdf11a3492b2c921477b751265ee9aba4",
                "date": "2018-07-05",
                "description": "Transport for London",
                "category_title": "Transport",
                "amount": {
                    "value": -2.85,
                    "currency_iso": "GBP"
                }
            },
        ]
    );
})

test("sort transactions by lowest expendature", () => {
    expect(sortByLowestExpendature(mockTransactions)).toEqual(
        [
            {
                "id": "dbad80ded0d2d3419749a8dd391a61bc1b5970bdfffc27f254568ec86e5c0fa06bcc",
                "date": "2018-06-22",
                "description": "Max Mustermann",
                "category_title": "Income",
                "amount": {
                    "value": 510.55,
                    "currency_iso": "GBP"
                }
            },
            {
                "id": "a483bdde46390271ff377949455817a71d3cdf11a3492b2c921477b751265ee9aba4",
                "date": "2018-07-05",
                "description": "Transport for London",
                "category_title": "Transport",
                "amount": {
                    "value": -2.85,
                    "currency_iso": "GBP"
                }
            },
            {
                "id": "13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28",
                "date": "2018-06-30",
                "description": "Tesco",
                "category_title": "Groceries",
                "amount": {
                    "value": -57.21,
                    "currency_iso": "GBP"
                }
            },
            {
                "id": "b11de7abd717eae696d2eedca9c24e5df7652b59a7ad200d43aa88321d908694342d",
                "date": "2018-07-03",
                "description": "Amazon",
                "category_title": "Shopping",
                "amount": {
                    "value": -99.95,
                    "currency_iso": "GBP"
                }
            },
        ]
    )
});

test("sort transactions by Date", () => {
    const Moment = require('moment');

    expect(sortByDate(mockTransactions, Moment)).toEqual(
        [
            {
                "id": "dbad80ded0d2d3419749a8dd391a61bc1b5970bdfffc27f254568ec86e5c0fa06bcc",
                "date": "2018-06-22",
                "description": "Max Mustermann",
                "category_title": "Income",
                "amount": {
                    "value": 510.55,
                    "currency_iso": "GBP"
                }
            },
            {
                "id": "13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28",
                "date": "2018-06-30",
                "description": "Tesco",
                "category_title": "Groceries",
                "amount": {
                    "value": -57.21,
                    "currency_iso": "GBP"
                }
            },
            {
                "id": "b11de7abd717eae696d2eedca9c24e5df7652b59a7ad200d43aa88321d908694342d",
                "date": "2018-07-03",
                "description": "Amazon",
                "category_title": "Shopping",
                "amount": {
                    "value": -99.95,
                    "currency_iso": "GBP"
                }
            },
            {
                "id": "a483bdde46390271ff377949455817a71d3cdf11a3492b2c921477b751265ee9aba4",
                "date": "2018-07-05",
                "description": "Transport for London",
                "category_title": "Transport",
                "amount": {
                    "value": -2.85,
                    "currency_iso": "GBP"
                }
            },
        ]
    )
});