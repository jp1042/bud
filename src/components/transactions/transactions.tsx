import React from "react";
import Transaction from "./transaction";
import {
    filterExpendature,
    sortByLowestExpendature,
    sortByDate
} from "../../data/transactionDataSort";

const Transactions = ({ transactions }) => {
    const Moment = require('moment');

    const expendatureFilteredTransactions = filterExpendature(transactions);

    const valueSortedTransactions = sortByLowestExpendature(expendatureFilteredTransactions);
    valueSortedTransactions.length = 10;

    const dateSortedTransactions = sortByDate(valueSortedTransactions, Moment);

    return (
        <section className="transactions">
            {dateSortedTransactions.map(transaction => {
                return <Transaction key={transaction.id} transaction={transaction} />
            })}
        </section>
    );
}

export default Transactions;
