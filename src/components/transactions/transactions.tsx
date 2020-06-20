import React, { useState } from "react";
import Transaction from "./transaction";

import "./transactions.scss"
import { transaction } from "../../data/accountData";

const Transactions = ({ transactions }) => {
    const Moment = require('moment');

    const expendatureFilteredTransactions: transaction[] = transactions.filter(t => Math.sign(t.amount.value) === -1);

    const valueSortedTransactions: transaction[] = expendatureFilteredTransactions.sort((b, a) => a.amount.value - b.amount.value);
    valueSortedTransactions.length = 10;

    const dateSortedTransactions: transaction[] = valueSortedTransactions.sort((a, b) =>
        new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD')
    );

    return (
        <section className="transactions">
            {dateSortedTransactions.map(transaction => {
                return <Transaction key={transaction.id} transaction={transaction} />
            })}
        </section>
    );
}

export default Transactions;
